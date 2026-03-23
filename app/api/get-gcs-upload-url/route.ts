import { NextResponse } from 'next/server';
import { Storage } from '@google-cloud/storage';

const GCS_BUCKET_NAME = process.env.GCS_BUCKET_NAME;
const GCS_PROJECT_ID = process.env.GCS_PROJECT_ID;
const GCS_CLIENT_EMAIL = process.env.GCS_CLIENT_EMAIL;
const GCS_PRIVATE_KEY = process.env.GCS_PRIVATE_KEY?.replace(/\\n/g, '\n');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;

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

export async function POST(request: Request) {
  try {
    // Validate GCS configuration
    if (!GCS_BUCKET_NAME) {
      return NextResponse.json(
        { error: 'GCS_BUCKET_NAME must be defined' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { sessionId, fileName, contentType, fileSize } = body;

    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 });
    }

    // Get session details to retrieve job_id and user_id
    const sessionDetails = await getSessionDetails(sessionId);
    const { job_id, user_id } = sessionDetails;

    // Generate file path: {job_id}_{user_id}.{extension}
    const getFileExtension = (fileName: string, mimeType: string): string => {
      const fileNameMatch = fileName.match(/\.([a-zA-Z0-9]+)$/);
      if (fileNameMatch) {
        return fileNameMatch[1].toLowerCase();
      }
      const mimeToExt: Record<string, string> = {
        'video/webm': 'webm',
        'video/mp4': 'mp4',
        'video/quicktime': 'mov',
        'video/x-msvideo': 'avi',
        'video/x-matroska': 'mkv',
      };
      const baseMimeType = mimeType?.split(';')[0] || 'video/webm';
      return mimeToExt[baseMimeType] || 'webm';
    };

    const fileExtension = getFileExtension(
      fileName || `interview-${sessionId}.webm`,
      contentType || 'video/webm'
    );
    const userIdPart = user_id || 'null';
    const filePath = `interview-videos/${job_id}_${userIdPart}.${fileExtension}`;

    console.log('[POST /api/get-gcs-upload-url] Generating signed URL', {
      filePath,
      fileSize,
      contentType,
    });

    // Initialize GCS client
    let storage: Storage;
    if (GCS_PROJECT_ID && GCS_CLIENT_EMAIL && GCS_PRIVATE_KEY) {
      // Use service account credentials
      storage = new Storage({
        projectId: GCS_PROJECT_ID,
        credentials: {
          client_email: GCS_CLIENT_EMAIL,
          private_key: GCS_PRIVATE_KEY,
        },
      });
    } else {
      // Use default credentials (from environment or metadata server)
      storage = new Storage();
    }

    const bucket = storage.bucket(GCS_BUCKET_NAME);
    const file = bucket.file(filePath);

    // Normalize content type (strip codec information)
    // This must match exactly what's sent in the PUT request
    // Use the same normalization logic as the client
    const getNormalizedMimeType = (mimeType: string): string => {
      const baseMimeType = mimeType?.split(';')[0] || 'video/webm';
      const supportedMimeTypes: Record<string, string> = {
        'video/webm': 'video/webm',
        'video/mp4': 'video/mp4',
        'video/quicktime': 'video/mp4', // Map quicktime to mp4
        'video/x-msvideo': 'video/x-msvideo',
        'video/x-matroska': 'video/x-matroska',
      };
      return supportedMimeTypes[baseMimeType] || 'video/webm';
    };
    
    const normalizedContentType = getNormalizedMimeType(contentType || 'video/webm');

    // Generate a signed URL for upload (valid for 1 hour)
    // This allows the client to upload directly to GCS
    // For v4 signed URLs, we specify contentType which must match the PUT request header exactly
    const [signedUrl] = await file.getSignedUrl({
      version: 'v4',
      action: 'write',
      expires: Date.now() + 60 * 60 * 1000, // 1 hour
      contentType: normalizedContentType,
      // Note: The Content-Type header sent in the PUT request must match this exactly
    });

    // Get public URL after upload
    const publicUrl = `https://storage.googleapis.com/${GCS_BUCKET_NAME}/${filePath}`;

    console.log('[POST /api/get-gcs-upload-url] Signed URL generated', {
      filePath,
      hasSignedUrl: !!signedUrl,
      contentType: normalizedContentType,
      originalContentType: contentType,
    });

    return NextResponse.json({
      success: true,
      uploadUrl: signedUrl,
      filePath,
      publicUrl,
      contentType: normalizedContentType, // Return the normalized content type so client can use it
    });
  } catch (error) {
    console.error('[POST /api/get-gcs-upload-url] Unexpected error', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      {
        error: 'Unexpected error while generating upload URL',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

