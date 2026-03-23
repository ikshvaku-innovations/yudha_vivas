# Supabase Edge Functions - Required Changes

This document outlines the required changes to Supabase Edge Functions to support video recording and upload functionality.

## 1. Update `get-session-details` Edge Function

**Location**: `supabase/functions/get-session-details/index.ts` (or equivalent)

**Required Change**: Add `has_video_insights` field to the response.

### Current Response:
```typescript
{
  job_id: string;
  user_id: string | null;
}
```

### Updated Response:
```typescript
{
  job_id: string;
  user_id: string | null;
  has_video_insights: boolean;
}
```

### Implementation Example:
```typescript
// In your edge function, when querying the sessions table:
const { data, error } = await supabase
  .from('sessions')
  .select('job_id, user_id, has_video_insights')
  .eq('id', session_id)
  .single();

if (error) {
  return new Response(
    JSON.stringify({ error: error.message }),
    { status: 500, headers: { 'Content-Type': 'application/json' } }
  );
}

return new Response(
  JSON.stringify({
    job_id: data.job_id,
    user_id: data.user_id,
    has_video_insights: data.has_video_insights ?? false,
  }),
  { status: 200, headers: { 'Content-Type': 'application/json' } }
);
```

## 2. Create `upload-interview-video` Edge Function

**Location**: `supabase/functions/upload-interview-video/index.ts` (new file)

**Purpose**: Handle video upload to Supabase Storage bucket.

### Function Signature:
```typescript
Deno.serve(async (req) => {
  // Implementation
});
```

### Request Body:
```typescript
{
  session_id: string;
  job_id: string;
  user_id: string | null;
  video_data: string; // base64 encoded video
  file_name: string;
  file_type: string;
  file_size: number;
}
```

### Implementation Example:
```typescript
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Parse request body
    const {
      session_id,
      job_id,
      user_id,
      video_data,
      file_name,
      file_type,
      file_size,
    } = await req.json();

    // Validate required fields
    if (!session_id || !job_id || !video_data || !file_name) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Decode base64 video data
    const videoBuffer = Uint8Array.from(atob(video_data), (c) => c.charCodeAt(0));

    // Generate file path: videos/{job_id}/{session_id}/{timestamp}_{file_name}
    const timestamp = Date.now();
    const filePath = `videos/${job_id}/${session_id}/${timestamp}_${file_name}`;

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('interview-videos') // Replace with your bucket name
      .upload(filePath, videoBuffer, {
        contentType: file_type,
        upsert: false,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return new Response(
        JSON.stringify({ error: 'Failed to upload video', details: uploadError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get public URL (or signed URL if bucket is private)
    const { data: urlData } = supabase.storage
      .from('interview-videos')
      .getPublicUrl(filePath);

    // Optionally: Update sessions table with video URL
    // const { error: updateError } = await supabase
    //   .from('sessions')
    //   .update({ video_url: urlData.publicUrl })
    //   .eq('id', session_id);

    return new Response(
      JSON.stringify({
        success: true,
        file_path: filePath,
        file_url: urlData.publicUrl,
        file_size: file_size,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({
        error: 'Unexpected error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
```

### Storage Bucket Setup:

1. **Create Storage Bucket**: In Supabase Dashboard, go to Storage and create a new bucket named `interview-videos` (or your preferred name).

2. **Bucket Configuration**:
   - **Public**: Set to `false` (private) or `true` (public) based on your security requirements
   - **File size limit**: Set appropriate limit (e.g., 500MB for video files)
   - **Allowed MIME types**: `video/webm`, `video/mp4`, `video/quicktime`, etc.

3. **Storage Policies**: Set up RLS policies if bucket is private:
   ```sql
   -- Allow authenticated users to upload videos
   CREATE POLICY "Allow authenticated uploads"
   ON storage.objects FOR INSERT
   TO authenticated
   WITH CHECK (bucket_id = 'interview-videos');

   -- Allow service role to upload (for edge function)
   CREATE POLICY "Allow service role uploads"
   ON storage.objects FOR INSERT
   TO service_role
   WITH CHECK (bucket_id = 'interview-videos');
   ```

## 3. Database Schema Requirements

Ensure your `sessions` table has the `has_video_insights` column:

```sql
ALTER TABLE sessions
ADD COLUMN IF NOT EXISTS has_video_insights BOOLEAN DEFAULT false;
```

## 4. Deployment

After making these changes:

1. **Deploy updated edge function**:
   ```bash
   supabase functions deploy get-session-details
   ```

2. **Deploy new edge function**:
   ```bash
   supabase functions deploy upload-interview-video
   ```

3. **Set environment variables** (if not already set):
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for storage operations)

## Notes

- The video upload uses base64 encoding for transmission. For very large files (>100MB), consider using:
  - Direct Supabase Storage REST API with signed URLs
  - Chunked upload approach
  - Client-side direct upload to Supabase Storage

- The edge function uses the service role key to bypass RLS policies. Ensure this key is kept secure and only used server-side.

- Consider adding rate limiting and file size validation in the edge function.

- For production, you may want to add video processing (transcoding, thumbnail generation) after upload.

