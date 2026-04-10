module.exports = [
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/app/(app)/opengraph-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>Image,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2d$image$2d$size$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/buffer-image-size/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mime$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/mime/dist/src/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const alt = 'About Acme';
const size = {
    width: 1200,
    height: 628
};
function isRemoteFile(uri) {
    return uri.startsWith('http');
}
function doesLocalFileExist(uri) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["existsSync"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(process.cwd(), uri));
}
// LOCAL FILES MUST BE IN PUBLIC FOLDER
async function loadFileData(filePath) {
    if (isRemoteFile(filePath)) {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath} - ${response.status} ${response.statusText}`);
        }
        return await response.arrayBuffer();
    }
    // Try file system first (works in local development)
    if (doesLocalFileExist(filePath)) {
        const buffer = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(process.cwd(), filePath));
        return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    }
    // Fallback to fetching from public URL (works in production)
    const publicFilePath = filePath.replace('public/', '');
    const fontUrl = `https://${process.env.VERCEL_URL}/${publicFilePath}`;
    const response = await fetch(fontUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${fontUrl} - ${response.status} ${response.statusText}`);
    }
    return await response.arrayBuffer();
}
async function getImageData(uri, fallbackUri) {
    try {
        const fileData = await loadFileData(uri);
        const buffer = Buffer.from(fileData);
        const mimeType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mime$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].getType(uri);
        return {
            base64: `data:${mimeType};base64,${buffer.toString('base64')}`,
            dimensions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2d$image$2d$size$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(buffer)
        };
    } catch (e) {
        if (fallbackUri) {
            return getImageData(fallbackUri, fallbackUri);
        }
        throw e;
    }
}
function scaleImageSize(size, desiredHeight) {
    const scale = desiredHeight / size.height;
    return {
        width: size.width * scale,
        height: desiredHeight
    };
}
function cleanPageTitle(appName) {
    if (appName === __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_CONFIG_DEFAULTS"].pageTitle) {
        return 'Voice agent';
    }
    return appName;
}
const contentType = 'image/png';
async function Image() {
    const hdrs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const appConfig = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAppConfig"])(hdrs);
    const pageTitle = cleanPageTitle(appConfig.pageTitle);
    const logoUri = appConfig.logoDark || appConfig.logo;
    const isLogoUriLocal = logoUri.includes('lk-logo');
    const wordmarkUri = logoUri === __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_CONFIG_DEFAULTS"].logoDark ? 'public/lk-wordmark.svg' : logoUri;
    // Load fonts - use file system in dev, fetch in production
    let commitMonoData;
    let everettLightData;
    try {
        commitMonoData = await loadFileData('public/commit-mono-400-regular.woff');
        everettLightData = await loadFileData('public/everett-light.woff');
    } catch (e) {
        console.error('Failed to load fonts:', e);
    // Continue without custom fonts - will fall back to system fonts
    }
    // bg
    const { base64: bgSrcBase64 } = await getImageData('public/opengraph-image-bg.png');
    // wordmark
    const { base64: wordmarkSrcBase64, dimensions: wordmarkDimensions } = isLogoUriLocal ? await getImageData(wordmarkUri) : await getImageData(logoUri);
    const wordmarkSize = scaleImageSize(wordmarkDimensions, isLogoUriLocal ? 32 : 64);
    // logo
    const { base64: logoSrcBase64, dimensions: logoDimensions } = await getImageData(logoUri, 'public/lk-logo-dark.svg');
    const logoSize = scaleImageSize(logoDimensions, 24);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](// ImageResponse JSX element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: size.width,
            height: size.height,
            backgroundImage: `url(${bgSrcBase64})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 30,
                    left: 30,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: wordmarkSrcBase64,
                    width: wordmarkSize.width,
                    height: wordmarkSize.height
                }, void 0, false, {
                    fileName: "[project]/app/(app)/opengraph-image.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/opengraph-image.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 200,
                    left: 460,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: logoSrcBase64,
                    width: logoSize.width,
                    height: logoSize.height
                }, void 0, false, {
                    fileName: "[project]/app/(app)/opengraph-image.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/opengraph-image.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 100,
                    left: 30,
                    width: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: '#1F1F1F',
                            padding: '2px 8px',
                            borderRadius: 4,
                            width: 72,
                            fontSize: 12,
                            fontFamily: 'CommitMono',
                            fontWeight: 600,
                            color: '#999999',
                            letterSpacing: 0.8
                        },
                        children: "SANDBOX"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/opengraph-image.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 48,
                            fontWeight: 300,
                            fontFamily: 'Everett',
                            color: 'white',
                            lineHeight: 1
                        },
                        children: pageTitle
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/opengraph-image.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/opengraph-image.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/opengraph-image.tsx",
        lineNumber: 144,
        columnNumber: 7
    }, this), // ImageResponse options
    {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        ...size,
        fonts: [
            ...commitMonoData ? [
                {
                    name: 'CommitMono',
                    data: commitMonoData,
                    style: 'normal',
                    weight: 400
                }
            ] : [],
            ...everettLightData ? [
                {
                    name: 'Everett',
                    data: everettLightData,
                    style: 'normal',
                    weight: 300
                }
            ] : []
        ]
    });
}
}),
"[project]/app/(app)/opengraph-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(app)/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/(app)", params, "opengraph-image");
    const { generateImageMetadata } = imageModule;
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + "?10dd23d70afb2d03"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    if (generateImageMetadata) {
        const imageMetadataArray = await generateImageMetadata({
            params
        });
        return imageMetadataArray.map((imageMetadata, index)=>{
            const idParam = (imageMetadata.id || index) + '';
            return getImageMetadata(imageMetadata, idParam);
        });
    } else {
        return [
            getImageMetadata(imageModule, '')
        ];
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab529b23._.js.map