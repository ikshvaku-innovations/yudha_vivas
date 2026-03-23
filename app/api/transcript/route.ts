import { NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;

export const revalidate = 0;

interface TranscriptEntryPayload {
  id: string;
  timestamp: number;
  speaker: 'user' | 'agent';
  message: string;
}

interface TranscriptRequestBody {
  jobId?: string;
  userId?: string | null;
  transcript?: TranscriptEntryPayload[];
}

function assertEnvVar(value: string | undefined, label: string): asserts value is string {
  if (!value) {
    throw new Error(`${label} is not defined`);
  }
}

export async function POST(request: Request) {
  try {
    assertEnvVar(SUPABASE_URL, 'SUPABASE_URL');
    assertEnvVar(SUPABASE_ANON_KEY, 'SUPABASE_ANON_KEY');

    const body: TranscriptRequestBody = await request.json().catch(() => ({}));
    const { jobId, userId, transcript } = body;

    if (!jobId || !transcript || !Array.isArray(transcript) || transcript.length === 0) {
      return NextResponse.json(
        {
          error:
            'jobId and transcript are required. transcript must be a non-empty array of transcript entries.',
        },
        { status: 400 }
      );
    }

    const restEndpoint = `${SUPABASE_URL}/rest/v1/transcript`;
    const transcriptPayload = [
      {
        job_id: jobId,
        user_id: userId ?? null,
        transcript: JSON.stringify(transcript),
      },
    ];

    const insertResponse = await fetch(restEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: 'return=representation',
      },
      body: JSON.stringify(transcriptPayload),
    });

    if (!insertResponse.ok) {
      const errorPayload = await insertResponse.json().catch(() => ({}));
      console.error('[POST /api/transcript] Failed to insert transcript', {
        status: insertResponse.status,
        statusText: insertResponse.statusText,
        error: errorPayload,
      });
      return NextResponse.json(
        { error: 'Failed to insert transcript entry', details: errorPayload },
        { status: insertResponse.status }
      );
    }

    const [insertedRecord] = (await insertResponse.json()) as Record<string, unknown>[];

    const completeJobEndpoint = `${SUPABASE_URL}/functions/v1/complete-job`;
    const completeResponse = await fetch(completeJobEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ job_id: jobId }),
    });

    if (!completeResponse.ok) {
      const errorPayload = await completeResponse.json().catch(() => ({}));
      console.error('[POST /api/transcript] Failed to mark job as completed', {
        status: completeResponse.status,
        statusText: completeResponse.statusText,
        error: errorPayload,
      });
      return NextResponse.json(
        { error: 'Transcript saved, but failed to mark job as completed', details: errorPayload },
        { status: completeResponse.status }
      );
    }

    const completeResult = await completeResponse.json().catch(() => ({}));

    return NextResponse.json(
      {
        transcript: insertedRecord,
        jobCompletion: completeResult,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[POST /api/transcript] Unexpected error', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      {
        error: 'Unexpected error while saving transcript',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
