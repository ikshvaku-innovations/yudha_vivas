/**
 * Utility functions for uploading video directly to Google Cloud Storage from the frontend
 */

import { getSessionDetails } from './supabase';

interface UploadVideoOptions {
  videoBlob: Blob;
  sessionId: string;
  onProgress?: (progress: number) => void;
}

interface UploadVideoResult {
  success: boolean;
  file_path: string;
  file_url: string;
  file_size: number;
}

/**
 * Gets file extension from filename or MIME type
 */
function getFileExtension(fileName: string, mimeType: string): string {
  // Try to get extension from filename
  const fileNameMatch = fileName.match(/\.([a-zA-Z0-9]+)$/);
  if (fileNameMatch) {
    return fileNameMatch[1].toLowerCase();
  }
  // Fallback to MIME type mapping
  const mimeToExt: Record<string, string> = {
    'video/webm': 'webm',
    'video/mp4': 'mp4',
    'video/quicktime': 'mov',
    'video/x-msvideo': 'avi',
    'video/x-matroska': 'mkv',
  };
  const baseMimeType = mimeType?.split(';')[0] || 'video/webm';
  return mimeToExt[baseMimeType] || 'webm';
}

/**
 * Gets normalized MIME type (strips codec information)
 */
function getNormalizedMimeType(mimeType: string): string {
  const baseMimeType = mimeType?.split(';')[0] || 'video/webm';
  const supportedMimeTypes: Record<string, string> = {
    'video/webm': 'video/webm',
    'video/mp4': 'video/mp4',
    'video/quicktime': 'video/mp4', // Map quicktime to mp4
    'video/x-msvideo': 'video/x-msvideo',
    'video/x-matroska': 'video/x-matroska',
  };
  return supportedMimeTypes[baseMimeType] || 'video/webm';
}

/**
 * Uploads video directly to Google Cloud Storage using signed URL
 */
export async function uploadVideoToGCS({
  videoBlob,
  sessionId,
  onProgress,
}: UploadVideoOptions): Promise<UploadVideoResult> {
  console.log('[uploadVideoToGCS] Starting video upload', {
    fileName: `interview-${sessionId}.webm`,
    fileSize: videoBlob.size,
    fileType: videoBlob.type,
    sessionId,
  });

  // Step 1: Get signed upload URL from server
  const urlResponse = await fetch('/api/get-gcs-upload-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sessionId,
      fileName: `interview-${sessionId}.webm`,
      contentType: videoBlob.type,
      fileSize: videoBlob.size,
    }),
  });

  if (!urlResponse.ok) {
    const errorData = await urlResponse.json().catch(() => ({}));
    throw new Error(
      `Failed to get upload URL: ${errorData.error || urlResponse.statusText}`
    );
  }

  const { uploadUrl, filePath, publicUrl, contentType: serverContentType } = await urlResponse.json();

  console.log('[uploadVideoToGCS] Got signed upload URL', {
    filePath,
    hasUploadUrl: !!uploadUrl,
    serverContentType,
    clientContentType: getNormalizedMimeType(videoBlob.type),
  });

  // Use the content type from the server to ensure exact match
  const uploadContentType = serverContentType || getNormalizedMimeType(videoBlob.type);

  // Step 2: Upload directly to GCS using signed URL
  const fileSizeMB = videoBlob.size / (1024 * 1024);
  const useChunkedUpload = fileSizeMB > 50; // Use chunked upload for files > 50MB

  if (useChunkedUpload) {
    console.log('[uploadVideoToGCS] Using chunked upload for large file', {
      fileSizeMB: fileSizeMB.toFixed(2),
    });
    return await uploadVideoChunked(videoBlob, uploadUrl, filePath, publicUrl, uploadContentType, onProgress);
  }

  // Direct upload for smaller files
  try {
    console.log('[uploadVideoToGCS] Attempting direct upload', {
      fileSizeMB: fileSizeMB.toFixed(2),
    });

    // Use the content type from the server to ensure exact match with signed URL
    const response = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': uploadContentType,
      },
      body: videoBlob,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Upload failed: ${response.statusText} - ${errorText}`);
    }

    console.log('[uploadVideoToGCS] Video uploaded successfully via direct upload', {
      filePath,
      publicUrl,
      fileSize: videoBlob.size,
    });

    onProgress?.(100);

    return {
      success: true,
      file_path: filePath,
      file_url: publicUrl,
      file_size: videoBlob.size,
    };
  } catch (error) {
    // Fall back to chunked upload on any error
    console.warn('[uploadVideoToGCS] Direct upload failed, falling back to chunked upload', {
      error: error instanceof Error ? error.message : String(error),
    });
    return await uploadVideoChunked(videoBlob, uploadUrl, filePath, publicUrl, uploadContentType, onProgress);
  }
}

/**
 * Uploads video using XMLHttpRequest for progress tracking
 * GCS signed URLs support PUT requests with the full file
 */
async function uploadVideoChunked(
  videoBlob: Blob,
  uploadUrl: string,
  filePath: string,
  publicUrl: string,
  contentType: string,
  onProgress?: (progress: number) => void
): Promise<UploadVideoResult> {
  const totalSize = videoBlob.size;

  console.log('[uploadVideoChunked] Starting upload with progress tracking', {
    filePath,
    totalSize,
    totalSizeMB: (totalSize / 1024 / 1024).toFixed(2) + ' MB',
  });

  // Use XMLHttpRequest for better progress tracking
  // GCS signed URLs support PUT with the full file
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        onProgress?.(progress);
        console.log('[uploadVideoChunked] Upload progress', {
          loaded: event.loaded,
          total: event.total,
          progress: `${progress.toFixed(1)}%`,
        });
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('[uploadVideoChunked] Video uploaded successfully', {
          filePath,
          publicUrl,
          fileSize: videoBlob.size,
        });

        resolve({
          success: true,
          file_path: filePath,
          file_url: publicUrl,
          file_size: videoBlob.size,
        });
      } else {
        const errorText = xhr.responseText || xhr.statusText;
        reject(new Error(`Upload failed with status ${xhr.status}: ${errorText}`));
      }
    });

    xhr.addEventListener('error', () => {
      reject(new Error('Upload failed due to network error'));
    });

    xhr.addEventListener('abort', () => {
      reject(new Error('Upload was aborted'));
    });

    // Use the content type from the server to ensure exact match with signed URL
    xhr.open('PUT', uploadUrl);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.send(videoBlob);
  });
}

// Export with the old name for backward compatibility during migration
export const uploadVideoToSupabase = uploadVideoToGCS;
