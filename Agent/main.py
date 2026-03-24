import logging
import os
from datetime import datetime, timedelta
from livekit.plugins import google, assemblyai, sarvam
from dotenv import load_dotenv
from livekit.agents import (
    Agent,
    AgentSession,
    JobContext,
    JobProcess,
    MetricsCollectedEvent,
    RoomInputOptions,
    WorkerOptions,
    cli,
    metrics,
    function_tool,
    RunContext,
)
from livekit.plugins import noise_cancellation, silero
from livekit.plugins.turn_detector.multilingual import MultilingualModel
from supabase import create_client, Client
from postgrest.exceptions import APIError

logger = logging.getLogger("agent")

load_dotenv(".env.local")

# Initialize Supabase client
SUPABASE_URL = "https://agxjjwwpxfvfeybaapou.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFneGpqd3dweGZ2ZmV5YmFhcG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMjMyNzgsImV4cCI6MjA3NzU5OTI3OH0.gYVY0xSWYKaecksFSo0tsKOVYbejlLYpC6mTwSeYfEo"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


class InterviewData:
    """Stores fetched interview data"""

    def __init__(self):
        self.candidate_name = ""
        self.resume_summary = ""
        self.position_name = ""
        self.duration = ""
        self.level = ""
        self.jd_summary = ""
        self.questions = []


async def fetch_interview_data(job_id: str, user_id: str) -> InterviewData:
    """
    Fetches all required data from database at the start of interview

    Args:
        job_id: The job posting ID
        user_id: The candidate user ID

    Returns:
        InterviewData object with all fetched information

    Raises:
        ValueError: If required data is not found in database
        APIError: If Supabase API request fails
    """
    logger.info(f"Fetching interview data for job_id={job_id}, user_id={user_id}")

    data = InterviewData()

    try:
        # Fetch user data
        logger.info(f"Querying users table for user_id={user_id}")
        user_response = (
            supabase.table("users")
            .select("name, resume_summary")
            .eq("id", user_id)
            .execute()
        )

        if not user_response.data or len(user_response.data) == 0:
            raise ValueError(f"No user found with id={user_id}")

        data.candidate_name = user_response.data[0].get("name")
        data.resume_summary = user_response.data[0].get("resume_summary")

        if not data.candidate_name:
            raise ValueError(f"User {user_id} has no name in database")
        if not data.resume_summary:
            raise ValueError(f"User {user_id} has no resume summary in database")

        logger.info(f"Fetched user data: {data.candidate_name}")

        # Fetch job data
        logger.info(f"Querying jobs table for job_id={job_id}")
        job_response = (
            supabase.table("jobs")
            .select("position_name, duration, level, jd_summary")
            .eq("id", job_id)
            .execute()
        )

        if not job_response.data or len(job_response.data) == 0:
            raise ValueError(f"No job found with id={job_id}")

        data.position_name = job_response.data[0].get("position_name")
        data.duration = job_response.data[0].get("duration")
        data.level = job_response.data[0].get("level")
        data.jd_summary = job_response.data[0].get("jd_summary")

        if not data.position_name:
            raise ValueError(f"Job {job_id} has no position_name in database")
        if not data.duration:
            raise ValueError(f"Job {job_id} has no duration in database")
        if not data.level:
            raise ValueError(f"Job {job_id} has no level in database")
        if not data.jd_summary:
            raise ValueError(f"Job {job_id} has no jd_summary in database")

        logger.info(f"Fetched job data: {data.position_name}")

        # Fetch questions
        logger.info(f"Querying questions table for job_id={job_id}")
        questions_response = (
            supabase.table("questions")
            .select("question_number, question")
            .eq("job_id", job_id)
            .order("question_number")
            .execute()
        )

        if not questions_response.data or len(questions_response.data) == 0:
            raise ValueError(f"No questions found for job_id={job_id}")

        data.questions = questions_response.data
        logger.info(f"Fetched {len(data.questions)} questions")

        logger.info("Data fetch completed successfully")
        return data

    except APIError as e:
        logger.error(f"Supabase API error: {e}")
        raise

    except ValueError as e:
        logger.error(f"Data validation error: {e}")
        raise

    except Exception as e:
        logger.error(f"Unexpected error fetching interview data: {e}")
        raise


