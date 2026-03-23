# Google Cloud Storage Setup Guide

This guide explains how to set up Google Cloud Storage for video uploads in the interview application.

## Prerequisites

1. A Google Cloud Platform (GCP) account
2. A GCP project with billing enabled
3. Google Cloud Storage API enabled

## Setup Steps

### 1. Create a GCS Bucket

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **Cloud Storage** > **Buckets**
3. Click **Create Bucket**
4. Configure the bucket:
   - **Name**: Choose a unique name (e.g., `interview-videos-production`)
   - **Location type**: Choose based on your needs (Regional or Multi-regional)
   - **Storage class**: Standard (recommended for frequent access)
   - **Access control**: Uniform (recommended)
   - **Public access**: Prevent public access (recommended for security)

### 2. Create a Service Account

1. Go to **IAM & Admin** > **Service Accounts**
2. Click **Create Service Account**
3. Fill in the details:
   - **Service account name**: `interview-video-uploader`
   - **Description**: Service account for uploading interview videos
4. Click **Create and Continue**
5. Grant the following role:
   - **Storage Object Admin** (or **Storage Object Creator** for more restricted access)
6. Click **Continue** and then **Done**

### 3. Create and Download Service Account Key

1. Click on the service account you just created
2. Go to the **Keys** tab
3. Click **Add Key** > **Create new key**
4. Choose **JSON** format
5. Download the JSON file (keep it secure!)

### 4. Configure Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# Google Cloud Storage Configuration
GCS_BUCKET_NAME=your-bucket-name
GCS_PROJECT_ID=your-project-id
GCS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GCS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

**Important Notes:**
- `GCS_BUCKET_NAME`: The name of your GCS bucket
- `GCS_PROJECT_ID`: Your GCP project ID
- `GCS_CLIENT_EMAIL`: Found in the service account JSON file (field: `client_email`)
- `GCS_PRIVATE_KEY`: Found in the service account JSON file (field: `private_key`)
  - Make sure to include the full key with `\n` characters preserved
  - In some environments, you may need to escape newlines as `\\n`

### 5. Alternative: Use Application Default Credentials

If you're running on Google Cloud (Cloud Run, App Engine, etc.), you can use Application Default Credentials instead:

1. Remove `GCS_CLIENT_EMAIL` and `GCS_PRIVATE_KEY` from your environment variables
2. The code will automatically use Application Default Credentials
3. Make sure your service account has the necessary permissions

### 6. Configure Bucket Permissions (Optional)

If you want to make uploaded videos publicly accessible:

1. Go to your bucket in Google Cloud Console
2. Click on the **Permissions** tab
3. Add the following permission:
   - **Principal**: `allUsers`
   - **Role**: `Storage Object Viewer`
   - This allows public read access to uploaded videos

**Note**: For better security, consider using signed URLs for reading videos instead of making them public.

### 7. Test the Setup

1. Start your development server
2. Record a video interview
3. Check the browser console for upload progress
4. Verify the video appears in your GCS bucket

## Troubleshooting

### Error: "GCS_BUCKET_NAME must be defined"
- Make sure all environment variables are set in `.env.local`
- Restart your development server after adding environment variables

### Error: "Invalid credentials"
- Verify your service account key is correct
- Check that newlines in `GCS_PRIVATE_KEY` are properly escaped
- Ensure the service account has the correct permissions

### Error: "Permission denied"
- Verify the service account has **Storage Object Admin** or **Storage Object Creator** role
- Check that the bucket name is correct

### Upload fails silently
- Check browser console for errors
- Verify the signed URL is being generated correctly
- Check GCS bucket logs in Google Cloud Console

## Security Best Practices

1. **Never commit service account keys to version control**
   - Add `.env.local` to `.gitignore`
   - Use environment variables in production

2. **Use least privilege principle**
   - Grant only necessary permissions to the service account
   - Consider using **Storage Object Creator** instead of **Storage Object Admin** if you don't need to delete files

3. **Rotate keys regularly**
   - Create new service account keys periodically
   - Remove old keys that are no longer in use

4. **Monitor access**
   - Enable Cloud Audit Logs for your bucket
   - Monitor for unusual access patterns

5. **Use signed URLs**
   - Signed URLs expire after 1 hour (configurable)
   - This limits the window of vulnerability if a URL is leaked

## Cost Considerations

- **Storage**: ~$0.020 per GB/month (Standard storage)
- **Operations**: 
  - PUT requests: $0.05 per 10,000 operations
  - GET requests: $0.004 per 10,000 operations
- **Network egress**: Varies by region and destination

For a typical interview video (50-200MB), expect:
- Storage: ~$0.001-0.004 per video per month
- Upload: ~$0.000005 per video
- Download: ~$0.000002 per video

## Support

For more information, see:
- [Google Cloud Storage Documentation](https://cloud.google.com/storage/docs)
- [Signed URLs Guide](https://cloud.google.com/storage/docs/access-control/signing-urls-with-helpers)

