import { headers } from 'next/headers';
import { App } from '@/components/app/app';
import { InvalidPage } from '@/components/app/invalid-page';
import { getAppConfig } from '@/lib/utils';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;

interface PageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page({ searchParams }: PageProps) {
  const hdrs = await headers();
  const appConfig = await getAppConfig(hdrs);

  const resolvedSearchParams = (await searchParams) ?? {};
  const sessionParam = resolvedSearchParams.session;
  const hasSession = Array.isArray(sessionParam)
    ? sessionParam.length > 0 && sessionParam[0].trim().length > 0
    : typeof sessionParam === 'string' && sessionParam.trim().length > 0;
  const sessionId = Array.isArray(sessionParam)
    ? sessionParam[0]?.trim()
    : typeof sessionParam === 'string'
      ? sessionParam.trim()
      : undefined;

  if (!hasSession) {
    return <InvalidPage />;
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('[app/(app)/page] Missing Supabase configuration for job completion check', {
      hasUrl: !!SUPABASE_URL,
      hasKey: !!SUPABASE_ANON_KEY,
    });
    return <InvalidPage message="Evaluation configuration is incomplete. Please contact support." />;
  }

  if (sessionId) {
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/check-job-complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        cache: 'no-store',
        body: JSON.stringify({ session_id: sessionId }),
      });

      if (response.ok) {
        const result = (await response.json()) as { completed?: boolean } | null;

        if (result?.completed) {
          return (
            <InvalidPage message="This evaluation has already been completed. Thanks for participating!" />
          );
        }
      } else {
        const errorPayload = await response.json().catch(() => ({}));
        console.error('[app/(app)/page] Failed to check job completion', {
          status: response.status,
          statusText: response.statusText,
          error: errorPayload,
        });
      }
    } catch (error) {
      console.error('[app/(app)/page] Unexpected error while checking job completion', {
        error: error instanceof Error ? error.message : error,
      });
    }
  }

  return <App appConfig={appConfig} />;
}
