import { NextResponse } from 'next/server';

// Speed test endpoint that proxies fast.com's speed test
// This avoids CORS issues by making server-side requests

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Get fast.com test URLs (fast.com's API endpoint)
async function getFastComUrls(): Promise<string[]> {
  try {
    // Fast.com uses a token-based API
    // First, try to get URLs directly - fast.com's API endpoint
    const apiUrl = 'https://api.fast.com/netflix/speedtest?https=true';

    const response = await fetch(apiUrl, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (response.ok) {
      const data = await response.json();

      // Fast.com API returns different formats depending on version
      let urls: string[] = [];

      if (Array.isArray(data)) {
        // Direct array of URLs or objects
        urls = data
          .map((item: any) => {
            if (typeof item === 'string') return item;
            if (item.url) return item.url;
            if (item.target) return item.target;
            if (item.location) return item.location;
            return null;
          })
          .filter(Boolean);
      } else if (data && typeof data === 'object') {
        // Object format - check common properties
        if (data.urls && Array.isArray(data.urls)) {
          urls = data.urls.map((item: any) => item.url || item).filter(Boolean);
        } else if (data.targets && Array.isArray(data.targets)) {
          urls = data.targets.map((item: any) => item.url || item.target || item).filter(Boolean);
        } else if (data.servers && Array.isArray(data.servers)) {
          urls = data.servers.map((item: any) => item.url || item).filter(Boolean);
        }
      }

      if (urls.length > 0) {
        console.log(`Successfully got ${urls.length} fast.com test URLs`);
        return urls as string[];
      } else {
        console.log('Fast.com API returned data but no URLs found:', Object.keys(data));
      }
    } else {
      console.log(`Fast.com API returned ${response.status} ${response.statusText}`);
    }
  } catch (error: any) {
    console.error('Failed to get fast.com URLs:', error.message || error);
  }

  // Return empty array to trigger Cloudflare fallback
  return [];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const size = searchParams.get('size');
  const useFastCom = searchParams.get('fast') !== 'false'; // Default to true

  try {
    let testUrl: string | null = null;
    let expectedSize = size ? parseInt(size, 10) : 1000000; // Default 1MB

    if (useFastCom) {
      // Try to get fast.com URLs
      const fastUrls = await getFastComUrls();
      if (fastUrls.length > 0) {
        // Use a random URL from the list for better distribution
        testUrl = fastUrls[Math.floor(Math.random() * fastUrls.length)];
        // Fast.com typically serves larger files (25MB+), adjust expected size
        if (!size) {
          expectedSize = 25000000; // ~25MB for fast.com
        }
        console.log(`Using fast.com URL: ${testUrl.substring(0, 50)}...`);
      }
    }

    // If fast.com failed or was disabled, use Cloudflare speed test (very reliable)
    if (!testUrl) {
      const cloudflareSize = size ? parseInt(size, 10) : 2000000; // Default 2MB for better accuracy
      testUrl = `https://speed.cloudflare.com/__down?bytes=${cloudflareSize}`;
      expectedSize = cloudflareSize;
      console.log(`Using Cloudflare speed test: ${cloudflareSize} bytes`);
    }

    if (!testUrl) {
      return NextResponse.json({ error: 'Failed to get speed test URL' }, { status: 500 });
    }

    // Proxy the request to the speed test URL
    const startTime = Date.now();
    const testResponse = await fetch(testUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SpeedTest/1.0)',
        Accept: '*/*',
      },
      // Don't follow redirects automatically - we want to measure the actual download
    });

    if (!testResponse.ok) {
      return NextResponse.json(
        { error: `Speed test failed: ${testResponse.status}` },
        { status: testResponse.status }
      );
    }

    // Get the content as a stream and measure download speed
    const contentLength = testResponse.headers.get('content-length');
    const actualSize = contentLength ? parseInt(contentLength, 10) : expectedSize;

    // Read the response body
    const arrayBuffer = await testResponse.arrayBuffer();
    const downloadTime = (Date.now() - startTime) / 1000; // in seconds
    const actualDownloaded = arrayBuffer.byteLength;

    // Calculate speed in Mbps
    const speedMbps = (actualDownloaded * 8) / (downloadTime * 1000000);

    // Return the result as JSON (we don't need to send the actual data back)
    return NextResponse.json({
      speedMbps: speedMbps.toFixed(2),
      sizeBytes: actualDownloaded,
      durationSeconds: downloadTime.toFixed(2),
      source: useFastCom && testUrl.includes('fast.com') ? 'fast.com' : 'cloudflare',
    });
  } catch (error: any) {
    console.error('Speed test error:', error);
    return NextResponse.json({ error: error.message || 'Speed test failed' }, { status: 500 });
  }
}
