module.exports = [
"[project]/.next-internal/server/app/api/speed-test/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/speed-test/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$2_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.2_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/server.js [app-route] (ecmascript)");
;
const dynamic = 'force-dynamic';
const revalidate = 0;
// Get fast.com test URLs (fast.com's API endpoint)
async function getFastComUrls() {
    try {
        // Fast.com uses a token-based API
        // First, try to get URLs directly - fast.com's API endpoint
        const apiUrl = 'https://api.fast.com/netflix/speedtest?https=true';
        const response = await fetch(apiUrl, {
            headers: {
                Accept: 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        if (response.ok) {
            const data = await response.json();
            // Fast.com API returns different formats depending on version
            let urls = [];
            if (Array.isArray(data)) {
                // Direct array of URLs or objects
                urls = data.map((item)=>{
                    if (typeof item === 'string') return item;
                    if (item.url) return item.url;
                    if (item.target) return item.target;
                    if (item.location) return item.location;
                    return null;
                }).filter(Boolean);
            } else if (data && typeof data === 'object') {
                // Object format - check common properties
                if (data.urls && Array.isArray(data.urls)) {
                    urls = data.urls.map((item)=>item.url || item).filter(Boolean);
                } else if (data.targets && Array.isArray(data.targets)) {
                    urls = data.targets.map((item)=>item.url || item.target || item).filter(Boolean);
                } else if (data.servers && Array.isArray(data.servers)) {
                    urls = data.servers.map((item)=>item.url || item).filter(Boolean);
                }
            }
            if (urls.length > 0) {
                console.log(`Successfully got ${urls.length} fast.com test URLs`);
                return urls;
            } else {
                console.log('Fast.com API returned data but no URLs found:', Object.keys(data));
            }
        } else {
            console.log(`Fast.com API returned ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Failed to get fast.com URLs:', error.message || error);
    }
    // Return empty array to trigger Cloudflare fallback
    return [];
}
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const size = searchParams.get('size');
    const useFastCom = searchParams.get('fast') !== 'false'; // Default to true
    try {
        let testUrl = null;
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$2_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to get speed test URL'
            }, {
                status: 500
            });
        }
        // Proxy the request to the speed test URL
        const startTime = Date.now();
        const testResponse = await fetch(testUrl, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; SpeedTest/1.0)',
                Accept: '*/*'
            }
        });
        if (!testResponse.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$2_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Speed test failed: ${testResponse.status}`
            }, {
                status: testResponse.status
            });
        }
        // Get the content as a stream and measure download speed
        const contentLength = testResponse.headers.get('content-length');
        const actualSize = contentLength ? parseInt(contentLength, 10) : expectedSize;
        // Read the response body
        const arrayBuffer = await testResponse.arrayBuffer();
        const downloadTime = (Date.now() - startTime) / 1000; // in seconds
        const actualDownloaded = arrayBuffer.byteLength;
        // Calculate speed in Mbps
        const speedMbps = actualDownloaded * 8 / (downloadTime * 1000000);
        // Return the result as JSON (we don't need to send the actual data back)
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$2_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            speedMbps: speedMbps.toFixed(2),
            sizeBytes: actualDownloaded,
            durationSeconds: downloadTime.toFixed(2),
            source: useFastCom && testUrl.includes('fast.com') ? 'fast.com' : 'cloudflare'
        });
    } catch (error) {
        console.error('Speed test error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$2_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Speed test failed'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0c5994d0._.js.map