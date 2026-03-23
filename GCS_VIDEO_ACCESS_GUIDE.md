# Google Cloud Storage Video Access Guide

This guide explains how to access videos stored in Google Cloud Storage (GCS) from the interview application. Use this guide to read videos from the same GCS bucket on another platform.

## Table of Contents

1. [Storage Structure Overview](#storage-structure-overview)
2. [File Path Format](#file-path-format)
3. [Access Methods](#access-methods)
4. [Authentication Setup](#authentication-setup)
5. [Code Examples](#code-examples)
6. [Security Considerations](#security-considerations)
7. [Troubleshooting](#troubleshooting)

---

## Storage Structure Overview

### Bucket Organization

Videos are stored in a GCS bucket with the following structure:

```
{bucket-name}/
└── interview-videos/
    ├── {job_id}_{user_id}.webm
    ├── {job_id}_{user_id}.mp4
    ├── {job_id}_null.webm
    └── ...
```

### Key Information

- **Bucket Name**: Stored in `GCS_BUCKET_NAME` environment variable
- **Project ID**: Stored in `GCS_PROJECT_ID` environment variable
- **Base Path**: All videos are stored under `interview-videos/` prefix
- **Supported Formats**: `.webm`, `.mp4`, `.mov`, `.avi`, `.mkv`

---

## File Path Format

### Path Structure

The file path follows this pattern:

```
interview-videos/{job_id}_{user_id}.{extension}
```

### Path Components

- **`job_id`**: The unique job/interview identifier (required)
- **`user_id`**: The user identifier (can be `null` if user is anonymous)
  - If `user_id` is `null`, the filename will contain `null` as a string: `{job_id}_null.{extension}`
- **`extension`**: File extension based on video format (webm, mp4, mov, avi, mkv)

### Examples

```
interview-videos/12345_67890.webm
interview-videos/abc123_user456.mp4
interview-videos/xyz789_null.webm
```

### Public URL Format

If the bucket allows public access, videos can be accessed via:

```
https://storage.googleapis.com/{bucket-name}/interview-videos/{job_id}_{user_id}.{extension}
```

**Example:**
```
https://storage.googleapis.com/my-interview-bucket/interview-videos/12345_67890.webm
```

---

## Access Methods

There are three main ways to access videos from GCS:

### 1. Public URLs (If Bucket is Public)

**Use Case**: When the bucket is configured for public read access.

**Pros:**
- Simple, no authentication required
- Direct HTTP access
- Works with any HTTP client

**Cons:**
- Security risk if bucket is public
- No access control
- All videos are publicly accessible

**URL Format:**
```
https://storage.googleapis.com/{bucket-name}/{file-path}
```

### 2. Signed URLs (Temporary Access)

**Use Case**: When you need temporary, secure access to videos.

**Pros:**
- Secure (URLs expire after a set time)
- No need to expose bucket publicly
- Time-limited access

**Cons:**
- URLs expire (default: 1 hour, configurable)
- Requires server-side code to generate URLs
- Cannot be cached indefinitely

**How it works:**
- Server generates a signed URL using service account credentials
- URL includes authentication signature and expiration time
- Client uses the signed URL to download the video

### 3. Direct API Access (Using GCS Client Libraries)

**Use Case**: When you need programmatic access with full control.

**Pros:**
- Full control over access
- Can list, download, delete files
- Supports streaming
- Best for server-side applications

**Cons:**
- Requires authentication setup
- More complex implementation
- Requires GCS client library

---

## Authentication Setup

### Option 1: Service Account (Recommended for Server-Side)

1. **Create or Use Existing Service Account**
   - Go to Google Cloud Console → IAM & Admin → Service Accounts
   - Use the same service account used for uploads, or create a new one

2. **Grant Permissions**
   - **Storage Object Viewer**: Read-only access to objects
   - **Storage Object Admin**: Full access (read, write, delete)

3. **Download Service Account Key**
   - Go to Service Account → Keys tab
   - Create new key (JSON format)
   - Download and securely store the JSON file

4. **Extract Credentials**
   From the JSON file, you'll need:
   - `project_id`: Your GCP project ID
   - `client_email`: Service account email
   - `private_key`: Private key (keep secure!)

### Option 2: Application Default Credentials (For Google Cloud Services)

If running on Google Cloud (Cloud Run, App Engine, Compute Engine, etc.):

- No need to download keys
- Automatically uses the service account attached to the resource
- More secure (no key files to manage)

### Option 3: Public Access (Not Recommended)

Only use if:
- Videos don't contain sensitive information
- You understand the security implications
- You've configured bucket permissions correctly

---

## Code Examples

### Python

#### Using Public URL

```python
import requests

def download_video_public(bucket_name: str, job_id: str, user_id: str, extension: str = "webm"):
    """Download video using public URL"""
    user_id_part = user_id if user_id else "null"
    file_path = f"interview-videos/{job_id}_{user_id_part}.{extension}"
    url = f"https://storage.googleapis.com/{bucket_name}/{file_path}"
    
    response = requests.get(url)
    if response.status_code == 200:
        return response.content
    else:
        raise Exception(f"Failed to download: {response.status_code}")

# Usage
video_data = download_video_public("my-bucket", "12345", "67890", "webm")
with open("video.webm", "wb") as f:
    f.write(video_data)
```

#### Using GCS Client Library

```python
from google.cloud import storage
import os

# Set up credentials
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'path/to/service-account-key.json'

# Or use explicit credentials
def download_video_gcs(bucket_name: str, job_id: str, user_id: str, extension: str = "webm", 
                       project_id: str = None, credentials_path: str = None):
    """Download video using GCS client library"""
    
    # Initialize client
    if credentials_path:
        from google.oauth2 import service_account
        credentials = service_account.Credentials.from_service_account_file(credentials_path)
        storage_client = storage.Client(project=project_id, credentials=credentials)
    else:
        storage_client = storage.Client(project=project_id)
    
    # Get bucket and file
    bucket = storage_client.bucket(bucket_name)
    user_id_part = user_id if user_id else "null"
    file_path = f"interview-videos/{job_id}_{user_id_part}.{extension}"
    blob = bucket.blob(file_path)
    
    # Download video
    if not blob.exists():
        raise FileNotFoundError(f"Video not found: {file_path}")
    
    video_data = blob.download_as_bytes()
    return video_data

# Usage
video_data = download_video_gcs(
    bucket_name="my-bucket",
    job_id="12345",
    user_id="67890",
    extension="webm",
    project_id="my-project-id",
    credentials_path="path/to/service-account-key.json"
)

# Save to file
with open("video.webm", "wb") as f:
    f.write(video_data)
```

#### Generate Signed URL (Server-Side)

```python
from google.cloud import storage
from datetime import timedelta

def generate_signed_url(bucket_name: str, job_id: str, user_id: str, extension: str = "webm",
                       expiration_hours: int = 1, credentials_path: str = None):
    """Generate a signed URL for temporary access"""
    
    storage_client = storage.Client()
    if credentials_path:
        from google.oauth2 import service_account
        credentials = service_account.Credentials.from_service_account_file(credentials_path)
        storage_client = storage.Client(credentials=credentials)
    
    bucket = storage_client.bucket(bucket_name)
    user_id_part = user_id if user_id else "null"
    file_path = f"interview-videos/{job_id}_{user_id_part}.{extension}"
    blob = bucket.blob(file_path)
    
    # Generate signed URL (valid for expiration_hours)
    url = blob.generate_signed_url(
        version="v4",
        expiration=timedelta(hours=expiration_hours),
        method="GET"
    )
    
    return url

# Usage
signed_url = generate_signed_url(
    bucket_name="my-bucket",
    job_id="12345",
    user_id="67890",
    extension="webm",
    expiration_hours=24  # URL valid for 24 hours
)
print(f"Signed URL: {signed_url}")
```

### Node.js / TypeScript

#### Using Public URL

```typescript
async function downloadVideoPublic(
  bucketName: string,
  jobId: string,
  userId: string | null,
  extension: string = "webm"
): Promise<Buffer> {
  const userIdPart = userId || "null";
  const filePath = `interview-videos/${jobId}_${userIdPart}.${extension}`;
  const url = `https://storage.googleapis.com/${bucketName}/${filePath}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
  }
  
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// Usage
const videoData = await downloadVideoPublic("my-bucket", "12345", "67890", "webm");
await fs.writeFile("video.webm", videoData);
```

#### Using GCS Client Library

```typescript
import { Storage } from '@google-cloud/storage';

interface GCSConfig {
  bucketName: string;
  projectId?: string;
  clientEmail?: string;
  privateKey?: string;
}

async function downloadVideoGCS(
  config: GCSConfig,
  jobId: string,
  userId: string | null,
  extension: string = "webm"
): Promise<Buffer> {
  // Initialize Storage client
  let storage: Storage;
  
  if (config.clientEmail && config.privateKey) {
    // Use service account credentials
    storage = new Storage({
      projectId: config.projectId,
      credentials: {
        client_email: config.clientEmail,
        private_key: config.privateKey.replace(/\\n/g, '\n'),
      },
    });
  } else {
    // Use default credentials
    storage = new Storage({
      projectId: config.projectId,
    });
  }
  
  const bucket = storage.bucket(config.bucketName);
  const userIdPart = userId || "null";
  const filePath = `interview-videos/${jobId}_${userIdPart}.${extension}`;
  const file = bucket.file(filePath);
  
  // Check if file exists
  const [exists] = await file.exists();
  if (!exists) {
    throw new Error(`Video not found: ${filePath}`);
  }
  
  // Download video
  const [buffer] = await file.download();
  return buffer;
}

// Usage
const videoData = await downloadVideoGCS(
  {
    bucketName: "my-bucket",
    projectId: "my-project-id",
    clientEmail: process.env.GCS_CLIENT_EMAIL,
    privateKey: process.env.GCS_PRIVATE_KEY,
  },
  "12345",
  "67890",
  "webm"
);

await fs.writeFile("video.webm", videoData);
```

#### Generate Signed URL (Server-Side)

```typescript
import { Storage } from '@google-cloud/storage';

async function generateSignedUrl(
  config: GCSConfig,
  jobId: string,
  userId: string | null,
  extension: string = "webm",
  expirationHours: number = 1
): Promise<string> {
  // Initialize Storage client (same as above)
  let storage: Storage;
  
  if (config.clientEmail && config.privateKey) {
    storage = new Storage({
      projectId: config.projectId,
      credentials: {
        client_email: config.clientEmail,
        private_key: config.privateKey.replace(/\\n/g, '\n'),
      },
    });
  } else {
    storage = new Storage({ projectId: config.projectId });
  }
  
  const bucket = storage.bucket(config.bucketName);
  const userIdPart = userId || "null";
  const filePath = `interview-videos/${jobId}_${userIdPart}.${extension}`;
  const file = bucket.file(filePath);
  
  // Generate signed URL
  const [signedUrl] = await file.getSignedUrl({
    version: 'v4',
    action: 'read',
    expires: Date.now() + expirationHours * 60 * 60 * 1000, // milliseconds
  });
  
  return signedUrl;
}

// Usage
const signedUrl = await generateSignedUrl(
  {
    bucketName: "my-bucket",
    projectId: "my-project-id",
    clientEmail: process.env.GCS_CLIENT_EMAIL,
    privateKey: process.env.GCS_PRIVATE_KEY,
  },
  "12345",
  "67890",
  "webm",
  24 // 24 hours
);

console.log(`Signed URL: ${signedUrl}`);
```

### JavaScript (Browser)

#### Using Public URL

```javascript
async function downloadVideoPublic(bucketName, jobId, userId, extension = "webm") {
  const userIdPart = userId || "null";
  const filePath = `interview-videos/${jobId}_${userIdPart}.${extension}`;
  const url = `https://storage.googleapis.com/${bucketName}/${filePath}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.status}`);
  }
  
  const blob = await response.blob();
  return blob;
}

// Usage
const videoBlob = await downloadVideoPublic("my-bucket", "12345", "67890", "webm");

// Create object URL for video element
const videoUrl = URL.createObjectURL(videoBlob);
const videoElement = document.createElement("video");
videoElement.src = videoUrl;
document.body.appendChild(videoElement);
```

#### Using Signed URL (From Server)

```javascript
// First, get signed URL from your server
async function getSignedUrl(jobId, userId, extension = "webm") {
  const response = await fetch('/api/get-video-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jobId, userId, extension }),
  });
  
  const { signedUrl } = await response.json();
  return signedUrl;
}

// Then download using signed URL
async function downloadVideoSigned(jobId, userId, extension = "webm") {
  const signedUrl = await getSignedUrl(jobId, userId, extension);
  const response = await fetch(signedUrl);
  const blob = await response.blob();
  return blob;
}
```

### Go

```go
package main

import (
    "context"
    "fmt"
    "io"
    "os"
    
    "cloud.google.com/go/storage"
    "google.golang.org/api/option"
)

func downloadVideoGCS(bucketName, jobID, userID, extension string) error {
    ctx := context.Background()
    
    // Initialize client (uses Application Default Credentials)
    // Or use: option.WithCredentialsFile("path/to/service-account-key.json")
    client, err := storage.NewClient(ctx)
    if err != nil {
        return fmt.Errorf("failed to create client: %v", err)
    }
    defer client.Close()
    
    // Build file path
    userIDPart := userID
    if userID == "" {
        userIDPart = "null"
    }
    filePath := fmt.Sprintf("interview-videos/%s_%s.%s", jobID, userIDPart, extension)
    
    // Get bucket and object
    bucket := client.Bucket(bucketName)
    obj := bucket.Object(filePath)
    
    // Check if object exists
    _, err = obj.Attrs(ctx)
    if err != nil {
        return fmt.Errorf("video not found: %v", err)
    }
    
    // Download video
    reader, err := obj.NewReader(ctx)
    if err != nil {
        return fmt.Errorf("failed to create reader: %v", err)
    }
    defer reader.Close()
    
    // Save to file
    file, err := os.Create(fmt.Sprintf("video.%s", extension))
    if err != nil {
        return fmt.Errorf("failed to create file: %v", err)
    }
    defer file.Close()
    
    _, err = io.Copy(file, reader)
    return err
}

// Usage
func main() {
    err := downloadVideoGCS("my-bucket", "12345", "67890", "webm")
    if err != nil {
        fmt.Printf("Error: %v\n", err)
    }
}
```

### cURL (Command Line)

#### Using Public URL

```bash
# Download video using public URL
BUCKET_NAME="my-bucket"
JOB_ID="12345"
USER_ID="67890"
EXTENSION="webm"

FILE_PATH="interview-videos/${JOB_ID}_${USER_ID}.${EXTENSION}"
URL="https://storage.googleapis.com/${BUCKET_NAME}/${FILE_PATH}"

curl -o "video.${EXTENSION}" "${URL}"
```

#### Using Signed URL

```bash
# First, get signed URL from your server (example)
SIGNED_URL=$(curl -X POST https://your-api.com/api/get-video-url \
  -H "Content-Type: application/json" \
  -d '{"jobId":"12345","userId":"67890","extension":"webm"}' \
  | jq -r '.signedUrl')

# Then download using signed URL
curl -o "video.webm" "${SIGNED_URL}"
```

---

## Security Considerations

### 1. Access Control

- **Private Bucket (Recommended)**: Keep bucket private and use signed URLs or service account authentication
- **Public Bucket**: Only use if videos don't contain sensitive information
- **IAM Policies**: Configure bucket-level IAM policies to control who can access videos

### 2. Signed URLs

- **Expiration**: Set appropriate expiration times (1-24 hours typically)
- **HTTPS Only**: Always use HTTPS for signed URLs
- **Single Use**: Consider implementing single-use signed URLs if needed

### 3. Service Account Keys

- **Never Commit Keys**: Never commit service account keys to version control
- **Environment Variables**: Store keys in environment variables or secret management systems
- **Rotate Keys**: Regularly rotate service account keys
- **Least Privilege**: Grant only necessary permissions (Storage Object Viewer for read-only)

### 4. Network Security

- **HTTPS**: Always use HTTPS for video access
- **CORS**: Configure CORS if accessing from browser
- **Rate Limiting**: Implement rate limiting on your API endpoints

### 5. Monitoring

- **Audit Logs**: Enable Cloud Audit Logs to monitor access
- **Alerts**: Set up alerts for unusual access patterns
- **Cost Monitoring**: Monitor GCS usage and costs

---

## Troubleshooting

### Error: "Video not found" or 404

**Possible Causes:**
1. Incorrect file path format
2. File doesn't exist in bucket
3. Wrong bucket name

**Solutions:**
- Verify file path matches: `interview-videos/{job_id}_{user_id}.{extension}`
- Check if `user_id` is `null` (should be string "null" in filename)
- List files in bucket to verify existence:
  ```bash
  gsutil ls gs://your-bucket/interview-videos/
  ```

### Error: "Permission denied" or 403

**Possible Causes:**
1. Service account lacks permissions
2. Bucket is private and no authentication provided
3. Signed URL expired

**Solutions:**
- Verify service account has "Storage Object Viewer" role
- Check bucket IAM policies
- Regenerate signed URL if expired
- Verify credentials are correct

### Error: "Invalid credentials"

**Possible Causes:**
1. Incorrect service account key
2. Private key formatting issues (newlines)
3. Expired or revoked key

**Solutions:**
- Verify service account key JSON is valid
- Check private key newlines are properly escaped (`\n` or `\\n`)
- Download a new service account key if needed
- Verify the service account hasn't been deleted

### Error: "Bucket not found"

**Possible Causes:**
1. Incorrect bucket name
2. Bucket doesn't exist
3. Wrong project

**Solutions:**
- Verify `GCS_BUCKET_NAME` environment variable
- List buckets: `gsutil ls` or in Google Cloud Console
- Check you're using the correct GCP project

### Videos Not Loading in Browser

**Possible Causes:**
1. CORS not configured
2. Content-Type headers incorrect
3. Network issues

**Solutions:**
- Configure CORS on the bucket:
  ```bash
  gsutil cors set cors-config.json gs://your-bucket
  ```
- Verify Content-Type is set correctly (e.g., `video/webm`, `video/mp4`)
- Check browser console for CORS errors
- Test with a tool like Postman or curl

### High Costs

**Possible Causes:**
1. Frequent downloads
2. Large video files
3. Network egress charges

**Solutions:**
- Implement caching (CDN, browser cache)
- Use signed URLs with appropriate expiration
- Consider Cloud CDN for frequently accessed videos
- Monitor usage in Google Cloud Console

---

## Best Practices

1. **Use Signed URLs for Temporary Access**: Generate signed URLs server-side for time-limited access
2. **Implement Caching**: Cache videos or signed URLs to reduce API calls
3. **Monitor Usage**: Set up billing alerts and monitor GCS usage
4. **Error Handling**: Implement proper error handling for missing files, network errors, etc.
5. **File Validation**: Verify file exists before attempting download
6. **Streaming**: For large files, use streaming instead of loading entire file into memory
7. **Content-Type**: Ensure correct Content-Type headers for video playback
8. **Logging**: Log video access for audit and debugging purposes

---

## Additional Resources

- [Google Cloud Storage Documentation](https://cloud.google.com/storage/docs)
- [Signed URLs Guide](https://cloud.google.com/storage/docs/access-control/signing-urls-with-helpers)
- [GCS Client Libraries](https://cloud.google.com/storage/docs/reference/libraries)
- [IAM and Access Control](https://cloud.google.com/storage/docs/access-control)
- [CORS Configuration](https://cloud.google.com/storage/docs/configuring-cors)

---

## Quick Reference

### File Path Format
```
interview-videos/{job_id}_{user_id}.{extension}
```

### Public URL Format
```
https://storage.googleapis.com/{bucket-name}/interview-videos/{job_id}_{user_id}.{extension}
```

### Environment Variables Needed
- `GCS_BUCKET_NAME`: Bucket name
- `GCS_PROJECT_ID`: GCP project ID
- `GCS_CLIENT_EMAIL`: Service account email (for authentication)
- `GCS_PRIVATE_KEY`: Service account private key (for authentication)

### Supported Video Formats
- `.webm` (default)
- `.mp4`
- `.mov`
- `.avi`
- `.mkv`

