import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('[lib/supabase] Missing Supabase configuration', {
    hasUrl: !!SUPABASE_URL,
    hasKey: !!SUPABASE_ANON_KEY,
  });
}

/**
 * Creates a Supabase client for client-side operations
 */
export function createSupabaseClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be defined');
  }

  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

/**
 * Gets session details from the edge function
 */
export async function getSessionDetails(
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

