import { NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

// don't cache the results
export const revalidate = 0;

async function getSessionDetails(
  sessionId: string
): Promise<{ job_id: string; user_id: string | null }> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be defined');
  }

  const edgeFunctionUrl = `${SUPABASE_URL}/functions/v1/get-session-details`;

  const response = await fetch(edgeFunctionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ session_id: sessionId }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Failed to fetch session details' }));
    throw new Error(error.error || `Failed to fetch session details: ${response.statusText}`);
  }

  return await response.json();
}

async function submitFeedback(
  jobId: string,
  userId: string | null,
  rating: number | null,
  feedback: string | null
) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be defined');
  }

  const edgeFunctionUrl = `${SUPABASE_URL}/functions/v1/submit-feedback`;

  const response = await fetch(edgeFunctionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      job_id: jobId,
      user_id: userId,
      rating: rating,
      feedback: feedback,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Failed to submit feedback' }));
    throw new Error(error.error || `Failed to submit feedback: ${response.statusText}`);
  }

  return await response.json();
}

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    const { sessionId, rating, feedback } = body;

    // Validate required fields
    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 });
    }

    // Validate that at least rating or feedback is provided
    if (!rating && (!feedback || !feedback.trim())) {
      return NextResponse.json({ error: 'rating or feedback is required' }, { status: 400 });
    }

    // Get session details to retrieve job_id and user_id
    const sessionDetails = await getSessionDetails(sessionId);
    const { job_id, user_id } = sessionDetails;

    // Submit feedback
    const result = await submitFeedback(job_id, user_id, rating || null, feedback?.trim() || null);

    return NextResponse.json({
      success: true,
      id: result.id,
    });
  } catch (error) {
    console.error('[POST /api/submit-feedback] Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
