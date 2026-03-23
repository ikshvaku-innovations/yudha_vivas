import { NextResponse } from 'next/server';
import { AccessToken, type AccessTokenOptions, type VideoGrant } from 'livekit-server-sdk';
import { RoomConfiguration } from '@livekit/protocol';

type ConnectionDetails = {
  serverUrl: string;
  roomName: string;
  participantName: string;
  participantToken: string;
};

// NOTE: you are expected to define the following environment variables in `.env.local`:
const API_KEY = process.env.LIVEKIT_API_KEY;
const API_SECRET = process.env.LIVEKIT_API_SECRET;
const LIVEKIT_URL = process.env.LIVEKIT_URL;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

// don't cache the results
export const revalidate = 0;

async function getSessionDetails(
  sessionId: string
): Promise<{ job_id: string; user_id: string | null; has_video_insights: boolean }> {
  console.log('[getSessionDetails] Starting session details lookup', { sessionId });

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('[getSessionDetails] Missing Supabase configuration', {
      hasUrl: !!SUPABASE_URL,
      hasKey: !!SUPABASE_ANON_KEY,
    });
    throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be defined');
  }

  const edgeFunctionUrl = `${SUPABASE_URL}/functions/v1/get-session-details`;
  console.log('[getSessionDetails] Calling Edge Function', { edgeFunctionUrl, sessionId });

  const response = await fetch(edgeFunctionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ session_id: sessionId }),
  });

  console.log('[getSessionDetails] Edge Function response status', {
    status: response.status,
    statusText: response.statusText,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Failed to fetch session details' }));
    console.error('[getSessionDetails] Edge Function error', {
      status: response.status,
      error,
    });
    throw new Error(error.error || `Failed to fetch session details: ${response.statusText}`);
  }

  const sessionDetails = await response.json();
  console.log('[getSessionDetails] Successfully retrieved session details', {
    job_id: sessionDetails.job_id,
    user_id: sessionDetails.user_id,
    has_video_insights: sessionDetails.has_video_insights,
  });

  return sessionDetails;
}

export async function POST(req: Request) {
  console.log('[POST /api/connection-details] Request received');

  try {
    // Validate environment variables
    if (LIVEKIT_URL === undefined) {
      console.error('[POST /api/connection-details] LIVEKIT_URL is not defined');
      throw new Error('LIVEKIT_URL is not defined');
    }
    if (API_KEY === undefined) {
      console.error('[POST /api/connection-details] LIVEKIT_API_KEY is not defined');
      throw new Error('LIVEKIT_API_KEY is not defined');
    }
    if (API_SECRET === undefined) {
      console.error('[POST /api/connection-details] LIVEKIT_API_SECRET is not defined');
      throw new Error('LIVEKIT_API_SECRET is not defined');
    }

    // Extract session ID from URL query parameters
    const url = new URL(req.url);
    const sessionId = url.searchParams.get('session');
    console.log('[POST /api/connection-details] Extracted session from URL', {
      fullUrl: req.url,
      sessionId,
      hasSession: !!sessionId,
    });

    if (!sessionId) {
      console.error('[POST /api/connection-details] Session parameter missing from URL', {
        searchParams: url.searchParams.toString(),
      });
      throw new Error('session parameter is required in URL query string');
    }

    // Get job_id, user_id, and has_video_insights from session
    console.log('[POST /api/connection-details] Fetching session details for session:', sessionId);
    const sessionDetails = await getSessionDetails(sessionId);
    const { job_id, user_id, has_video_insights } = sessionDetails;
    console.log('[POST /api/connection-details] Session details retrieved', {
      job_id,
      user_id,
      has_video_insights,
    });

    // Parse agent configuration from request body
    const body = await req.json();
    const agentName: string = body?.room_config?.agents?.[0]?.agent_name;
    console.log('[POST /api/connection-details] Agent configuration', {
      agentName,
      hasAgentConfig: !!body?.room_config,
    });

    // Generate participant token
    const participantName = 'user';
    const participantIdentity = `voice_assistant_user_${Math.floor(Math.random() * 10_000)}`;
    // Create room name using job_id and user_id format: job_id_user_id
    const roomName = user_id ? `${job_id}_${user_id}` : `${job_id}_null`;
    console.log('[POST /api/connection-details] Participant info', {
      participantName,
      participantIdentity,
      roomName,
      job_id,
      user_id,
    });

    console.log('[POST /api/connection-details] Creating token with room name', {
      roomName,
      job_id,
      user_id,
    });

    const participantToken = await createParticipantToken(
      { identity: participantIdentity, name: participantName },
      roomName,
      agentName
    );
    console.log('[POST /api/connection-details] Token created successfully', {
      tokenLength: participantToken.length,
      roomName,
    });

    // Return connection details
    const data: ConnectionDetails & { has_video_insights?: boolean } = {
      serverUrl: LIVEKIT_URL,
      roomName,
      participantToken: participantToken,
      participantName,
      has_video_insights: has_video_insights ?? false,
    };
    console.log('[POST /api/connection-details] Returning connection details', {
      serverUrl: data.serverUrl,
      roomName: data.roomName,
      participantName: data.participantName,
      has_video_insights: data.has_video_insights,
    });

    const headers = new Headers({
      'Cache-Control': 'no-store',
    });
    return NextResponse.json(data, { headers });
  } catch (error) {
    if (error instanceof Error) {
      console.error('[POST /api/connection-details] Error occurred', {
        error: error.message,
        stack: error.stack,
      });
      return new NextResponse(error.message, { status: 500 });
    }
    console.error('[POST /api/connection-details] Unknown error occurred', { error });
    return new NextResponse('Internal server error', { status: 500 });
  }
}

async function createParticipantToken(
  userInfo: AccessTokenOptions,
  roomName: string,
  agentName?: string
): Promise<string> {
  console.log('[createParticipantToken] Creating token', {
    identity: userInfo.identity,
    name: userInfo.name,
    roomName,
    agentName,
  });

  const at = new AccessToken(API_KEY, API_SECRET, {
    ...userInfo,
    ttl: '15m',
  });
  const grant: VideoGrant = {
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
  };
  at.addGrant(grant);

  if (agentName) {
    console.log('[createParticipantToken] Adding agent configuration', { agentName });
    at.roomConfig = new RoomConfiguration({
      agents: [{ agentName }],
    });
  }

  const token = await at.toJwt();
  console.log('[createParticipantToken] Token generated', {
    tokenLength: token.length,
    roomName,
  });

  return token;
}