class Assistant(Agent):
    def __init__(self, interview_data: InterviewData) -> None:
        # Build dynamic instructions based on fetched data
        questions_text = "\n".join(
            [
                f"{q['question_number']}. {q['question']}"
                for q in interview_data.questions
            ]
        )

        instructions = f"""
You are an AI interviewer for the {interview_data.position_name} position.

CANDIDATE INFORMATION:
- Name: {interview_data.candidate_name}
- Level: {interview_data.level}
- Duration: {interview_data.duration}

INTERVIEW STRUCTURE:
You must conduct an interview with the following questions:

{questions_text}

INTERVIEW RULES:
- Start by greeting the candidate by name and asking them to introduce themselves and explain their interest in the role
- Track time carefully 
- Reserve the last 2 minutes for candidate questions about the company/role
- For each question:
  * If the answer is correct: Move to next question
  * If answer is partially correct: Ask up to 2 follow-up questions maximum then move to the next question
  * If answer is incorrect or the candidate doesn't know the answer: Provide brief feedback and move to next question
- Move through questions systematically in order
- Never mention the question number; just naturally ask the questions
- If all questions are covered before time ends, ask if candidate has questions about the role or company
- When interview time ends or all questions are covered, politely inform the candidate and ask them to click the end call button
- Always stick to the interview.
- Never make up information or ask questions that are not in the interview.

TIME MANAGEMENT:
- Monitor elapsed time throughout the interview
- Adjust pacing to ensure all questions are covered
- When 2 minutes remain, begin wrapping up current question and transition to candidate questions
- Use the get_interview_time tool to check elapsed time

TONE:
- Professional yet friendly
- Encouraging and supportive
- Clear and concise in your questions
- Provide brief feedback after each answer before moving forward
- Address the candidate by their name occasionally to maintain personal connection
- Always stick to the candidate's name provided here in the interview: {interview_data.candidate_name}
"""

        super().__init__(instructions=instructions)
        self.interview_start_time = None
        self.interview_data = interview_data

    @function_tool
    async def get_resume(self, context: RunContext) -> str:
        """Retrieves the candidate's resume information.
        Use this tool when you need to ask resume-based questions.

        Returns:
            str: The candidate's resume summary
        """
        logger.info("Fetching candidate resume")
        return f"""
CANDIDATE RESUME - {self.interview_data.candidate_name}

{self.interview_data.resume_summary}
"""

    @function_tool
    async def get_job_description(self, context: RunContext) -> str:
        """Retrieves the job description for the position.
        Use this to understand role requirements.

        Returns:
            str: The job description summary
        """
        logger.info("Fetching job description")
        return f"""
JOB DESCRIPTION: {self.interview_data.position_name}

Level: {self.interview_data.level}
Duration: {self.interview_data.duration}

{self.interview_data.jd_summary}
"""

    @function_tool
    async def get_interview_time(self, context: RunContext) -> str:
        """Gets the elapsed time since interview started in minutes and seconds.

        Returns:
            str: Elapsed time in format "X minutes Y seconds"
        """
        if self.interview_start_time is None:
            return "Interview not started yet"

        elapsed = datetime.now() - self.interview_start_time
        minutes = int(elapsed.total_seconds() // 60)
        seconds = int(elapsed.total_seconds() % 60)
        logger.info(f"Interview time elapsed: {minutes}m {seconds}s")
        return f"{minutes} minutes {seconds} seconds elapsed"


def prewarm(proc: JobProcess):
    proc.userdata["vad"] = silero.VAD.load()


async def entrypoint(ctx: JobContext):
    # Extract job_id and user_id from room name (format: job_id_user_id)
    room_name_parts = ctx.room.name.split("_", 1)
    if len(room_name_parts) != 2:
        error_msg = f"Room name '{ctx.room.name}' does not match expected format 'job_id_user_id'"
        logger.error(error_msg)
        raise ValueError(error_msg)

    JOB_ID = room_name_parts[0]
    USER_ID = room_name_parts[1]
    logger.info(
        f"Extracted job_id={JOB_ID}, user_id={USER_ID} from room name: {ctx.room.name}"
    )

    # Fetch all interview data at the beginning
    logger.info("Starting data fetch from database...")
    try:
        interview_data = await fetch_interview_data(JOB_ID, USER_ID)
    except Exception as e:
        logger.error(f"Failed to fetch interview data: {e}")
        raise

    logger.info(
        f"Data fetch completed - Candidate: {interview_data.candidate_name}, Position: {interview_data.position_name}, Questions: {len(interview_data.questions)}"
    )

    # Logging setup
    ctx.log_context_fields = {
        "room": ctx.room.name,
        "job_id": JOB_ID,
        "user_id": USER_ID,
        "candidate": interview_data.candidate_name,
    }

    # Set up a voice AI pipeline using AssemblyAI STT, Gemini LLM, Google Cloud TTS, and the LiveKit turn detector
    session = AgentSession(
        stt=assemblyai.STT(
            api_key="a504e2168be74a989caef5943cb661a6",
        ),
        llm=google.LLM(
            model="gemini-2.5-flash",
            api_key="AIzaSyB_PSUHKkUzZutjuoeP5wjtO5ZaFeVistk",
        ),
        # tts=sarvam.TTS(
        #     target_language_code="en-IN",
        #     speaker="hitesh",
        #     pitch=-0.1,
        #     pace=0.9,
        #     loudness=1,
        #     speech_sample_rate=24000,
        #     enable_preprocessing=True,
        #     model="bulbul:v2",
        #     api_key="sk_kfruvy5d_J2DpNdxTi2BNbwffXOsvwB2s",
        # ),
        tts=google.TTS(
            language="en-US",
            voice_name="en-US-Journey-O",
            speaking_rate=1.0,
            sample_rate=24000,
            credentials_info={
                "type": "service_account",
                "project_id": "planar-ripsaw-472713-h9",
                "private_key_id": "fb6dc3fd1cfc76421d3b171786411ff7a115e2b6",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgAE1lgqFqfqN+\nRAwen54L2PPaUNERkhjxNTrPU/3kBUCYtap3K9370fuY1kE7+XhaO21nMsHUrks/\n0wElxryBICwfAOC79ZATQG+juHTs66efmeWOiUNLKj6WLoqyhyuFNu2IfiLffg6s\no/heL1+jMFqBxUZQge2PWwBYfWT1vuPgZtkZOdXo8uG4SxtKG69LeZ70VXLiTGkE\n1Do/qZM86oyvSmU9zqmbJVhXRK9Z47+sklOW+A2zVmJoRAnkqyR+T5hCmaHAZVqw\nW0K849yhmVBbln1eBLbLe+SZyQqqoYAQ1/vRonMV2gcL7f+suBFqtJRl7n7FFE9I\nMtRH5C+jAgMBAAECggEAIcQJ5q5dVKdIT+VECm23LkQC5jreeQ6T0fBbMBuSHwgn\np51i19n1+Vq62Vwas0a0vK1OnYrKKxwm3bUZ7C7cBX7rB7VjKxImKLDC42QPxBL1\nzpotP2IzkaYJjyvu3mB/z/HqtnOFIDlpTt7ctp3fhcLpMbyiD8q2G7D1CWHFkUFv\n6uCH7vcWx1jTYjLZdggozC4XD5/WVbakKX9cQVbhq5/lhgQDuEI0EPh5T4GKvbvR\nL4A1JeWEJ8gj14kW6NPbRZiU/y6wb84NSxExM+Syk3kSgCcTcUbwVVTZYvqFoSxg\naosQZ8tcWgLXVCLLxB9F9Mn9Pwh+D5clZtes0W0bIQKBgQD4xoVxF3WDZqqu4h2N\nPIgAr/3N7a26W76xdbg8yz/bZv/y4F3n55ch10qZCAa7rTxrXdcMB3TnhecF7R28\npOFG8JTojP6yrTmpHkJOpW9QnhTgaTmFz3R0SLwCevH0f7qUd8EQlFKa9y7/rqXv\n6JbbPp4IzoOKt4dhnkfA2xmncQKBgQDmgZnP4ajPCcSxvBOztWCB2In1hQnHXBuY\n0mtRXuAQp3bx3WVA7Nq5uM0iqaHePJ1oEkPaYlPoScba6/P99LJ2gnXsHrf+K3Bj\nTwVHMbVRkwKB5iSW8Sea5RY1aT2IdEn/mvgBX5NfBCCq4Sb/mSNcQ3aoYX+an4Qk\n1YC8RmpGUwKBgECTp8f3gvWdDOlgoLMs51DmXke6TsJ1VkbSfASr7eOSFRaCz12H\nbF/IdwDKaJUHHwvvzAa/WMVQqOuM5Y82bZPwl3bWQrc26CTSSfwITaDrqBeouNnX\nRC97QfKS34PMNC6d92vKVLcNOxH7z+86vQ4kbvlyQgscIPRiFdYmCb7BAoGBAJDN\nhaST7Anz5v6IWhAgtvma4D++TYBRmnyMYyKA6V1M9mnGXR9GK7lUIHnP+oGzrmZ8\nYufDsVZRUnygkWxN1fagyheEzKz8+ONJ9tTcoz0VjxOvUfkIkYq6sxLmg+M+umW6\nImYqdlfQLf1q56bVuuLw9o+cgB7QaqEBBpg/2+9FAoGAYTkLdx9ludS/GSTgWKkY\nJq5kMKadyG4qAxrXaD28F43iFJ+m17xnGmB8gZNQsiDyYJRsNCuunMQyFYLmaXhg\nk+hKLv7f+sYsFNaZUBmlKsYXo8jhXEzLdlG9jicEK3uzNMyoM2FxSNwB35vUxbc1\nDprl6dscIAlBJGp0R4RJthg=\n-----END PRIVATE KEY-----\n",
                "client_email": "shaurya-interviews@planar-ripsaw-472713-h9.iam.gserviceaccount.com",
                "client_id": "115035449470492273028",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/shaurya-interviews%40planar-ripsaw-472713-h9.iam.gserviceaccount.com",
                "universe_domain": "googleapis.com",
            },
        ),
        turn_detection=MultilingualModel(),
        vad=ctx.proc.userdata["vad"],
        preemptive_generation=True,
    )

    # Metrics collection usage_collector
    usage_collector = metrics.UsageCollector()

    @session.on("metrics_collected")
    def _on_metrics_collected(ev: MetricsCollectedEvent):
        metrics.log_metrics(ev.metrics)
        usage_collector.collect(ev.metrics)

    async def log_usage():
        summary = usage_collector.get_summary()
        logger.info(f"Usage: {summary}")

    ctx.add_shutdown_callback(log_usage)

    # Create assistant instance with fetched data
    assistant = Assistant(interview_data)

    # Join the room and connect first
    logger.info("Connecting to room...")
    await ctx.connect()
    logger.info(f"Successfully connected to room: {ctx.room.name}")

    # Start the session after connection is established
    logger.info("Starting agent session...")
    await session.start(
        agent=assistant,
        room=ctx.room,
        room_input_options=RoomInputOptions(
            noise_cancellation=noise_cancellation.BVC(),
        ),
    )
    logger.info("Agent session started successfully")

    # Set interview start time
    assistant.interview_start_time = datetime.now()
    logger.info(f"Interview started at {assistant.interview_start_time}")

    # Make the agent speak first with a personalized greeting
    greeting = f"Hello {interview_data.candidate_name}! Thank you for joining this interview today. I'm your AI interviewer for the {interview_data.position_name} position. To start, could you please tell me a bit about yourself and why you're interested in this role?"

    await session.say(
        greeting,
        allow_interruptions=True,
    )

# Testing
if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint, prewarm_fnc=prewarm))
