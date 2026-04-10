(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/livekit/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle,
    "alertVariants",
    ()=>alertVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])([
    'relative w-full rounded-lg border px-4 py-3 text-sm grid grid-cols-[0_1fr] gap-y-0.5 items-start',
    'has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current'
], {
    variants: {
        variant: {
            default: 'bg-card text-card-foreground',
            destructive: [
                'text-destructive bg-destructive/10 border-destructive/20',
                '[&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90'
            ]
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Alert(param) {
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/alert.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/alert.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/alert.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/alert-toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertToast",
    ()=>AlertToast,
    "toastAlert",
    ()=>toastAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Warning.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/alert.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function toastAlert(toast) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].custom((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertToast, {
            id: id,
            title: toast.title,
            description: toast.description
        }, void 0, false, {
            fileName: "[project]/components/livekit/alert-toast.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this), {
        duration: 10_000
    });
}
function AlertToast(props) {
    const { title, description, id } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(id),
        className: "bg-accent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningIcon"], {
                weight: "bold"
            }, void 0, false, {
                fileName: "[project]/components/livekit/alert-toast.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                children: title
            }, void 0, false, {
                fileName: "[project]/components/livekit/alert-toast.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                children: description
            }, void 0, false, {
                fileName: "[project]/components/livekit/alert-toast.tsx",
                lineNumber: 28,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/livekit/alert-toast.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = AlertToast;
var _c;
__turbopack_context__.k.register(_c, "AlertToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useRoom.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRoom",
    ()=>useRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$alert$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/alert-toast.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useRoom(appConfig) {
    _s();
    const aborted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useRoom.useMemo[room]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"]()
    }["useRoom.useMemo[room]"], []);
    const [isSessionActive, setIsSessionActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasVideoInsights, setHasVideoInsights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoom.useEffect": ()=>{
            function onDisconnected() {
                setIsSessionActive(false);
            }
            function onMediaDevicesError(error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$alert$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toastAlert"])({
                    title: 'Encountered an error with your media devices',
                    description: "".concat(error.name, ": ").concat(error.message)
                });
            }
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, onDisconnected);
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].MediaDevicesError, onMediaDevicesError);
            return ({
                "useRoom.useEffect": ()=>{
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, onDisconnected);
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].MediaDevicesError, onMediaDevicesError);
                }
            })["useRoom.useEffect"];
        }
    }["useRoom.useEffect"], [
        room
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoom.useEffect": ()=>{
            return ({
                "useRoom.useEffect": ()=>{
                    aborted.current = true;
                    room.disconnect();
                }
            })["useRoom.useEffect"];
        }
    }["useRoom.useEffect"], [
        room
    ]);
    const tokenSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useRoom.useMemo[tokenSource]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenSource"].custom({
                "useRoom.useMemo[tokenSource]": async ()=>{
                    console.log('[useRoom] TokenSource: Starting token fetch');
                    var _process_env_NEXT_PUBLIC_CONN_DETAILS_ENDPOINT;
                    const url = new URL((_process_env_NEXT_PUBLIC_CONN_DETAILS_ENDPOINT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT) !== null && _process_env_NEXT_PUBLIC_CONN_DETAILS_ENDPOINT !== void 0 ? _process_env_NEXT_PUBLIC_CONN_DETAILS_ENDPOINT : '/api/connection-details', window.location.origin);
                    // Extract session parameter from current page URL and add it to the API endpoint URL
                    const currentUrl = new URL(window.location.href);
                    const sessionParam = currentUrl.searchParams.get('session');
                    console.log('[useRoom] TokenSource: Extracting session from URL', {
                        currentUrl: window.location.href,
                        sessionParam,
                        hasSession: !!sessionParam
                    });
                    if (sessionParam) {
                        url.searchParams.set('session', sessionParam);
                        console.log('[useRoom] TokenSource: Session parameter added to API URL', {
                            apiUrl: url.toString(),
                            session: sessionParam
                        });
                    } else {
                        console.warn('[useRoom] TokenSource: No session parameter found in URL', {
                            currentUrl: window.location.href
                        });
                    }
                    const requestBody = {
                        room_config: appConfig.agentName ? {
                            agents: [
                                {
                                    agent_name: appConfig.agentName
                                }
                            ]
                        } : undefined
                    };
                    console.log('[useRoom] TokenSource: Making request to API', {
                        url: url.toString(),
                        method: 'POST',
                        agentName: appConfig.agentName,
                        hasRoomConfig: !!requestBody.room_config
                    });
                    try {
                        var _connectionDetails_participantToken;
                        var _appConfig_sandboxId;
                        const res = await fetch(url.toString(), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-Sandbox-Id': (_appConfig_sandboxId = appConfig.sandboxId) !== null && _appConfig_sandboxId !== void 0 ? _appConfig_sandboxId : ''
                            },
                            body: JSON.stringify(requestBody)
                        });
                        console.log('[useRoom] TokenSource: API response received', {
                            status: res.status,
                            statusText: res.statusText,
                            ok: res.ok
                        });
                        if (!res.ok) {
                            const errorText = await res.text();
                            console.error('[useRoom] TokenSource: API request failed', {
                                status: res.status,
                                statusText: res.statusText,
                                error: errorText
                            });
                            throw new Error("Failed to fetch connection details: ".concat(res.statusText));
                        }
                        const connectionDetails = await res.json();
                        console.log('[useRoom] TokenSource: Connection details received', {
                            serverUrl: connectionDetails.serverUrl,
                            roomName: connectionDetails.roomName,
                            participantName: connectionDetails.participantName,
                            hasToken: !!connectionDetails.participantToken,
                            tokenLength: (_connectionDetails_participantToken = connectionDetails.participantToken) === null || _connectionDetails_participantToken === void 0 ? void 0 : _connectionDetails_participantToken.length,
                            has_video_insights: connectionDetails.has_video_insights
                        });
                        var _connectionDetails_has_video_insights;
                        // Store has_video_insights
                        setHasVideoInsights((_connectionDetails_has_video_insights = connectionDetails.has_video_insights) !== null && _connectionDetails_has_video_insights !== void 0 ? _connectionDetails_has_video_insights : false);
                        return connectionDetails;
                    } catch (error) {
                        console.error('[useRoom] TokenSource: Error fetching connection details', {
                            error,
                            message: error instanceof Error ? error.message : 'Unknown error',
                            stack: error instanceof Error ? error.stack : undefined
                        });
                        throw new Error('Error fetching connection details!');
                    }
                }
            }["useRoom.useMemo[tokenSource]"])
    }["useRoom.useMemo[tokenSource]"], [
        appConfig
    ]);
    const startSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[startSession]": ()=>{
            console.log('[useRoom] startSession: Starting session', {
                roomState: room.state,
                isSessionActive
            });
            setIsSessionActive(true);
            if (room.state === 'disconnected') {
                const { isPreConnectBufferEnabled } = appConfig;
                console.log('[useRoom] startSession: Room is disconnected, initiating connection', {
                    isPreConnectBufferEnabled,
                    agentName: appConfig.agentName
                });
                Promise.all([
                    room.localParticipant.setMicrophoneEnabled(true, undefined, {
                        preConnectBuffer: isPreConnectBufferEnabled
                    }),
                    room.localParticipant.setCameraEnabled(true),
                    tokenSource.fetch({
                        agentName: appConfig.agentName
                    }).then({
                        "useRoom.useCallback[startSession]": (connectionDetails)=>{
                            const details = connectionDetails;
                            console.log('[useRoom] startSession: Connecting to room', {
                                serverUrl: details.serverUrl,
                                roomName: details.roomName
                            });
                            return room.connect(details.serverUrl, details.participantToken);
                        }
                    }["useRoom.useCallback[startSession]"])
                ]).catch({
                    "useRoom.useCallback[startSession]": (error)=>{
                        if (aborted.current) {
                            console.log('[useRoom] startSession: Connection aborted, ignoring error');
                            // Once the effect has cleaned up after itself, drop any errors
                            //
                            // These errors are likely caused by this effect rerunning rapidly,
                            // resulting in a previous run `disconnect` running in parallel with
                            // a current run `connect`
                            return;
                        }
                        console.error('[useRoom] startSession: Error connecting to agent', {
                            error,
                            errorName: error.name,
                            errorMessage: error.message
                        });
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$alert$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toastAlert"])({
                            title: 'There was an error connecting to the agent',
                            description: "".concat(error.name, ": ").concat(error.message)
                        });
                    }
                }["useRoom.useCallback[startSession]"]);
            } else {
                console.log('[useRoom] startSession: Room is not disconnected, skipping connection', {
                    roomState: room.state
                });
            }
        }
    }["useRoom.useCallback[startSession]"], [
        room,
        appConfig,
        tokenSource,
        isSessionActive
    ]);
    const endSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[endSession]": ()=>{
            setIsSessionActive(false);
        }
    }["useRoom.useCallback[endSession]"], []);
    return {
        room,
        isSessionActive,
        hasVideoInsights,
        startSession,
        endSession
    };
}
_s(useRoom, "ChNGiNnh1/6E5T9+4DfN86Qgy3U=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app/session-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionProvider",
    ()=>SessionProvider,
    "useSession",
    ()=>useSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/contexts-D4V9wQRc.mjs [app-client] (ecmascript) <export R as RoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useRoom.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const SessionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    appConfig: __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_CONFIG_DEFAULTS"],
    isSessionActive: false,
    hasVideoInsights: false,
    startSession: ()=>{},
    endSession: ()=>{}
});
const SessionProvider = (param)=>{
    let { appConfig, children } = param;
    _s();
    const { room, isSessionActive, startSession, endSession, hasVideoInsights } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoom"])(appConfig);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SessionProvider.useMemo[contextValue]": ()=>({
                appConfig,
                isSessionActive,
                hasVideoInsights,
                startSession,
                endSession
            })
    }["SessionProvider.useMemo[contextValue]"], [
        appConfig,
        isSessionActive,
        hasVideoInsights,
        startSession,
        endSession
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomContext$3e$__["RoomContext"].Provider, {
        value: room,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SessionContext.Provider, {
            value: contextValue,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/app/session-provider.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/app/session-provider.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SessionProvider, "1NzMw4if3AJUpfpb9ySFgAStRLY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoom"]
    ];
});
_c = SessionProvider;
function useSession() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SessionContext);
}
_s1(useSession, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "SessionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app/loading-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingScreen",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Spinner.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Lightbulb$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Lightbulb.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const tips = [
    'Take a deep breath and relax',
    'Speak clearly and confidently',
    'Think before you answer',
    'Be yourself and stay authentic',
    'Ask for clarification if needed'
];
const LoadingScreen = (param)=>{
    let { className, title = 'Waiting for AI Evaluator to join', description } = param;
    _s();
    const [currentTipIndex, setCurrentTipIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            const interval = setInterval({
                "LoadingScreen.useEffect.interval": ()=>{
                    setCurrentTipIndex({
                        "LoadingScreen.useEffect.interval": (prev)=>(prev + 1) % tips.length
                    }["LoadingScreen.useEffect.interval"]);
                }
            }["LoadingScreen.useEffect.interval"], 3000);
            return ({
                "LoadingScreen.useEffect": ()=>clearInterval(interval)
            })["LoadingScreen.useEffect"];
        }
    }["LoadingScreen.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed inset-0 z-[9999] min-h-screen bg-white flex items-center justify-center p-4 md:p-8', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-3xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-16 rounded-full bg-[#E8F0FE] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                            className: "h-8 w-8 text-[#1A73E8] animate-spin",
                            weight: "bold"
                        }, void 0, false, {
                            fileName: "[project]/components/app/loading-screen.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/app/loading-screen.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/loading-screen.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-normal text-slate-900 mb-3 tracking-tight",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/app/loading-screen.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-slate-600 font-normal",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/components/app/loading-screen.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/app/loading-screen.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white max-w-md w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-11 w-11 rounded-full bg-yellow-100 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Lightbulb$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightbulb"], {
                                                className: "h-5 w-5 text-yellow-600",
                                                weight: "regular"
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/loading-screen.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/app/loading-screen.tsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/app/loading-screen.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-8 overflow-hidden text-center",
                                            children: tips.map((tip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute inset-0 flex items-center justify-center text-base text-slate-600 leading-relaxed transition-opacity duration-500', currentTipIndex === index ? 'opacity-100' : 'opacity-0'),
                                                    children: tip
                                                }, index, false, {
                                                    fileName: "[project]/components/app/loading-screen.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/app/loading-screen.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/app/loading-screen.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app/loading-screen.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/app/loading-screen.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/app/loading-screen.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/loading-screen.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/app/loading-screen.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/app/loading-screen.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoadingScreen, "Fg8f18Fc0WW7v6fWGrxnMsbcsYE=");
_c = LoadingScreen;
var _c;
__turbopack_context__.k.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app/tile-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TileLayout",
    ()=>TileLayout,
    "useLocalTrackRef",
    ()=>useLocalTrackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-lNrIMTWQ.mjs [app-client] (ecmascript) <export B as BarVisualizer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-lNrIMTWQ.mjs [app-client] (ecmascript) <export V as VideoTrack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export C as useLocalParticipant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export t as useTracks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export X as useVoiceAssistant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
const MotionContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create('div');
_c = MotionContainer;
const ANIMATION_TRANSITION = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
    mass: 0.8
};
function useLocalTrackRef(source) {
    _s();
    const { localParticipant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"])();
    const publication = localParticipant.getTrackPublication(source);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLocalTrackRef.useMemo[trackRef]": ()=>publication ? {
                source,
                participant: localParticipant,
                publication
            } : undefined
    }["useLocalTrackRef.useMemo[trackRef]"], [
        source,
        publication,
        localParticipant
    ]);
    return trackRef;
}
_s(useLocalTrackRef, "ObPNTkQSJCMovei9bDU6MvKcbDY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"]
    ];
});
function TileLayout() {
    var _agentVideoTrack_publication_dimensions, _agentVideoTrack_publication_dimensions1, _publication_dimensions, _this, _publication_dimensions1, _this1;
    _s1();
    const { state: agentState, audioTrack: agentAudioTrack, videoTrack: agentVideoTrack } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__["useVoiceAssistant"])();
    const [screenShareTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare
    ]);
    const cameraTrack = useLocalTrackRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera);
    const isCameraEnabled = cameraTrack && !cameraTrack.publication.isMuted;
    const isScreenShareEnabled = screenShareTrack && !screenShareTrack.publication.isMuted;
    const hasSecondTile = isCameraEnabled || isScreenShareEnabled;
    const isAvatar = agentVideoTrack !== undefined;
    var _agentVideoTrack_publication_dimensions_width;
    const videoWidth = (_agentVideoTrack_publication_dimensions_width = agentVideoTrack === null || agentVideoTrack === void 0 ? void 0 : (_agentVideoTrack_publication_dimensions = agentVideoTrack.publication.dimensions) === null || _agentVideoTrack_publication_dimensions === void 0 ? void 0 : _agentVideoTrack_publication_dimensions.width) !== null && _agentVideoTrack_publication_dimensions_width !== void 0 ? _agentVideoTrack_publication_dimensions_width : 0;
    var _agentVideoTrack_publication_dimensions_height;
    const videoHeight = (_agentVideoTrack_publication_dimensions_height = agentVideoTrack === null || agentVideoTrack === void 0 ? void 0 : (_agentVideoTrack_publication_dimensions1 = agentVideoTrack.publication.dimensions) === null || _agentVideoTrack_publication_dimensions1 === void 0 ? void 0 : _agentVideoTrack_publication_dimensions1.height) !== null && _agentVideoTrack_publication_dimensions_height !== void 0 ? _agentVideoTrack_publication_dimensions_height : 0;
    var _publication_dimensions_width, _publication_dimensions_height;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-0 z-40 flex items-center justify-center p-4 pt-20 pb-32 md:p-8 md:pt-24 md:pb-48",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full w-full max-w-7xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex h-full items-center justify-center transition-all duration-500 ease-out', hasSecondTile ? 'gap-8 md:gap-12' : 'gap-0'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            !isAvatar && // Audio Agent
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
                                layout: true,
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: ANIMATION_TRANSITION,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 transition-all duration-500', 'border border-slate-200 shadow-[0_4px_12px_rgba(15,23,42,0.08)]', hasSecondTile ? 'h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[440px] md:w-[440px] lg:h-[520px] lg:w-[520px]' : 'h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[480px] md:w-[480px] lg:h-[560px] lg:w-[560px]'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "relative z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__["BarVisualizer"], {
                                        barCount: 5,
                                        state: agentState,
                                        options: {
                                            minHeight: 8
                                        },
                                        trackRef: agentAudioTrack,
                                        className: "flex items-center justify-center gap-2 md:gap-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('aspect-square min-h-3 w-3 rounded-full bg-gradient-to-t from-[#1A73E8] to-[#1557B0] sm:min-h-4 sm:w-4 md:min-h-5 md:w-5', 'origin-center transition-all duration-200 ease-out', 'data-[lk-highlighted=true]:from-[#1557B0] data-[lk-highlighted=true]:to-[#1A73E8]', 'data-[lk-muted=true]:from-slate-400 data-[lk-muted=true]:to-slate-500'),
                                            animate: {
                                                scaleY: agentState === 'speaking' ? [
                                                    1,
                                                    1.2,
                                                    1
                                                ] : 1
                                            },
                                            transition: {
                                                repeat: agentState === 'speaking' ? Infinity : 0,
                                                duration: 0.6
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/app/tile-layout.tsx",
                                            lineNumber: 95,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/app/tile-layout.tsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/app/tile-layout.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this)
                            }, "agent-audio", false, {
                                fileName: "[project]/components/app/tile-layout.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            isAvatar && // Avatar Agent
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
                                layout: true,
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: ANIMATION_TRANSITION,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden rounded-3xl bg-black border border-slate-200 shadow-[0_4px_12px_rgba(15,23,42,0.08)] transition-all duration-500', hasSecondTile ? 'h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[440px] md:w-[440px] lg:h-[520px] lg:w-[520px]' : 'h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[480px] md:w-[480px] lg:h-[560px] lg:w-[560px]'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__["VideoTrack"], {
                                    width: videoWidth,
                                    height: videoHeight,
                                    trackRef: agentVideoTrack,
                                    className: "h-full w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/app/tile-layout.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this)
                            }, "agent-avatar", false, {
                                fileName: "[project]/components/app/tile-layout.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app/tile-layout.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: hasSecondTile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionContainer, {
                            layout: true,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: ANIMATION_TRANSITION,
                            className: "relative h-[280px] w-[280px] overflow-hidden rounded-3xl bg-black border border-slate-200 shadow-[0_4px_12px_rgba(15,23,42,0.08)] transition-all duration-500 sm:h-[360px] sm:w-[360px] md:h-[440px] md:w-[440px] lg:h-[520px] lg:w-[520px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__V__as__VideoTrack$3e$__["VideoTrack"], {
                                    trackRef: cameraTrack || screenShareTrack,
                                    width: (_publication_dimensions_width = (_this = cameraTrack || screenShareTrack) === null || _this === void 0 ? void 0 : (_publication_dimensions = _this.publication.dimensions) === null || _publication_dimensions === void 0 ? void 0 : _publication_dimensions.width) !== null && _publication_dimensions_width !== void 0 ? _publication_dimensions_width : 0,
                                    height: (_publication_dimensions_height = (_this1 = cameraTrack || screenShareTrack) === null || _this1 === void 0 ? void 0 : (_publication_dimensions1 = _this1.publication.dimensions) === null || _publication_dimensions1 === void 0 ? void 0 : _publication_dimensions1.height) !== null && _publication_dimensions_height !== void 0 ? _publication_dimensions_height : 0,
                                    className: "h-full w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/app/tile-layout.tsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md md:top-6 md:left-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square h-2 w-2 rounded-full bg-[#1A73E8]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/app/tile-layout.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-white sm:text-sm",
                                            children: isScreenShareEnabled ? 'Screen Share' : 'You'
                                        }, void 0, false, {
                                            fileName: "[project]/components/app/tile-layout.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/app/tile-layout.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "user-video", true, {
                            fileName: "[project]/components/app/tile-layout.tsx",
                            lineNumber: 150,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/app/tile-layout.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/app/tile-layout.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/app/tile-layout.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/app/tile-layout.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s1(TileLayout, "OAyISiYhaAUEXALRjOmkeYC+SyE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__["useVoiceAssistant"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"],
        useLocalTrackRef
    ];
});
_c1 = TileLayout;
var _c, _c1;
__turbopack_context__.k.register(_c, "MotionContainer");
__turbopack_context__.k.register(_c1, "TileLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])([
    'text-xs font-bold tracking-wider uppercase whitespace-nowrap',
    'inline-flex items-center justify-center gap-2 shrink-0 rounded-full cursor-pointer outline-none transition-colors duration-300',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-invalid:ring-destructive/20 aria-invalid:border-destructive dark:aria-invalid:ring-destructive/40 ',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
], {
    variants: {
        variant: {
            default: 'bg-muted text-foreground hover:bg-muted focus:bg-muted hover:bg-foreground/10',
            destructive: [
                'bg-destructive/10 text-destructive',
                'hover:bg-destructive/20 focus:bg-destructive/20 focus-visible:ring-destructive/20',
                'dark:focus-visible:ring-destructive/40'
            ],
            outline: [
                'border border-input bg-background',
                'hover:bg-accent hover:text-accent-foreground',
                'dark:bg-input/30 dark:border-input dark:hover:bg-input/50'
            ],
            primary: 'bg-primary text-primary-foreground hover:bg-primary/70 focus:bg-primary/70',
            secondary: 'bg-foreground/15 text-secondary-foreground hover:bg-foreground/20',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 px-6 has-[>svg]:px-4',
            icon: 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/button.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle,
    "toggleVariants",
    ()=>toggleVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toggle/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const toggleVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])([
    'inline-flex items-center justify-center gap-2 rounded-full',
    'text-sm font-medium whitespace-nowrap',
    'cursor-pointer outline-none transition-[color,box-shadow,background-color]',
    'hover:bg-muted hover:text-muted-foreground',
    'disabled:pointer-events-none disabled:opacity-50',
    'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
    'focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:border-ring',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
], {
    variants: {
        variant: {
            default: 'bg-transparent',
            primary: 'bg-muted data-[state=on]:bg-muted hover:text-foreground text-destructive hover:text-foreground hover:bg-foreground/10 hover:data-[state=on]:bg-foreground/10',
            secondary: 'bg-muted data-[state=on]:bg-muted hover:text-foreground hover:bg-foreground/10 hover:data-[state=on]:bg-foreground/10 data-[state=on]:bg-blue-500/20 data-[state=on]:hover:bg-blue-500/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-300',
            outline: 'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 px-6 has-[>svg]:px-4',
            icon: 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Toggle(param) {
    let { className, variant, size, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "toggle",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toggleVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/toggle.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Toggle;
;
var _c;
__turbopack_context__.k.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/agent-control-bar/chat-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInput",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PaperPlaneRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/PaperPlaneRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Spinner.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const MOTION_PROPS = {
    variants: {
        hidden: {
            height: 0,
            opacity: 0,
            marginBottom: 0
        },
        visible: {
            height: 'auto',
            opacity: 1,
            marginBottom: 12
        }
    },
    initial: 'hidden',
    transition: {
        duration: 0.3,
        ease: [
            0.4,
            0,
            0.2,
            1
        ]
    }
};
function ChatInput(param) {
    let { chatOpen, isAgentAvailable = false, onSend = async ()=>{} } = param;
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setIsSending(true);
            await onSend(message);
            setMessage('');
        } catch (error) {
            console.error(error);
        } finally{
            setIsSending(false);
        }
    };
    const isDisabled = isSending || !isAgentAvailable || message.trim().length === 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            var // when not disabled refocus on input
            _inputRef_current;
            if (chatOpen && isAgentAvailable) return;
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
        }
    }["ChatInput.useEffect"], [
        chatOpen,
        isAgentAvailable
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        inert: !chatOpen,
        ...MOTION_PROPS,
        animate: chatOpen ? 'visible' : 'hidden',
        className: "border-input/50 flex w-full items-start overflow-hidden border-b",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "mb-3 flex grow items-end gap-2 rounded-md pl-1 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    autoFocus: true,
                    ref: inputRef,
                    type: "text",
                    value: message,
                    disabled: !chatOpen,
                    placeholder: "Type something...",
                    onChange: (e)=>setMessage(e.target.value),
                    className: "h-8 flex-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/livekit/agent-control-bar/chat-input.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    size: "icon",
                    type: "submit",
                    disabled: isDisabled,
                    variant: isDisabled ? 'secondary' : 'primary',
                    title: isSending ? 'Sending...' : 'Send',
                    className: "self-start",
                    children: isSending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerIcon"], {
                        className: "animate-spin",
                        weight: "bold"
                    }, void 0, false, {
                        fileName: "[project]/components/livekit/agent-control-bar/chat-input.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PaperPlaneRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaperPlaneRightIcon"], {
                        weight: "bold"
                    }, void 0, false, {
                        fileName: "[project]/components/livekit/agent-control-bar/chat-input.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/livekit/agent-control-bar/chat-input.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/livekit/agent-control-bar/chat-input.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/livekit/agent-control-bar/chat-input.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(ChatInput, "CCoBPS1baX6Ux642PInMHn3Lu4A=");
_c = ChatInput;
var _c;
__turbopack_context__.k.register(_c, "ChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/agent-control-bar/hooks/use-input-controls.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInputControls",
    ()=>useInputControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export C as useLocalParticipant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__usePersistentUserChoices$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export x as usePersistentUserChoices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export h as useTrackToggle>");
var _s = __turbopack_context__.k.signature();
;
;
;
function useInputControls() {
    let { saveUserChoices = true, onDeviceError } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const { microphoneTrack, localParticipant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"])();
    const microphoneToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"])({
        source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
        onDeviceError: {
            "useInputControls.useTrackToggle[microphoneToggle]": (error)=>onDeviceError === null || onDeviceError === void 0 ? void 0 : onDeviceError({
                    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                    error
                })
        }["useInputControls.useTrackToggle[microphoneToggle]"]
    });
    const cameraToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"])({
        source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
        onDeviceError: {
            "useInputControls.useTrackToggle[cameraToggle]": (error)=>onDeviceError === null || onDeviceError === void 0 ? void 0 : onDeviceError({
                    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
                    error
                })
        }["useInputControls.useTrackToggle[cameraToggle]"]
    });
    const screenShareToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"])({
        source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
        onDeviceError: {
            "useInputControls.useTrackToggle[screenShareToggle]": (error)=>onDeviceError === null || onDeviceError === void 0 ? void 0 : onDeviceError({
                    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
                    error
                })
        }["useInputControls.useTrackToggle[screenShareToggle]"]
    });
    const micTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useInputControls.useMemo[micTrackRef]": ()=>{
            return {
                participant: localParticipant,
                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                publication: microphoneTrack
            };
        }
    }["useInputControls.useMemo[micTrackRef]"], [
        localParticipant,
        microphoneTrack
    ]);
    const { saveAudioInputEnabled, saveVideoInputEnabled, saveAudioInputDeviceId, saveVideoInputDeviceId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__usePersistentUserChoices$3e$__["usePersistentUserChoices"])({
        preventSave: !saveUserChoices
    });
    const handleAudioDeviceChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleAudioDeviceChange]": (deviceId)=>{
            saveAudioInputDeviceId(deviceId !== null && deviceId !== void 0 ? deviceId : 'default');
        }
    }["useInputControls.useCallback[handleAudioDeviceChange]"], [
        saveAudioInputDeviceId
    ]);
    const handleVideoDeviceChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleVideoDeviceChange]": (deviceId)=>{
            saveVideoInputDeviceId(deviceId !== null && deviceId !== void 0 ? deviceId : 'default');
        }
    }["useInputControls.useCallback[handleVideoDeviceChange]"], [
        saveVideoInputDeviceId
    ]);
    const handleToggleCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleToggleCamera]": async (enabled)=>{
            if (screenShareToggle.enabled) {
                screenShareToggle.toggle(false);
            }
            await cameraToggle.toggle(enabled);
            // persist video input enabled preference
            saveVideoInputEnabled(!cameraToggle.enabled);
        }
    }["useInputControls.useCallback[handleToggleCamera]"], [
        cameraToggle,
        screenShareToggle,
        saveVideoInputEnabled
    ]);
    const handleToggleMicrophone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleToggleMicrophone]": async (enabled)=>{
            await microphoneToggle.toggle(enabled);
            // persist audio input enabled preference
            saveAudioInputEnabled(!microphoneToggle.enabled);
        }
    }["useInputControls.useCallback[handleToggleMicrophone]"], [
        microphoneToggle,
        saveAudioInputEnabled
    ]);
    const handleToggleScreenShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleToggleScreenShare]": async (enabled)=>{
            if (cameraToggle.enabled) {
                cameraToggle.toggle(false);
            }
            await screenShareToggle.toggle(enabled);
        }
    }["useInputControls.useCallback[handleToggleScreenShare]"], [
        cameraToggle,
        screenShareToggle
    ]);
    const handleMicrophoneDeviceSelectError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleMicrophoneDeviceSelectError]": (error)=>onDeviceError === null || onDeviceError === void 0 ? void 0 : onDeviceError({
                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                error
            })
    }["useInputControls.useCallback[handleMicrophoneDeviceSelectError]"], [
        onDeviceError
    ]);
    const handleCameraDeviceSelectError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInputControls.useCallback[handleCameraDeviceSelectError]": (error)=>onDeviceError === null || onDeviceError === void 0 ? void 0 : onDeviceError({
                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
                error
            })
    }["useInputControls.useCallback[handleCameraDeviceSelectError]"], [
        onDeviceError
    ]);
    return {
        micTrackRef,
        cameraToggle: {
            ...cameraToggle,
            toggle: handleToggleCamera
        },
        microphoneToggle: {
            ...microphoneToggle,
            toggle: handleToggleMicrophone
        },
        screenShareToggle: {
            ...screenShareToggle,
            toggle: handleToggleScreenShare
        },
        handleAudioDeviceChange,
        handleVideoDeviceChange,
        handleMicrophoneDeviceSelectError,
        handleCameraDeviceSelectError
    };
}
_s(useInputControls, "CTGF/aNuBloyUvWF/9th28kdihg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__useTrackToggle$3e$__["useTrackToggle"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__x__as__usePersistentUserChoices$3e$__["usePersistentUserChoices"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/agent-control-bar/hooks/use-publish-permissions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePublishPermissions",
    ()=>usePublishPermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useLocalParticipantPermissions$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export A as useLocalParticipantPermissions>");
var _s = __turbopack_context__.k.signature();
;
;
const trackSourceToProtocol = (source)=>{
    // NOTE: this mapping avoids importing the protocol package as that leads to a significant bundle size increase
    switch(source){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera:
            return 1;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone:
            return 2;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare:
            return 3;
        default:
            return 0;
    }
};
function usePublishPermissions() {
    _s();
    const localPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useLocalParticipantPermissions$3e$__["useLocalParticipantPermissions"])();
    const canPublishSource = (source)=>{
        return !!(localPermissions === null || localPermissions === void 0 ? void 0 : localPermissions.canPublish) && (localPermissions.canPublishSources.length === 0 || localPermissions.canPublishSources.includes(trackSourceToProtocol(source)));
    };
    var _localPermissions_canPublishData;
    return {
        camera: canPublishSource(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera),
        microphone: canPublishSource(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone),
        screenShare: canPublishSource(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare),
        data: (_localPermissions_canPublishData = localPermissions === null || localPermissions === void 0 ? void 0 : localPermissions.canPublishData) !== null && _localPermissions_canPublishData !== void 0 ? _localPermissions_canPublishData : false
    };
}
_s(usePublishPermissions, "Odic0X/xsfsczbWjAGq7cvB4uRU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__useLocalParticipantPermissions$3e$__["useLocalParticipantPermissions"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/CaretDown.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretUp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/CaretUp.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Check$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Check.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Select(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/select.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/select.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/select.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger(param) {
    let { className, size = 'default', children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
            'flex w-fit cursor-pointer items-center justify-between gap-2',
            'rounded-full px-3 py-2 text-sm whitespace-nowrap',
            'bg-muted transition-[color,border,background-color]',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'focus-visible:border-ring focus-visible:ring-ring/50 hover:bg-foreground/10 focus:bg-foreground/10 outline-none focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            'data-[placeholder]:text-muted-foreground',
            'data-[size=default]:h-9 data-[size=sm]:h-8',
            '*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2',
            "[&:not([class*='text-'])_svg:not([class*='text-'])]:text-muted-foreground",
            "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        ], className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretDownIcon"], {
                    weight: "bold",
                    className: "size-4 transition-colors"
                }, void 0, false, {
                    fileName: "[project]/components/livekit/select.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/livekit/select.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/livekit/select.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent(param) {
    let { className, children, position = 'popper', ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
                'bg-popover text-popover-foreground relative z-50 overflow-x-hidden overflow-y-auto rounded-md border drop-shadow-xl/5',
                'max-h-(--radix-select-content-available-height) min-w-[8rem]',
                'origin-(--radix-select-content-transform-origin)',
                'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
                'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
                'data-[side=top]:slide-in-from-bottom-2',
                'data-[side=right]:slide-in-from-left-2',
                'data-[side=bottom]:slide-in-from-top-2',
                'data-[side=left]:slide-in-from-right-2'
            ], position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/livekit/select.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/livekit/select.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/livekit/select.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/livekit/select.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/livekit/select.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/select.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
            'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none',
            'cursor-pointer disabled:cursor-not-allowed',
            'focus:bg-accent focus:text-accent-foreground',
            'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            '*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2',
            "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        ], className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Check$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckIcon"], {
                        className: "size-4",
                        weight: "bold"
                    }, void 0, false, {
                        fileName: "[project]/components/livekit/select.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/livekit/select.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/livekit/select.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/livekit/select.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/livekit/select.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/select.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretUp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretUpIcon"], {
            className: "size-4",
            weight: "bold"
        }, void 0, false, {
            fileName: "[project]/components/livekit/select.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/livekit/select.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretDown$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretDownIcon"], {
            className: "size-4",
            weight: "bold"
        }, void 0, false, {
            fileName: "[project]/components/livekit/select.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/livekit/select.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/agent-control-bar/track-device-select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackDeviceSelect",
    ()=>TrackDeviceSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useMaybeRoomContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/contexts-D4V9wQRc.mjs [app-client] (ecmascript) <export w as useMaybeRoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__useMediaDeviceSelect$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export e as useMediaDeviceSelect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const selectVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('w-full rounded-full px-3 text-sm cursor-pointer disabled:not-allowed', {
    variants: {
        size: {
            default: 'w-[180px] h-11 py-2.5',
            sm: 'w-auto h-11 py-2.5'
        }
    },
    defaultVariants: {
        size: 'default'
    }
});
function TrackDeviceSelect(param) {
    let { kind, track, size = 'default', requestPermissions = false, onMediaDeviceError, onDeviceListChange, onActiveDeviceChange, ...props } = param;
    _s();
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useMaybeRoomContext$3e$__["useMaybeRoomContext"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [requestPermissionsState, setRequestPermissionsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(requestPermissions);
    const { devices, activeDeviceId, setActiveMediaDevice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__useMediaDeviceSelect$3e$__["useMediaDeviceSelect"])({
        room,
        kind,
        track,
        requestPermissions: requestPermissionsState,
        onError: onMediaDeviceError
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrackDeviceSelect.useEffect": ()=>{
            onDeviceListChange === null || onDeviceListChange === void 0 ? void 0 : onDeviceListChange(devices);
        }
    }["TrackDeviceSelect.useEffect"], [
        devices,
        onDeviceListChange
    ]);
    // When the select opens, ensure that media devices are re-requested in case when they were last
    // requested, permissions were not granted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TrackDeviceSelect.useLayoutEffect": ()=>{
            if (open) {
                setRequestPermissionsState(true);
            }
        }
    }["TrackDeviceSelect.useLayoutEffect"], [
        open
    ]);
    const handleActiveDeviceChange = (deviceId)=>{
        setActiveMediaDevice(deviceId);
        onActiveDeviceChange === null || onActiveDeviceChange === void 0 ? void 0 : onActiveDeviceChange(deviceId);
    };
    const filteredDevices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TrackDeviceSelect.useMemo[filteredDevices]": ()=>devices.filter({
                "TrackDeviceSelect.useMemo[filteredDevices]": (d)=>d.deviceId !== ''
            }["TrackDeviceSelect.useMemo[filteredDevices]"])
    }["TrackDeviceSelect.useMemo[filteredDevices]"], [
        devices
    ]);
    if (filteredDevices.length < 2) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        open: open,
        value: activeDeviceId,
        onOpenChange: setOpen,
        onValueChange: handleActiveDeviceChange,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(selectVariants({
                    size
                }), '!h-11', props.className),
                children: size !== 'sm' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    className: "font-mono text-sm",
                    placeholder: "Select a ".concat(kind)
                }, void 0, false, {
                    fileName: "[project]/components/livekit/agent-control-bar/track-device-select.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/livekit/agent-control-bar/track-device-select.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: filteredDevices.map((device)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: device.deviceId,
                        className: "font-mono text-xs",
                        children: device.label
                    }, device.deviceId, false, {
                        fileName: "[project]/components/livekit/agent-control-bar/track-device-select.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/livekit/agent-control-bar/track-device-select.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/livekit/agent-control-bar/track-device-select.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(TrackDeviceSelect, "E+buNOuz+Ui5zQlfRq7iZZV1LRc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useMaybeRoomContext$3e$__["useMaybeRoomContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__useMediaDeviceSelect$3e$__["useMediaDeviceSelect"]
    ];
});
_c = TrackDeviceSelect;
var _c;
__turbopack_context__.k.register(_c, "TrackDeviceSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/agent-control-bar/track-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackToggle",
    ()=>TrackToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Microphone$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Microphone.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MicrophoneSlash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/MicrophoneSlash.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MonitorArrowUp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/MonitorArrowUp.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Spinner.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCamera$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/VideoCamera.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCameraSlash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/VideoCameraSlash.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function getSourceIcon(source, enabled) {
    let pending = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (pending) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerIcon"];
    }
    switch(source){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone:
            return enabled ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Microphone$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicrophoneIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MicrophoneSlash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicrophoneSlashIcon"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera:
            return enabled ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCamera$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoCameraIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$VideoCameraSlash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoCameraSlashIcon"];
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$MonitorArrowUp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonitorArrowUpIcon"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
    }
}
function TrackToggle(param) {
    let { source, pressed, pending, className, ...props } = param;
    const IconComponent = getSourceIcon(source, pressed !== null && pressed !== void 0 ? pressed : false, pending);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
        pressed: pressed,
        "aria-label": "Toggle ".concat(source),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                weight: "bold",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-5', pending && 'animate-spin')
            }, void 0, false, {
                fileName: "[project]/components/livekit/agent-control-bar/track-toggle.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            props.children
        ]
    }, void 0, true, {
        fileName: "[project]/components/livekit/agent-control-bar/track-toggle.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = TrackToggle;
var _c;
__turbopack_context__.k.register(_c, "TrackToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/agent-control-bar/track-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackSelector",
    ()=>TrackSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-lNrIMTWQ.mjs [app-client] (ecmascript) <export B as BarVisualizer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$device$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/agent-control-bar/track-device-select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/agent-control-bar/track-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function TrackSelector(param) {
    let { kind, source, pressed, pending, disabled, className, audioTrackRef, onPressedChange, onMediaDeviceError, onActiveDeviceChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-0', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackToggle"], {
                size: "lg",
                variant: "primary",
                source: source,
                pressed: pressed,
                pending: pending,
                disabled: disabled,
                onPressedChange: onPressedChange,
                className: "peer/track group/track size-11 h-11 has-[.audiovisualizer]:w-auto has-[~_button]:rounded-r-none has-[~_button]:pr-2 has-[~_button]:pl-3",
                children: audioTrackRef && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__BarVisualizer$3e$__["BarVisualizer"], {
                    barCount: 3,
                    options: {
                        minHeight: 5
                    },
                    trackRef: audioTrackRef,
                    className: "audiovisualizer flex h-6 w-auto items-center justify-center gap-0.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
                            'h-full w-0.5 origin-center rounded-2xl',
                            'group-data-[state=on]/track:bg-foreground group-data-[state=off]/track:bg-destructive',
                            'data-lk-muted:bg-muted'
                        ])
                    }, void 0, false, {
                        fileName: "[project]/components/livekit/agent-control-bar/track-selector.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/livekit/agent-control-bar/track-selector.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/livekit/agent-control-bar/track-selector.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "bg-border peer-data-[state=off]/track:bg-destructive/20 relative z-10 -mr-px hidden h-4 w-px border-none has-[~_button]:block"
            }, void 0, false, {
                fileName: "[project]/components/livekit/agent-control-bar/track-selector.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$device$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackDeviceSelect"], {
                size: "sm",
                kind: kind,
                requestPermissions: false,
                onMediaDeviceError: onMediaDeviceError,
                onActiveDeviceChange: onActiveDeviceChange,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])([
                    'rounded-l-none pl-2',
                    'peer-data-[state=off]/track:text-destructive',
                    'hover:text-foreground focus:text-foreground',
                    'hover:peer-data-[state=off]/track:text-foreground',
                    'focus:peer-data-[state=off]/track:text-destructive'
                ])
            }, void 0, false, {
                fileName: "[project]/components/livekit/agent-control-bar/track-selector.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/livekit/agent-control-bar/track-selector.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = TrackSelector;
var _c;
__turbopack_context__.k.register(_c, "TrackSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/agent-control-bar/agent-control-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentControlBar",
    ()=>AgentControlBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export w as useChat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__M__as__useRemoteParticipants$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export M as useRemoteParticipants>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ChatText$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/ChatText.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PhoneDisconnect$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/PhoneDisconnect.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/session-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$chat$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/agent-control-bar/chat-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$input$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/agent-control-bar/hooks/use-input-controls.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$publish$2d$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/agent-control-bar/hooks/use-publish-permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/agent-control-bar/track-selector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
;
;
function AgentControlBar(param) {
    let { controls, saveUserChoices = true, className, onDisconnect, onLeave, onDeviceError, onChatOpenChange, ...props } = param;
    _s();
    const { send } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__["useChat"])();
    const participants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__M__as__useRemoteParticipants$3e$__["useRemoteParticipants"])();
    const [chatOpen, setChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const publishPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$publish$2d$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishPermissions"])();
    const { isSessionActive, endSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { micTrackRef, cameraToggle, microphoneToggle, handleAudioDeviceChange, handleVideoDeviceChange, handleMicrophoneDeviceSelectError, handleCameraDeviceSelectError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$input$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInputControls"])({
        onDeviceError,
        saveUserChoices
    });
    const handleSendMessage = async (message)=>{
        await send(message);
    };
    const handleToggleTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AgentControlBar.useCallback[handleToggleTranscript]": (open)=>{
            setChatOpen(open);
            onChatOpenChange === null || onChatOpenChange === void 0 ? void 0 : onChatOpenChange(open);
        }
    }["AgentControlBar.useCallback[handleToggleTranscript]"], [
        onChatOpenChange,
        setChatOpen
    ]);
    const handleDisconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AgentControlBar.useCallback[handleDisconnect]": async ()=>{
            // If onLeave is provided, it should show the confirmation dialog
            // Otherwise, end the session directly
            if (onLeave) {
                onLeave();
            } else {
                endSession();
                onDisconnect === null || onDisconnect === void 0 ? void 0 : onDisconnect();
            }
        }
    }["AgentControlBar.useCallback[handleDisconnect]"], [
        endSession,
        onDisconnect,
        onLeave
    ]);
    var _controls_leave, _controls_microphone, _controls_camera, _controls_chat;
    const visibleControls = {
        leave: (_controls_leave = controls === null || controls === void 0 ? void 0 : controls.leave) !== null && _controls_leave !== void 0 ? _controls_leave : true,
        microphone: (_controls_microphone = controls === null || controls === void 0 ? void 0 : controls.microphone) !== null && _controls_microphone !== void 0 ? _controls_microphone : publishPermissions.microphone,
        camera: (_controls_camera = controls === null || controls === void 0 ? void 0 : controls.camera) !== null && _controls_camera !== void 0 ? _controls_camera : publishPermissions.camera,
        chat: (_controls_chat = controls === null || controls === void 0 ? void 0 : controls.chat) !== null && _controls_chat !== void 0 ? _controls_chat : publishPermissions.data
    };
    const isAgentAvailable = participants.some((p)=>p.isAgent);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-label": "Voice assistant controls",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-white border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] mx-auto flex max-w-fit flex-col rounded-[28px] border p-4', className),
        ...props,
        children: [
            visibleControls.chat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$chat$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInput"], {
                chatOpen: chatOpen,
                isAgentAvailable: isAgentAvailable,
                onSend: handleSendMessage
            }, void 0, false, {
                fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            visibleControls.microphone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackSelector"], {
                                kind: "audioinput",
                                "aria-label": "Toggle microphone",
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                                pressed: microphoneToggle.enabled,
                                disabled: microphoneToggle.pending,
                                audioTrackRef: micTrackRef,
                                onPressedChange: microphoneToggle.toggle,
                                onMediaDeviceError: handleMicrophoneDeviceSelectError,
                                onActiveDeviceChange: handleAudioDeviceChange
                            }, void 0, false, {
                                fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            visibleControls.camera && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$track$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackSelector"], {
                                kind: "videoinput",
                                "aria-label": "Toggle camera",
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
                                pressed: cameraToggle.enabled,
                                pending: cameraToggle.pending,
                                disabled: cameraToggle.pending,
                                onPressedChange: cameraToggle.toggle,
                                onMediaDeviceError: handleCameraDeviceSelectError,
                                onActiveDeviceChange: handleVideoDeviceChange
                            }, void 0, false, {
                                fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            visibleControls.chat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                size: "lg",
                                variant: "secondary",
                                "aria-label": "Toggle transcript",
                                pressed: chatOpen,
                                onPressedChange: handleToggleTranscript,
                                className: "size-11",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ChatText$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatTextIcon"], {
                                    weight: "bold",
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    visibleControls.leave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "destructive",
                        size: "lg",
                        onClick: handleDisconnect,
                        disabled: !isSessionActive,
                        className: "h-11 font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PhoneDisconnect$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneDisconnectIcon"], {
                                weight: "bold",
                                className: "size-5"
                            }, void 0, false, {
                                fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:inline",
                                children: "End Call"
                            }, void 0, false, {
                                fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline md:hidden",
                                children: "End"
                            }, void 0, false, {
                                fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/livekit/agent-control-bar/agent-control-bar.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(AgentControlBar, "bERAvIc4ap7hloIo+r1wtJMN5H8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__M__as__useRemoteParticipants$3e$__["useRemoteParticipants"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$publish$2d$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublishPermissions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$hooks$2f$use$2d$input$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInputControls"]
    ];
});
_c = AgentControlBar;
var _c;
__turbopack_context__.k.register(_c, "AgentControlBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/confirm-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmDialog",
    ()=>ConfirmDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$X$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/X.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PhoneDisconnect$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/PhoneDisconnect.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ConfirmDialog(param) {
    let { open, onOpenChange, onConfirm, title = 'End Call', description = 'Are you sure you want to end the call?', confirmText = 'End Call', cancelText = 'Cancel' } = param;
    _s();
    const handleConfirm = ()=>{
        onConfirm();
        onOpenChange(false);
    };
    const handleCancel = ()=>{
        onOpenChange(false);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ConfirmDialog.useEffect": ()=>{
            if (open) {
                // Prevent body scroll when dialog is open
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "ConfirmDialog.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["ConfirmDialog.useEffect"];
        }
    }["ConfirmDialog.useEffect"], [
        open
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ConfirmDialog.useEffect": ()=>{
            const handleEscape = {
                "ConfirmDialog.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape' && open) {
                        onOpenChange(false);
                    }
                }
            }["ConfirmDialog.useEffect.handleEscape"];
            if (open) {
                document.addEventListener('keydown', handleEscape);
            }
            return ({
                "ConfirmDialog.useEffect": ()=>{
                    document.removeEventListener('keydown', handleEscape);
                }
            })["ConfirmDialog.useEffect"];
        }
    }["ConfirmDialog.useEffect"], [
        open,
        onOpenChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[9999] flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "fixed inset-0 bg-black/60 backdrop-blur-md",
                    onClick: handleCancel
                }, void 0, false, {
                    fileName: "[project]/components/livekit/confirm-dialog.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none relative flex w-full items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.2,
                            ease: [
                                0.4,
                                0,
                                0.2,
                                1
                            ]
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('pointer-events-auto relative w-full max-w-md', 'bg-white border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] rounded-[28px] border', 'p-6'),
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCancel,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute top-4 right-4 rounded-full p-1.5', 'hover:bg-slate-100 transition-colors', 'focus-visible:ring-[#1A73E8]/20 focus-visible:ring-2 focus-visible:outline-none'),
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$X$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XIcon"], {
                                    weight: "bold",
                                    className: "text-slate-500 size-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pr-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-12 w-12 rounded-full bg-red-50 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PhoneDisconnect$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneDisconnectIcon"], {
                                                        className: "h-6 w-6 text-red-600",
                                                        weight: "regular"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 pt-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-semibold text-slate-900 mb-2",
                                                        children: title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base text-slate-600 leading-relaxed",
                                                        children: description
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-3 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCancel,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full px-6 py-2.5 text-sm font-medium transition-all', 'border border-slate-200 bg-white text-slate-700', 'hover:bg-slate-50 hover:border-slate-300', 'focus-visible:ring-2 focus-visible:ring-[#1A73E8]/20 focus-visible:outline-none'),
                                                children: cancelText
                                            }, void 0, false, {
                                                fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleConfirm,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full px-6 py-2.5 text-sm font-medium transition-all', 'bg-red-600 text-white', 'hover:bg-red-700 shadow-sm hover:shadow-md', 'focus-visible:ring-2 focus-visible:ring-red-600/20 focus-visible:outline-none'),
                                                children: confirmText
                                            }, void 0, false, {
                                                fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/livekit/confirm-dialog.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/livekit/confirm-dialog.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/livekit/confirm-dialog.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/livekit/confirm-dialog.tsx",
            lineNumber: 69,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/livekit/confirm-dialog.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(ConfirmDialog, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = ConfirmDialog;
var _c;
__turbopack_context__.k.register(_c, "ConfirmDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useConnectionTimout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectionTimeout",
    ()=>useConnectionTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/contexts-D4V9wQRc.mjs [app-client] (ecmascript) <export f as useRoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export X as useVoiceAssistant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$alert$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/alert-toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function isAgentAvailable(agentState) {
    return agentState == 'listening' || agentState == 'thinking' || agentState == 'speaking';
}
function useConnectionTimeout() {
    let timout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 20_000;
    _s();
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"])();
    const { state: agentState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__["useVoiceAssistant"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConnectionTimeout.useEffect": ()=>{
            const timeout = setTimeout({
                "useConnectionTimeout.useEffect.timeout": ()=>{
                    if (!isAgentAvailable(agentState)) {
                        const reason = agentState === 'connecting' ? 'Agent did not join the room. ' : 'Agent connected but did not complete initializing. ';
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$alert$2d$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toastAlert"])({
                            title: 'Session ended',
                            description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-full",
                                children: [
                                    reason,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "https://docs.livekit.io/agents/start/voice-ai/",
                                        className: "whitespace-nowrap underline",
                                        children: "See quickstart guide"
                                    }, void 0, false, {
                                        fileName: "[project]/hooks/useConnectionTimout.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hooks/useConnectionTimout.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        });
                        room.disconnect();
                    }
                }
            }["useConnectionTimeout.useEffect.timeout"], timout);
            return ({
                "useConnectionTimeout.useEffect": ()=>clearTimeout(timeout)
            })["useConnectionTimeout.useEffect"];
        }
    }["useConnectionTimeout.useEffect"], [
        agentState,
        room,
        timout
    ]);
}
_s(useConnectionTimeout, "eJmT38z75fHyHX+lh5QZJ24F/uE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__["useVoiceAssistant"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useDebug.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebugMode",
    ()=>useDebugMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/contexts-D4V9wQRc.mjs [app-client] (ecmascript) <export f as useRoomContext>");
var _s = __turbopack_context__.k.signature();
;
;
;
const useDebugMode = function() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"])();
    var _options_logLevel;
    const logLevel = (_options_logLevel = options.logLevel) !== null && _options_logLevel !== void 0 ? _options_logLevel : 'debug';
    var _options_enabled;
    const enabled = (_options_enabled = options.enabled) !== null && _options_enabled !== void 0 ? _options_enabled : true;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useDebugMode.useEffect": ()=>{
            if (!enabled) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogLevel"])('silent');
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogLevel"])(logLevel !== null && logLevel !== void 0 ? logLevel : 'debug');
            // @ts-expect-error this is a global variable
            window.__lk_room = room;
            return ({
                "useDebugMode.useEffect": ()=>{
                    // @ts-expect-error this is a global variable
                    window.__lk_room = undefined;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogLevel"])('silent');
                }
            })["useDebugMode.useEffect"];
        }
    }["useDebugMode.useEffect"], [
        room,
        enabled,
        logLevel
    ]);
};
_s(useDebugMode, "2NV+dXnyamrPK9LXoGRflc+bZfU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useTranscript.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranscriptLogger",
    ()=>useTranscriptLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a0__as__useTranscriptions$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export a0 as useTranscriptions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export w as useChat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/contexts-D4V9wQRc.mjs [app-client] (ecmascript) <export f as useRoomContext>");
var _s = __turbopack_context__.k.signature();
;
;
;
function useTranscriptLogger(room, isSessionActive) {
    _s();
    const transcriptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a0__as__useTranscriptions$3e$__["useTranscriptions"])();
    const chat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__["useChat"])();
    const roomContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"])();
    const activeRoom = room || roomContext;
    // Use Map to track transcriptions by stream ID (for merging chunks)
    const transcriptMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const processedChatIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const hasLoggedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Process transcriptions - these come in incremental chunks that need merging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranscriptLogger.useEffect": ()=>{
            if (!isSessionActive || !activeRoom || transcriptions.length === 0) {
                return;
            }
            transcriptions.forEach({
                "useTranscriptLogger.useEffect": (transcription)=>{
                    var _transcription_streamInfo, _transcription_participantInfo, _transcription_streamInfo1;
                    // Use streamInfo.id as the key to merge chunks from the same utterance
                    const streamId = ((_transcription_streamInfo = transcription.streamInfo) === null || _transcription_streamInfo === void 0 ? void 0 : _transcription_streamInfo.id) || "stream_".concat(Date.now(), "_").concat(Math.random());
                    const isLocal = ((_transcription_participantInfo = transcription.participantInfo) === null || _transcription_participantInfo === void 0 ? void 0 : _transcription_participantInfo.identity) === activeRoom.localParticipant.identity;
                    const speaker = isLocal ? 'user' : 'agent';
                    const text = transcription.text || '';
                    const timestamp = ((_transcription_streamInfo1 = transcription.streamInfo) === null || _transcription_streamInfo1 === void 0 ? void 0 : _transcription_streamInfo1.timestamp) || Date.now();
                    // Skip empty transcriptions
                    if (!text || text.trim().length === 0) {
                        return;
                    }
                    const existingEntry = transcriptMapRef.current.get(streamId);
                    if (existingEntry) {
                        // Update existing entry
                        // LiveKit sends transcriptions in chunks:
                        // - Interim chunks: newer text often extends or replaces previous text
                        // - Final chunks: complete finalized text
                        // Strategy: Always take the longer or more complete version
                        // If new text is significantly longer, it's likely a more complete version
                        // If new text is similar length but different, it might be a corrected final version
                        const shouldUpdate = text.length > existingEntry.message.length || text.length >= existingEntry.message.length * 0.9 && text !== existingEntry.message; // Similar length but different (likely final/corrected)
                        if (shouldUpdate) {
                            // For interim transcriptions, the new text often contains the complete message so far
                            // For final transcriptions, it's the complete finalized text
                            const previousLength = existingEntry.message.length;
                            existingEntry.message = text;
                            existingEntry.timestamp = timestamp; // Update to latest timestamp
                            console.log('[useTranscriptLogger] Updated transcription chunk', {
                                streamId,
                                speaker,
                                previousLength,
                                newLength: text.length,
                                lengthIncrease: text.length - previousLength,
                                timestamp: new Date(timestamp).toISOString()
                            });
                        }
                    } else {
                        // New stream - create entry
                        const entry = {
                            id: streamId,
                            timestamp,
                            speaker,
                            message: text
                        };
                        transcriptMapRef.current.set(streamId, entry);
                        console.log('[useTranscriptLogger] New transcription stream started', {
                            streamId,
                            speaker,
                            messageLength: text.length,
                            messagePreview: text.substring(0, 50),
                            timestamp: new Date(timestamp).toISOString()
                        });
                    }
                }
            }["useTranscriptLogger.useEffect"]);
        }
    }["useTranscriptLogger.useEffect"], [
        transcriptions,
        activeRoom,
        isSessionActive
    ]);
    // Process chat messages - these are complete messages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranscriptLogger.useEffect": ()=>{
            if (!isSessionActive || !activeRoom || !chat.chatMessages || chat.chatMessages.length === 0) {
                return;
            }
            chat.chatMessages.forEach({
                "useTranscriptLogger.useEffect": (msg)=>{
                    var _msg_from;
                    // Skip if we've already processed this chat message
                    if (processedChatIdsRef.current.has(msg.id)) {
                        return;
                    }
                    const isLocal = (_msg_from = msg.from) === null || _msg_from === void 0 ? void 0 : _msg_from.isLocal;
                    const speaker = isLocal ? 'user' : 'agent';
                    const messageText = msg.message || '';
                    if (!messageText || messageText.trim().length === 0) {
                        return;
                    }
                    // Chat messages are complete, use unique ID
                    const chatId = "chat_".concat(msg.id);
                    const entry = {
                        id: chatId,
                        timestamp: msg.timestamp,
                        speaker,
                        message: messageText
                    };
                    transcriptMapRef.current.set(chatId, entry);
                    processedChatIdsRef.current.add(msg.id);
                    console.log('[useTranscriptLogger] Chat message collected', {
                        id: msg.id,
                        speaker,
                        messageLength: messageText.length,
                        messagePreview: messageText.substring(0, 50),
                        timestamp: new Date(msg.timestamp).toISOString()
                    });
                }
            }["useTranscriptLogger.useEffect"]);
        }
    }["useTranscriptLogger.useEffect"], [
        chat.chatMessages,
        activeRoom,
        isSessionActive
    ]);
    const logTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTranscriptLogger.useCallback[logTranscript]": async ()=>{
            // Prevent duplicate logging
            if (hasLoggedRef.current) {
                console.log('[useTranscriptLogger] Transcript already logged, skipping upload');
                return {
                    status: 'skipped',
                    transcript: []
                };
            }
            // Before logging, do one final update from current transcriptions
            // to ensure we have the latest state
            if (transcriptions && transcriptions.length > 0 && activeRoom) {
                transcriptions.forEach({
                    "useTranscriptLogger.useCallback[logTranscript]": (transcription)=>{
                        var _transcription_streamInfo, _transcription_streamInfo1;
                        const streamId = ((_transcription_streamInfo = transcription.streamInfo) === null || _transcription_streamInfo === void 0 ? void 0 : _transcription_streamInfo.id) || "stream_".concat(Date.now(), "_").concat(Math.random());
                        const text = transcription.text || '';
                        const timestamp = ((_transcription_streamInfo1 = transcription.streamInfo) === null || _transcription_streamInfo1 === void 0 ? void 0 : _transcription_streamInfo1.timestamp) || Date.now();
                        if (text && text.trim().length > 0) {
                            const existingEntry = transcriptMapRef.current.get(streamId);
                            if (existingEntry) {
                                // Update with latest text if it's different/longer
                                if (text.length >= existingEntry.message.length) {
                                    existingEntry.message = text;
                                    existingEntry.timestamp = timestamp;
                                }
                            } else {
                                var _transcription_participantInfo;
                                // Create new entry for any missed transcriptions
                                const isLocal = ((_transcription_participantInfo = transcription.participantInfo) === null || _transcription_participantInfo === void 0 ? void 0 : _transcription_participantInfo.identity) === activeRoom.localParticipant.identity;
                                const speaker = isLocal ? 'user' : 'agent';
                                transcriptMapRef.current.set(streamId, {
                                    id: streamId,
                                    timestamp,
                                    speaker,
                                    message: text
                                });
                            }
                        }
                    }
                }["useTranscriptLogger.useCallback[logTranscript]"]);
            }
            // Convert map to array and sort by timestamp
            const transcriptArray = Array.from(transcriptMapRef.current.values());
            const sortedTranscript = transcriptArray.sort({
                "useTranscriptLogger.useCallback[logTranscript].sortedTranscript": (a, b)=>a.timestamp - b.timestamp
            }["useTranscriptLogger.useCallback[logTranscript].sortedTranscript"]);
            if (sortedTranscript.length === 0) {
                console.warn('[useTranscriptLogger] No transcript data collected, skipping upload');
                hasLoggedRef.current = true;
                return {
                    status: 'empty',
                    transcript: sortedTranscript
                };
            }
            var _activeRoom_name;
            const roomName = (_activeRoom_name = activeRoom === null || activeRoom === void 0 ? void 0 : activeRoom.name) !== null && _activeRoom_name !== void 0 ? _activeRoom_name : '';
            let jobId;
            let userId = undefined;
            if (roomName.includes('_')) {
                const [parsedJobId, parsedUserId] = roomName.split('_', 2);
                jobId = parsedJobId;
                userId = parsedUserId && parsedUserId !== 'null' ? parsedUserId : null;
            }
            if (!jobId) {
                console.error('[useTranscriptLogger] Unable to determine job ID from room name', {
                    roomName
                });
                hasLoggedRef.current = true;
                return {
                    status: 'missing_job',
                    transcript: sortedTranscript
                };
            }
            console.log('[useTranscriptLogger] Uploading transcript', {
                jobId,
                userId,
                messageCount: sortedTranscript.length
            });
            try {
                var _payload_transcript;
                const response = await fetch('/api/transcript', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        jobId,
                        userId,
                        transcript: sortedTranscript
                    })
                });
                if (!response.ok) {
                    const error = await response.json().catch({
                        "useTranscriptLogger.useCallback[logTranscript]": ()=>({})
                    }["useTranscriptLogger.useCallback[logTranscript]"]);
                    console.error('[useTranscriptLogger] Failed to upload transcript', {
                        status: response.status,
                        statusText: response.statusText,
                        error
                    });
                    hasLoggedRef.current = true;
                    return {
                        status: 'error',
                        transcript: sortedTranscript,
                        error
                    };
                }
                const payload = await response.json();
                console.log('[useTranscriptLogger] Transcript uploaded successfully', {
                    jobId,
                    userId,
                    transcriptId: payload === null || payload === void 0 ? void 0 : (_payload_transcript = payload.transcript) === null || _payload_transcript === void 0 ? void 0 : _payload_transcript.id
                });
                hasLoggedRef.current = true;
                return {
                    status: 'saved',
                    transcript: sortedTranscript,
                    response: payload
                };
            } catch (error) {
                console.error('[useTranscriptLogger] Unexpected error while uploading transcript', {
                    error: error instanceof Error ? error.message : error
                });
                hasLoggedRef.current = true;
                return {
                    status: 'error',
                    transcript: sortedTranscript,
                    error
                };
            }
        }
    }["useTranscriptLogger.useCallback[logTranscript]"], [
        activeRoom,
        transcriptions
    ]);
    // Log transcript when call ends
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranscriptLogger.useEffect": ()=>{
            if (!activeRoom) {
                return;
            }
            const handleDisconnected = {
                "useTranscriptLogger.useEffect.handleDisconnected": ()=>{
                    console.log('[useTranscriptLogger] Room disconnected, waiting for final transcriptions...');
                    // Wait a bit longer to ensure all final transcriptions are received
                    // Final transcriptions might arrive slightly after disconnect
                    setTimeout({
                        "useTranscriptLogger.useEffect.handleDisconnected": ()=>{
                            console.log('[useTranscriptLogger] Logging transcript after disconnect delay');
                            logTranscript().catch({
                                "useTranscriptLogger.useEffect.handleDisconnected": (error)=>{
                                    console.error('[useTranscriptLogger] Error logging transcript on disconnect', {
                                        error: error instanceof Error ? error.message : error
                                    });
                                }
                            }["useTranscriptLogger.useEffect.handleDisconnected"]);
                        }
                    }["useTranscriptLogger.useEffect.handleDisconnected"], 1000);
                }
            }["useTranscriptLogger.useEffect.handleDisconnected"];
            activeRoom.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, handleDisconnected);
            return ({
                "useTranscriptLogger.useEffect": ()=>{
                    activeRoom.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, handleDisconnected);
                }
            })["useTranscriptLogger.useEffect"];
        }
    }["useTranscriptLogger.useEffect"], [
        activeRoom,
        logTranscript
    ]);
    const resetTranscript = ()=>{
        transcriptMapRef.current.clear();
        processedChatIdsRef.current.clear();
        hasLoggedRef.current = false;
        console.log('[useTranscriptLogger] Transcript reset');
    };
    // Reset when session starts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranscriptLogger.useEffect": ()=>{
            if (isSessionActive) {
                hasLoggedRef.current = false;
                console.log('[useTranscriptLogger] Session active, transcript logging enabled', {
                    currentTranscriptEntries: transcriptMapRef.current.size
                });
            }
        }
    }["useTranscriptLogger.useEffect"], [
        isSessionActive
    ]);
    // Expose logTranscript so it can be called manually (e.g., when endSession is called)
    return {
        logTranscript,
        resetTranscript,
        transcript: Array.from(transcriptMapRef.current.values())
    };
}
_s(useTranscriptLogger, "8lWxxG/UAhTDIjfIMDW2Dy1GpzA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a0__as__useTranscriptions$3e$__["useTranscriptions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__w__as__useChat$3e$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useVideoRecording.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVideoRecording",
    ()=>useVideoRecording
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useVideoRecording(param) {
    let { enabled, onRecordingReady } = param;
    _s();
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordedBlob, setRecordedBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const hasStartedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const stopPromiseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mimeTypeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('video/webm');
    const dataRequestTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /**
   * Get user media streams (audio and video) and combine them
   */ const getUserMediaStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVideoRecording.useCallback[getUserMediaStream]": async ()=>{
            try {
                var _stream_getAudioTracks_, _stream_getVideoTracks_;
                console.log('[useVideoRecording] Requesting user media streams');
                // Request both audio and video from user's device
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true
                    },
                    video: {
                        width: {
                            ideal: 1280
                        },
                        height: {
                            ideal: 720
                        },
                        frameRate: {
                            ideal: 30
                        }
                    }
                });
                console.log('[useVideoRecording] User media streams obtained', {
                    audioTracks: stream.getAudioTracks().length,
                    videoTracks: stream.getVideoTracks().length,
                    audioTrackLabel: (_stream_getAudioTracks_ = stream.getAudioTracks()[0]) === null || _stream_getAudioTracks_ === void 0 ? void 0 : _stream_getAudioTracks_.label,
                    videoTrackLabel: (_stream_getVideoTracks_ = stream.getVideoTracks()[0]) === null || _stream_getVideoTracks_ === void 0 ? void 0 : _stream_getVideoTracks_.label
                });
                return stream;
            } catch (err) {
                const error = err instanceof Error ? err : new Error('Failed to access user media');
                console.error('[useVideoRecording] Error accessing user media', error);
                setError(error);
                return null;
            }
        }
    }["useVideoRecording.useCallback[getUserMediaStream]"], []);
    /**
   * Start recording with MediaRecorder API
   */ const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVideoRecording.useCallback[startRecording]": async ()=>{
            if (hasStartedRef.current || isRecording || !enabled) {
                console.log('[useVideoRecording] Recording already started or disabled', {
                    hasStarted: hasStartedRef.current,
                    isRecording,
                    enabled
                });
                return;
            }
            try {
                // Get user media streams
                const stream = await getUserMediaStream();
                if (!stream) {
                    throw new Error('Failed to get user media streams');
                }
                // Check if we have both audio and video tracks
                const audioTracks = stream.getAudioTracks();
                const videoTracks = stream.getVideoTracks();
                if (audioTracks.length === 0 || videoTracks.length === 0) {
                    stream.getTracks().forEach({
                        "useVideoRecording.useCallback[startRecording]": (track)=>track.stop()
                    }["useVideoRecording.useCallback[startRecording]"]);
                    throw new Error('Missing audio or video tracks');
                }
                console.log('[useVideoRecording] Starting MediaRecorder with combined stream');
                // Determine the best supported MIME type
                const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus') ? 'video/webm;codecs=vp9,opus' : MediaRecorder.isTypeSupported('video/webm;codecs=vp8,opus') ? 'video/webm;codecs=vp8,opus' : MediaRecorder.isTypeSupported('video/webm') ? 'video/webm' : MediaRecorder.isTypeSupported('video/mp4') ? 'video/mp4' : 'video/webm';
                mimeTypeRef.current = mimeType;
                streamRef.current = stream;
                // Create MediaRecorder with the combined stream
                const mediaRecorder = new MediaRecorder(stream, {
                    mimeType,
                    videoBitsPerSecond: 2500000,
                    audioBitsPerSecond: 128000
                });
                chunksRef.current = [];
                // Helper function to create blob from chunks
                const createBlobFromChunks = {
                    "useVideoRecording.useCallback[startRecording].createBlobFromChunks": ()=>{
                        if (chunksRef.current.length === 0) {
                            console.error('[useVideoRecording] Cannot create blob: no data chunks available');
                            const error = new Error('No recording data available');
                            setError(error);
                            setIsRecording(false);
                            // Resolve with null if no data
                            if (stopPromiseRef.current) {
                                stopPromiseRef.current.resolve(null);
                                stopPromiseRef.current = null;
                            }
                            return;
                        }
                        // Create a copy of chunks before clearing
                        const chunksCopy = [
                            ...chunksRef.current
                        ];
                        const mimeType = mimeTypeRef.current;
                        const blob = new Blob(chunksCopy, {
                            type: mimeType
                        });
                        console.log('[useVideoRecording] Blob created', {
                            size: blob.size,
                            type: blob.type,
                            sizeMB: (blob.size / (1024 * 1024)).toFixed(2),
                            chunksCount: chunksCopy.length,
                            blobType: blob.type
                        });
                        // Verify blob is valid
                        if (blob.size === 0) {
                            console.error('[useVideoRecording] Created blob is empty!', {
                                chunksCount: chunksCopy.length,
                                mimeType
                            });
                        }
                        setRecordedBlob(blob);
                        setIsRecording(false);
                        onRecordingReady === null || onRecordingReady === void 0 ? void 0 : onRecordingReady(blob);
                        // Resolve the stop promise if it exists
                        if (stopPromiseRef.current) {
                            stopPromiseRef.current.resolve(blob);
                            stopPromiseRef.current = null;
                        }
                        // Clear chunks AFTER blob is created and set
                        chunksRef.current = [];
                        // Stop all tracks after blob is created
                        if (streamRef.current) {
                            streamRef.current.getTracks().forEach({
                                "useVideoRecording.useCallback[startRecording].createBlobFromChunks": (track)=>{
                                    track.stop();
                                    console.log('[useVideoRecording] Stopped track after blob creation', {
                                        kind: track.kind,
                                        label: track.label
                                    });
                                }
                            }["useVideoRecording.useCallback[startRecording].createBlobFromChunks"]);
                            streamRef.current = null;
                        }
                    }
                }["useVideoRecording.useCallback[startRecording].createBlobFromChunks"];
                mediaRecorder.ondataavailable = ({
                    "useVideoRecording.useCallback[startRecording]": (event)=>{
                        if (event.data && event.data.size > 0) {
                            chunksRef.current.push(event.data);
                            console.log('[useVideoRecording] Data chunk received', {
                                size: event.data.size,
                                totalChunks: chunksRef.current.length,
                                totalSize: chunksRef.current.reduce({
                                    "useVideoRecording.useCallback[startRecording]": (sum, chunk)=>sum + chunk.size
                                }["useVideoRecording.useCallback[startRecording]"], 0)
                            });
                        } else {
                            var _event_data;
                            console.warn('[useVideoRecording] Received empty or null data chunk', {
                                hasData: !!event.data,
                                dataSize: ((_event_data = event.data) === null || _event_data === void 0 ? void 0 : _event_data.size) || 0
                            });
                        }
                    }
                })["useVideoRecording.useCallback[startRecording]"];
                mediaRecorder.onstop = ({
                    "useVideoRecording.useCallback[startRecording]": ()=>{
                        console.log('[useVideoRecording] Recording stopped event fired', {
                            totalChunks: chunksRef.current.length,
                            mimeType: mimeTypeRef.current,
                            totalSize: chunksRef.current.reduce({
                                "useVideoRecording.useCallback[startRecording]": (sum, chunk)=>sum + chunk.size
                            }["useVideoRecording.useCallback[startRecording]"], 0)
                        });
                        // Clear any pending timeout
                        if (dataRequestTimeoutRef.current) {
                            clearTimeout(dataRequestTimeoutRef.current);
                            dataRequestTimeoutRef.current = null;
                        }
                        // Wait longer to ensure MediaRecorder has fully finalized the recording
                        // MediaRecorder needs time to finalize the container format and metadata
                        // This is critical for creating playable video files
                        setTimeout({
                            "useVideoRecording.useCallback[startRecording]": ()=>{
                                console.log('[useVideoRecording] Creating blob after stop event (delayed)', {
                                    totalChunks: chunksRef.current.length,
                                    totalSize: chunksRef.current.reduce({
                                        "useVideoRecording.useCallback[startRecording]": (sum, chunk)=>sum + chunk.size
                                    }["useVideoRecording.useCallback[startRecording]"], 0),
                                    mimeType: mimeTypeRef.current
                                });
                                // Ensure we have chunks before creating blob
                                if (chunksRef.current.length === 0) {
                                    console.error('[useVideoRecording] No data chunks available after stop event');
                                    createBlobFromChunks(); // Will handle error case
                                    return;
                                }
                                // Verify chunks are valid (not all empty)
                                const hasValidChunks = chunksRef.current.some({
                                    "useVideoRecording.useCallback[startRecording].hasValidChunks": (chunk)=>chunk.size > 0
                                }["useVideoRecording.useCallback[startRecording].hasValidChunks"]);
                                if (!hasValidChunks) {
                                    console.error('[useVideoRecording] All chunks are empty!');
                                    createBlobFromChunks(); // Will handle error case
                                    return;
                                }
                                createBlobFromChunks();
                            }
                        }["useVideoRecording.useCallback[startRecording]"], 500); // Wait 500ms to ensure MediaRecorder fully finalizes the recording
                    }
                })["useVideoRecording.useCallback[startRecording]"];
                mediaRecorder.onerror = ({
                    "useVideoRecording.useCallback[startRecording]": (event)=>{
                        const error = new Error('MediaRecorder error');
                        console.error('[useVideoRecording] MediaRecorder error', event);
                        setError(error);
                        setIsRecording(false);
                        hasStartedRef.current = false;
                        // Resolve stop promise with error
                        if (stopPromiseRef.current) {
                            stopPromiseRef.current.resolve(null);
                            stopPromiseRef.current = null;
                        }
                    }
                })["useVideoRecording.useCallback[startRecording]"];
                mediaRecorderRef.current = mediaRecorder;
                // Start recording, collecting data every second
                // Using 1000ms timeslice - data will be available periodically
                // Smaller timeslice = more frequent chunks but more overhead
                mediaRecorder.start(1000);
                setIsRecording(true);
                hasStartedRef.current = true;
                setError(null);
                // Verify recording state after a brief delay
                setTimeout({
                    "useVideoRecording.useCallback[startRecording]": ()=>{
                        if (mediaRecorderRef.current) {
                            console.log('[useVideoRecording] Recording state check after start', {
                                state: mediaRecorderRef.current.state,
                                mimeType: mediaRecorderRef.current.mimeType,
                                chunksCaptured: chunksRef.current.length
                            });
                            // If recording didn't actually start, set error
                            if (mediaRecorderRef.current.state === 'inactive') {
                                const error = new Error('MediaRecorder failed to start recording');
                                console.error('[useVideoRecording] MediaRecorder is inactive after start attempt', error);
                                setError(error);
                                setIsRecording(false);
                                hasStartedRef.current = false;
                                // Clean up stream
                                if (streamRef.current) {
                                    streamRef.current.getTracks().forEach({
                                        "useVideoRecording.useCallback[startRecording]": (track)=>track.stop()
                                    }["useVideoRecording.useCallback[startRecording]"]);
                                    streamRef.current = null;
                                }
                            }
                        }
                    }
                }["useVideoRecording.useCallback[startRecording]"], 500);
                console.log('[useVideoRecording] Recording started successfully', {
                    mimeType,
                    audioTracks: audioTracks.length,
                    videoTracks: videoTracks.length,
                    streamId: stream.id
                });
            } catch (err) {
                const error = err instanceof Error ? err : new Error('Failed to start recording');
                console.error('[useVideoRecording] Error starting recording', error);
                setError(error);
                setIsRecording(false);
                hasStartedRef.current = false;
                // Clean up stream if we got one
                if (streamRef.current) {
                    streamRef.current.getTracks().forEach({
                        "useVideoRecording.useCallback[startRecording]": (track)=>track.stop()
                    }["useVideoRecording.useCallback[startRecording]"]);
                    streamRef.current = null;
                }
            }
        }
    }["useVideoRecording.useCallback[startRecording]"], [
        enabled,
        isRecording,
        getUserMediaStream,
        onRecordingReady
    ]);
    /**
   * Stop recording and return the blob
   */ const stopRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVideoRecording.useCallback[stopRecording]": ()=>{
            return new Promise({
                "useVideoRecording.useCallback[stopRecording]": (resolve)=>{
                    var _mediaRecorderRef_current;
                    console.log('[useVideoRecording] stopRecording called', {
                        hasMediaRecorder: !!mediaRecorderRef.current,
                        recorderState: (_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.state,
                        isRecording,
                        hasStarted: hasStartedRef.current,
                        hasExistingBlob: !!recordedBlob,
                        existingBlobSize: recordedBlob === null || recordedBlob === void 0 ? void 0 : recordedBlob.size,
                        chunksCount: chunksRef.current.length
                    });
                    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                        var _stopPromiseRef_current;
                        console.log('[useVideoRecording] Stopping active MediaRecorder', {
                            state: mediaRecorderRef.current.state,
                            currentChunks: chunksRef.current.length,
                            totalSize: chunksRef.current.reduce({
                                "useVideoRecording.useCallback[stopRecording]": (sum, chunk)=>sum + chunk.size
                            }["useVideoRecording.useCallback[stopRecording]"], 0)
                        });
                        // Store the resolve function to be called in onstop handler
                        stopPromiseRef.current = {
                            resolve
                        };
                        // Request final data chunk BEFORE stopping
                        // This ensures we capture the last segment of recording
                        if (mediaRecorderRef.current.state === 'recording') {
                            console.log('[useVideoRecording] Requesting final data chunk before stopping');
                            try {
                                mediaRecorderRef.current.requestData();
                                // Give a moment for the data to be processed
                                dataRequestTimeoutRef.current = setTimeout({
                                    "useVideoRecording.useCallback[stopRecording]": ()=>{
                                        // Now stop the recorder
                                        stopMediaRecorder();
                                    }
                                }["useVideoRecording.useCallback[stopRecording]"], 100);
                            } catch (err) {
                                console.error('[useVideoRecording] Error requesting final data', err);
                                // If requestData fails, proceed to stop anyway
                                stopMediaRecorder();
                            }
                        } else {
                            // If already paused, just stop it
                            stopMediaRecorder();
                        }
                        function stopMediaRecorder() {
                            try {
                                var _mediaRecorderRef_current;
                                console.log('[useVideoRecording] Calling MediaRecorder.stop()', {
                                    state: (_mediaRecorderRef_current = mediaRecorderRef.current) === null || _mediaRecorderRef_current === void 0 ? void 0 : _mediaRecorderRef_current.state,
                                    chunksBeforeStop: chunksRef.current.length
                                });
                                if (mediaRecorderRef.current) {
                                    mediaRecorderRef.current.stop();
                                    console.log('[useVideoRecording] MediaRecorder.stop() called successfully');
                                }
                            } catch (err) {
                                console.error('[useVideoRecording] Error calling MediaRecorder.stop()', err);
                                // Even if stop fails, try to create blob from existing chunks
                                setTimeout({
                                    "useVideoRecording.useCallback[stopRecording].stopMediaRecorder": ()=>{
                                        if (stopPromiseRef.current) {
                                            let finalBlob = recordedBlob;
                                            if (!finalBlob && chunksRef.current.length > 0) {
                                                finalBlob = new Blob(chunksRef.current, {
                                                    type: mimeTypeRef.current
                                                });
                                                setRecordedBlob(finalBlob);
                                            }
                                            stopPromiseRef.current.resolve(finalBlob);
                                            stopPromiseRef.current = null;
                                        }
                                    }
                                }["useVideoRecording.useCallback[stopRecording].stopMediaRecorder"], 500);
                            }
                        }
                        // Add a timeout in case onstop doesn't fire (shouldn't happen, but safety)
                        const timeout = setTimeout({
                            "useVideoRecording.useCallback[stopRecording].timeout": ()=>{
                                if (stopPromiseRef.current && stopPromiseRef.current.resolve === resolve) {
                                    console.warn('[useVideoRecording] Stop promise timeout after 5s, resolving with existing blob or chunks', {
                                        hasExistingBlob: !!recordedBlob,
                                        chunksCount: chunksRef.current.length,
                                        totalSize: chunksRef.current.reduce({
                                            "useVideoRecording.useCallback[stopRecording].timeout": (sum, chunk)=>sum + chunk.size
                                        }["useVideoRecording.useCallback[stopRecording].timeout"], 0)
                                    });
                                    // Try to create blob from existing chunks if available
                                    let finalBlob = recordedBlob;
                                    if (!finalBlob && chunksRef.current.length > 0) {
                                        finalBlob = new Blob(chunksRef.current, {
                                            type: mimeTypeRef.current
                                        });
                                        console.log('[useVideoRecording] Created blob from chunks after timeout', {
                                            size: finalBlob.size,
                                            type: finalBlob.type
                                        });
                                        setRecordedBlob(finalBlob);
                                    }
                                    stopPromiseRef.current.resolve(finalBlob);
                                    stopPromiseRef.current = null;
                                }
                            }
                        }["useVideoRecording.useCallback[stopRecording].timeout"], 5000);
                        // Clear timeout when resolved
                        const originalResolve = (_stopPromiseRef_current = stopPromiseRef.current) === null || _stopPromiseRef_current === void 0 ? void 0 : _stopPromiseRef_current.resolve;
                        if (stopPromiseRef.current) {
                            stopPromiseRef.current.resolve = ({
                                "useVideoRecording.useCallback[stopRecording]": (blob)=>{
                                    clearTimeout(timeout);
                                    if (dataRequestTimeoutRef.current) {
                                        clearTimeout(dataRequestTimeoutRef.current);
                                        dataRequestTimeoutRef.current = null;
                                    }
                                    if (originalResolve) {
                                        originalResolve(blob);
                                    }
                                }
                            })["useVideoRecording.useCallback[stopRecording]"];
                        }
                    } else {
                        // No active recording, return existing blob if any
                        console.log('[useVideoRecording] No active MediaRecorder found', {
                            hasExistingBlob: !!recordedBlob,
                            existingBlobSize: recordedBlob === null || recordedBlob === void 0 ? void 0 : recordedBlob.size,
                            chunksCount: chunksRef.current.length
                        });
                        // If we have chunks but no blob, try to create one
                        if (!recordedBlob && chunksRef.current.length > 0) {
                            const blob = new Blob(chunksRef.current, {
                                type: mimeTypeRef.current
                            });
                            console.log('[useVideoRecording] Created blob from existing chunks', {
                                size: blob.size
                            });
                            setRecordedBlob(blob);
                            resolve(blob);
                        } else {
                            resolve(recordedBlob);
                        }
                    }
                    // Don't stop tracks immediately - wait for MediaRecorder to finish
                    // Tracks will be stopped in cleanup or after recording completes
                    // But if we're not waiting for MediaRecorder, stop tracks now
                    if (!mediaRecorderRef.current || mediaRecorderRef.current.state === 'inactive') {
                        // Stop tracks if MediaRecorder is already inactive
                        if (streamRef.current) {
                            streamRef.current.getTracks().forEach({
                                "useVideoRecording.useCallback[stopRecording]": (track)=>{
                                    track.stop();
                                    console.log('[useVideoRecording] Stopped track', {
                                        kind: track.kind,
                                        label: track.label
                                    });
                                }
                            }["useVideoRecording.useCallback[stopRecording]"]);
                            streamRef.current = null;
                        }
                    }
                    hasStartedRef.current = false;
                }
            }["useVideoRecording.useCallback[stopRecording]"]);
        }
    }["useVideoRecording.useCallback[stopRecording]"], [
        recordedBlob,
        isRecording,
        mimeTypeRef
    ]);
    // Auto-start recording when enabled changes to true
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVideoRecording.useEffect": ()=>{
            if (enabled && !hasStartedRef.current && !isRecording) {
                console.log('[useVideoRecording] Auto-starting recording (enabled changed)', {
                    enabled,
                    hasStarted: hasStartedRef.current,
                    isRecording
                });
                startRecording();
            } else if (!enabled && isRecording) {
                console.log('[useVideoRecording] Auto-stopping recording (enabled changed)');
                stopRecording();
            } else if (enabled && !isRecording && !hasStartedRef.current) {
                // Log if recording should be active but isn't
                console.warn('[useVideoRecording] Recording should be active but is not', {
                    enabled,
                    isRecording,
                    hasStarted: hasStartedRef.current,
                    error: error === null || error === void 0 ? void 0 : error.message
                });
            }
        }
    }["useVideoRecording.useEffect"], [
        enabled,
        isRecording,
        startRecording,
        stopRecording,
        error
    ]);
    // Cleanup on unmount - stop tracks after recording completes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVideoRecording.useEffect": ()=>{
            return ({
                "useVideoRecording.useEffect": ()=>{
                    console.log('[useVideoRecording] Cleanup: stopping recording and tracks');
                    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                        console.log('[useVideoRecording] Stopping MediaRecorder during cleanup');
                        mediaRecorderRef.current.stop();
                        // Give it a moment to process the stop
                        setTimeout({
                            "useVideoRecording.useEffect": ()=>{
                                if (streamRef.current) {
                                    streamRef.current.getTracks().forEach({
                                        "useVideoRecording.useEffect": (track)=>{
                                            track.stop();
                                            console.log('[useVideoRecording] Stopped track during cleanup', {
                                                kind: track.kind,
                                                label: track.label
                                            });
                                        }
                                    }["useVideoRecording.useEffect"]);
                                    streamRef.current = null;
                                }
                            }
                        }["useVideoRecording.useEffect"], 500);
                    } else {
                        // Stop tracks immediately if recorder is already inactive
                        if (streamRef.current) {
                            streamRef.current.getTracks().forEach({
                                "useVideoRecording.useEffect": (track)=>{
                                    track.stop();
                                    console.log('[useVideoRecording] Stopped track during cleanup', {
                                        kind: track.kind,
                                        label: track.label
                                    });
                                }
                            }["useVideoRecording.useEffect"]);
                            streamRef.current = null;
                        }
                    }
                    hasStartedRef.current = false;
                }
            })["useVideoRecording.useEffect"];
        }
    }["useVideoRecording.useEffect"], []);
    return {
        isRecording,
        recordedBlob,
        startRecording,
        stopRecording,
        error
    };
}
_s(useVideoRecording, "hl7KeIPOAtDLa70GmxhZRZ/TauQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/upload-video.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility functions for uploading video directly to Google Cloud Storage from the frontend
 */ __turbopack_context__.s([
    "uploadVideoToGCS",
    ()=>uploadVideoToGCS,
    "uploadVideoToSupabase",
    ()=>uploadVideoToSupabase
]);
/**
 * Gets file extension from filename or MIME type
 */ function getFileExtension(fileName, mimeType) {
    // Try to get extension from filename
    const fileNameMatch = fileName.match(/\.([a-zA-Z0-9]+)$/);
    if (fileNameMatch) {
        return fileNameMatch[1].toLowerCase();
    }
    // Fallback to MIME type mapping
    const mimeToExt = {
        'video/webm': 'webm',
        'video/mp4': 'mp4',
        'video/quicktime': 'mov',
        'video/x-msvideo': 'avi',
        'video/x-matroska': 'mkv'
    };
    const baseMimeType = (mimeType === null || mimeType === void 0 ? void 0 : mimeType.split(';')[0]) || 'video/webm';
    return mimeToExt[baseMimeType] || 'webm';
}
/**
 * Gets normalized MIME type (strips codec information)
 */ function getNormalizedMimeType(mimeType) {
    const baseMimeType = (mimeType === null || mimeType === void 0 ? void 0 : mimeType.split(';')[0]) || 'video/webm';
    const supportedMimeTypes = {
        'video/webm': 'video/webm',
        'video/mp4': 'video/mp4',
        'video/quicktime': 'video/mp4',
        'video/x-msvideo': 'video/x-msvideo',
        'video/x-matroska': 'video/x-matroska'
    };
    return supportedMimeTypes[baseMimeType] || 'video/webm';
}
async function uploadVideoToGCS(param) {
    let { videoBlob, sessionId, onProgress } = param;
    console.log('[uploadVideoToGCS] Starting video upload', {
        fileName: "interview-".concat(sessionId, ".webm"),
        fileSize: videoBlob.size,
        fileType: videoBlob.type,
        sessionId
    });
    // Step 1: Get signed upload URL from server
    const urlResponse = await fetch('/api/get-gcs-upload-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sessionId,
            fileName: "interview-".concat(sessionId, ".webm"),
            contentType: videoBlob.type,
            fileSize: videoBlob.size
        })
    });
    if (!urlResponse.ok) {
        const errorData = await urlResponse.json().catch(()=>({}));
        throw new Error("Failed to get upload URL: ".concat(errorData.error || urlResponse.statusText));
    }
    const { uploadUrl, filePath, publicUrl, contentType: serverContentType } = await urlResponse.json();
    console.log('[uploadVideoToGCS] Got signed upload URL', {
        filePath,
        hasUploadUrl: !!uploadUrl,
        serverContentType,
        clientContentType: getNormalizedMimeType(videoBlob.type)
    });
    // Use the content type from the server to ensure exact match
    const uploadContentType = serverContentType || getNormalizedMimeType(videoBlob.type);
    // Step 2: Upload directly to GCS using signed URL
    const fileSizeMB = videoBlob.size / (1024 * 1024);
    const useChunkedUpload = fileSizeMB > 50; // Use chunked upload for files > 50MB
    if (useChunkedUpload) {
        console.log('[uploadVideoToGCS] Using chunked upload for large file', {
            fileSizeMB: fileSizeMB.toFixed(2)
        });
        return await uploadVideoChunked(videoBlob, uploadUrl, filePath, publicUrl, uploadContentType, onProgress);
    }
    // Direct upload for smaller files
    try {
        console.log('[uploadVideoToGCS] Attempting direct upload', {
            fileSizeMB: fileSizeMB.toFixed(2)
        });
        // Use the content type from the server to ensure exact match with signed URL
        const response = await fetch(uploadUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': uploadContentType
            },
            body: videoBlob
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error("Upload failed: ".concat(response.statusText, " - ").concat(errorText));
        }
        console.log('[uploadVideoToGCS] Video uploaded successfully via direct upload', {
            filePath,
            publicUrl,
            fileSize: videoBlob.size
        });
        onProgress === null || onProgress === void 0 ? void 0 : onProgress(100);
        return {
            success: true,
            file_path: filePath,
            file_url: publicUrl,
            file_size: videoBlob.size
        };
    } catch (error) {
        // Fall back to chunked upload on any error
        console.warn('[uploadVideoToGCS] Direct upload failed, falling back to chunked upload', {
            error: error instanceof Error ? error.message : String(error)
        });
        return await uploadVideoChunked(videoBlob, uploadUrl, filePath, publicUrl, uploadContentType, onProgress);
    }
}
/**
 * Uploads video using XMLHttpRequest for progress tracking
 * GCS signed URLs support PUT requests with the full file
 */ async function uploadVideoChunked(videoBlob, uploadUrl, filePath, publicUrl, contentType, onProgress) {
    const totalSize = videoBlob.size;
    console.log('[uploadVideoChunked] Starting upload with progress tracking', {
        filePath,
        totalSize,
        totalSizeMB: (totalSize / 1024 / 1024).toFixed(2) + ' MB'
    });
    // Use XMLHttpRequest for better progress tracking
    // GCS signed URLs support PUT with the full file
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', (event)=>{
            if (event.lengthComputable) {
                const progress = event.loaded / event.total * 100;
                onProgress === null || onProgress === void 0 ? void 0 : onProgress(progress);
                console.log('[uploadVideoChunked] Upload progress', {
                    loaded: event.loaded,
                    total: event.total,
                    progress: "".concat(progress.toFixed(1), "%")
                });
            }
        });
        xhr.addEventListener('load', ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('[uploadVideoChunked] Video uploaded successfully', {
                    filePath,
                    publicUrl,
                    fileSize: videoBlob.size
                });
                resolve({
                    success: true,
                    file_path: filePath,
                    file_url: publicUrl,
                    file_size: videoBlob.size
                });
            } else {
                const errorText = xhr.responseText || xhr.statusText;
                reject(new Error("Upload failed with status ".concat(xhr.status, ": ").concat(errorText)));
            }
        });
        xhr.addEventListener('error', ()=>{
            reject(new Error('Upload failed due to network error'));
        });
        xhr.addEventListener('abort', ()=>{
            reject(new Error('Upload was aborted'));
        });
        // Use the content type from the server to ensure exact match with signed URL
        xhr.open('PUT', uploadUrl);
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.send(videoBlob);
    });
}
const uploadVideoToSupabase = uploadVideoToGCS;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app/session-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fade",
    ()=>Fade,
    "SessionView",
    ()=>SessionView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/contexts-D4V9wQRc.mjs [app-client] (ecmascript) <export f as useRoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-hQJmeINB.mjs [app-client] (ecmascript) <export X as useVoiceAssistant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/loading-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/session-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$tile$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/tile-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$agent$2d$control$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/agent-control-bar/agent-control-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$confirm$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/confirm-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConnectionTimout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useConnectionTimout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDebug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDebug.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranscript$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useTranscript.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVideoRecording$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useVideoRecording.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$upload$2d$video$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/upload-video.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
;
;
;
;
const MotionBottom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create('div');
_c = MotionBottom;
const IN_DEVELOPMENT = ("TURBOPACK compile-time value", "development") !== 'production';
const BOTTOM_VIEW_MOTION_PROPS = {
    variants: {
        visible: {
            opacity: 1,
            translateY: '0%'
        },
        hidden: {
            opacity: 0,
            translateY: '100%'
        }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    transition: {
        duration: 0.3,
        delay: 0.5,
        ease: [
            0.4,
            0,
            0.2,
            1
        ]
    }
};
function Fade(param) {
    let { top = false, bottom = false, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('from-background pointer-events-none h-4 bg-linear-to-b to-transparent', top && 'bg-linear-to-b', bottom && 'bg-linear-to-t', className)
    }, void 0, false, {
        fileName: "[project]/components/app/session-view.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c1 = Fade;
const SessionView = (param)=>{
    let { appConfig, onEndInterview, onCallEnding, ...props } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConnectionTimout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectionTimeout"])(200_000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDebug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugMode"])({
        enabled: IN_DEVELOPMENT
    });
    const [showEndCallDialog, setShowEndCallDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasAiStartedSpeaking, setHasAiStartedSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasSpokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { state: agentState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__["useVoiceAssistant"])();
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"])();
    const { isSessionActive, hasVideoInsights } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    // Collect and log transcript
    const { logTranscript } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranscript$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscriptLogger"])(room, isSessionActive);
    // Record video if has_video_insights is enabled
    // Uses MediaRecorder API with getUserMedia, independent of LiveKit tracks
    const { isRecording, recordedBlob, stopRecording, error: recordingError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVideoRecording$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoRecording"])({
        enabled: hasVideoInsights && isSessionActive
    });
    // Debug logging for video recording
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionView.useEffect": ()=>{
            console.log('[SessionView] Video recording state', {
                hasVideoInsights,
                isSessionActive,
                enabled: hasVideoInsights && isSessionActive,
                isRecording,
                hasBlob: !!recordedBlob,
                blobSize: recordedBlob === null || recordedBlob === void 0 ? void 0 : recordedBlob.size,
                blobType: recordedBlob === null || recordedBlob === void 0 ? void 0 : recordedBlob.type,
                recordingError: recordingError === null || recordingError === void 0 ? void 0 : recordingError.message,
                timestamp: new Date().toISOString()
            });
            // Log warning if recording should be enabled but isn't recording
            if (hasVideoInsights && isSessionActive && !isRecording && !recordedBlob && !recordingError) {
                console.warn('[SessionView] Recording should be active but is not recording', {
                    hasVideoInsights,
                    isSessionActive,
                    enabled: hasVideoInsights && isSessionActive,
                    isRecording
                });
            }
            // Log if there's a recording error
            if (recordingError) {
                console.error('[SessionView] Recording error detected', {
                    error: recordingError.message,
                    hasVideoInsights,
                    isSessionActive
                });
            }
        }
    }["SessionView.useEffect"], [
        hasVideoInsights,
        isSessionActive,
        isRecording,
        recordedBlob,
        recordingError
    ]);
    // Track when AI starts speaking for the first time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionView.useEffect": ()=>{
            if (agentState === 'speaking' && !hasSpokenRef.current) {
                hasSpokenRef.current = true;
                setHasAiStartedSpeaking(true);
            }
        }
    }["SessionView.useEffect"], [
        agentState
    ]);
    const controls = {
        leave: true,
        microphone: true,
        camera: false,
        chat: false
    };
    const handleEndCallClick = ()=>{
        setShowEndCallDialog(true);
    };
    const handleConfirmEndCall = async ()=>{
        console.log('[SessionView] Call ending, waiting for final transcriptions...');
        setShowEndCallDialog(false);
        onCallEnding === null || onCallEnding === void 0 ? void 0 : onCallEnding();
        if (room) {
            console.log('[SessionView] Disabling local media devices');
            await Promise.allSettled([
                room.localParticipant.setMicrophoneEnabled(false).catch((error)=>{
                    console.error('[SessionView] Failed to disable microphone', {
                        error: error instanceof Error ? error.message : error
                    });
                }),
                room.localParticipant.setCameraEnabled(false).catch((error)=>{
                    console.error('[SessionView] Failed to disable camera', {
                        error: error instanceof Error ? error.message : error
                    });
                })
            ]);
            console.log('[SessionView] Disconnecting from LiveKit room');
            try {
                await room.disconnect(true);
            } catch (error) {
                console.error('[SessionView] Failed to disconnect from room', {
                    error: error instanceof Error ? error.message : error
                });
            }
        }
        // Stop video recording if it's active and wait for blob
        let finalBlob = recordedBlob;
        console.log('[SessionView] Preparing to stop recording', {
            isRecording,
            hasExistingBlob: !!recordedBlob,
            existingBlobSize: recordedBlob === null || recordedBlob === void 0 ? void 0 : recordedBlob.size,
            recordingError: recordingError === null || recordingError === void 0 ? void 0 : recordingError.message
        });
        if (isRecording) {
            console.log('[SessionView] Stopping active video recording');
            try {
                finalBlob = await stopRecording();
                console.log('[SessionView] Recording stopped, blob received', {
                    hasBlob: !!finalBlob,
                    blobSize: finalBlob === null || finalBlob === void 0 ? void 0 : finalBlob.size,
                    blobType: finalBlob === null || finalBlob === void 0 ? void 0 : finalBlob.type
                });
            } catch (error) {
                console.error('[SessionView] Error stopping recording', {
                    error: error instanceof Error ? error.message : String(error)
                });
                // Use existing blob if stop fails
                finalBlob = recordedBlob;
            }
        } else if (!recordedBlob) {
            // Recording wasn't active, but maybe it stopped just before this check
            // Try calling stopRecording anyway to get any existing blob
            console.log('[SessionView] Recording not active, checking for existing blob');
            try {
                const checkBlob = await stopRecording();
                if (checkBlob && !finalBlob) {
                    finalBlob = checkBlob;
                    console.log('[SessionView] Retrieved blob from stopRecording', {
                        blobSize: finalBlob.size
                    });
                }
            } catch (error) {
                console.warn('[SessionView] Could not retrieve blob from stopRecording', error);
            }
        }
        // Allow a short delay to capture final transcription chunks before upload.
        await new Promise((resolve)=>setTimeout(resolve, 500));
        try {
            const result = await logTranscript();
            if ((result === null || result === void 0 ? void 0 : result.status) === 'error') {
                console.error('[SessionView] Failed to store transcript', {
                    error: result.error
                });
            }
        } catch (error) {
            console.error('[SessionView] Unexpected error while storing transcript', {
                error: error instanceof Error ? error.message : error
            });
        }
        // Upload video if recording was enabled and we have a blob
        // Wait a bit more to ensure blob is ready (state update from hook)
        await new Promise((resolve)=>setTimeout(resolve, 500));
        // Use recordedBlob (which may have been updated after stopping) or finalBlob
        const videoBlob = recordedBlob || finalBlob;
        console.log('[SessionView] Checking video upload conditions', {
            hasVideoInsights,
            hasVideoBlob: !!videoBlob,
            blobSize: videoBlob === null || videoBlob === void 0 ? void 0 : videoBlob.size,
            blobType: videoBlob === null || videoBlob === void 0 ? void 0 : videoBlob.type,
            wasRecording: isRecording
        });
        if (hasVideoInsights && videoBlob) {
            try {
                console.log('[SessionView] Uploading video recording', {
                    blobSize: videoBlob.size,
                    blobType: videoBlob.type
                });
                // Get session ID from URL
                const currentUrl = new URL(window.location.href);
                const sessionId = currentUrl.searchParams.get('session');
                if (!sessionId) {
                    console.error('[SessionView] No session ID found in URL for video upload');
                } else {
                    // Upload video directly to Google Cloud Storage
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$upload$2d$video$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadVideoToGCS"])({
                        videoBlob,
                        sessionId,
                        onProgress: (progress)=>{
                            console.log('[SessionView] Upload progress', {
                                progress: "".concat(progress.toFixed(1), "%")
                            });
                        }
                    });
                    console.log('[SessionView] Video uploaded successfully', {
                        file_path: result.file_path,
                        file_url: result.file_url,
                        file_size: result.file_size
                    });
                }
            } catch (error) {
                console.error('[SessionView] Unexpected error while uploading video', {
                    error: error instanceof Error ? error.message : error
                });
            }
        } else if (hasVideoInsights && !videoBlob) {
            console.warn('[SessionView] Video recording was enabled but no blob was recorded');
        }
        // Log recording errors if any
        if (recordingError) {
            console.error('[SessionView] Video recording error', {
                error: recordingError.message
            });
        }
        onEndInterview === null || onEndInterview === void 0 ? void 0 : onEndInterview();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white relative z-10 h-full w-full overflow-hidden",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: [
                    !hasAiStartedSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingScreen"], {}, "waiting-for-ai", false, {
                        fileName: "[project]/components/app/session-view.tsx",
                        lineNumber: 304,
                        columnNumber: 35
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasAiStartedSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.3
                        },
                        className: "h-full w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$tile$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayout"], {}, void 0, false, {
                            fileName: "[project]/components/app/session-view.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, "session", false, {
                        fileName: "[project]/components/app/session-view.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/app/session-view.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            hasAiStartedSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBottom, {
                ...BOTTOM_VIEW_MOTION_PROPS,
                className: "fixed inset-x-3 bottom-0 z-50 md:inset-x-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto max-w-2xl pb-3 md:pb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fade, {
                            bottom: true,
                            className: "absolute inset-x-0 top-0 h-4 -translate-y-full"
                        }, void 0, false, {
                            fileName: "[project]/components/app/session-view.tsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$agent$2d$control$2d$bar$2f$agent$2d$control$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentControlBar"], {
                            controls: controls,
                            onLeave: handleEndCallClick
                        }, void 0, false, {
                            fileName: "[project]/components/app/session-view.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/app/session-view.tsx",
                    lineNumber: 326,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/app/session-view.tsx",
                lineNumber: 322,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$confirm$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmDialog"], {
                open: showEndCallDialog,
                onOpenChange: setShowEndCallDialog,
                onConfirm: handleConfirmEndCall,
                title: "End Call",
                description: "Are you sure you want to end the call? This action cannot be undone.",
                confirmText: "End Call",
                cancelText: "Cancel"
            }, void 0, false, {
                fileName: "[project]/components/app/session-view.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/app/session-view.tsx",
        lineNumber: 302,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SessionView, "8TRpafVwh6UJi5fU4A6Xl1ORvdA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConnectionTimout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectionTimeout"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDebug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugMode"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$hQJmeINB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useVoiceAssistant$3e$__["useVoiceAssistant"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTranscript$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscriptLogger"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVideoRecording$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoRecording"]
    ];
});
_c2 = SessionView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MotionBottom");
__turbopack_context__.k.register(_c1, "Fade");
__turbopack_context__.k.register(_c2, "SessionView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app/thank-you-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThankYouScreen",
    ()=>ThankYouScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Star$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Star.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ThankYouScreen = (param)=>{
    let { onReturnHome, ref } = param;
    _s();
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmitFeedback = async ()=>{
        if (!rating && !feedback.trim()) {
            return;
        }
        // Get session ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session');
        if (!sessionId) {
            setError('Session ID not found. Please refresh the page and try again.');
            return;
        }
        setIsSubmitting(true);
        setError(null);
        try {
            const response = await fetch('/api/submit-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sessionId,
                    rating: rating || null,
                    feedback: feedback.trim() || null
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({
                        error: 'Failed to submit feedback'
                    }));
                throw new Error(errorData.error || "Failed to submit feedback: ".concat(response.statusText));
            }
            const result = await response.json();
            console.log('Feedback submitted successfully:', result);
            setIsSubmitted(true);
        } catch (err) {
            console.error('Error submitting feedback:', err);
            setError(err instanceof Error ? err.message : 'Failed to submit feedback. Please try again.');
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "min-h-screen bg-white p-4 md:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-3xl mx-auto py-8 md:py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-normal text-slate-900 mb-3 tracking-tight",
                            children: "Awesome Job!"
                        }, void 0, false, {
                            fileName: "[project]/components/app/thank-you-screen.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-slate-600 font-normal",
                            children: "You've successfully completed your study session. Great progress today!"
                        }, void 0, false, {
                            fileName: "[project]/components/app/thank-you-screen.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/app/thank-you-screen.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 md:p-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-11 w-11 rounded-full bg-yellow-100 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Star$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Star"], {
                                                className: "h-5 w-5 text-yellow-600",
                                                weight: "regular"
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/thank-you-screen.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/app/thank-you-screen.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/app/thank-you-screen.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 pt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-medium text-slate-900 mb-1.5",
                                                children: "We'd love your feedback!"
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/thank-you-screen.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600 leading-relaxed",
                                                children: "Your feedback helps us make your learning journey even better."
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/thank-you-screen.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/app/thank-you-screen.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app/thank-you-screen.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-medium text-slate-900 mb-3 block",
                                        children: "Rating (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/app/thank-you-screen.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center gap-2",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5
                                        ].map((num)=>{
                                            const isSelected = rating !== null && num <= rating;
                                            const isDarkYellow = rating === num;
                                            const isLightYellow = rating !== null && num < rating;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>!isSubmitted && setRating(num),
                                                disabled: isSubmitted,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-12 w-12 rounded-full flex items-center justify-center transition-all', 'focus:ring-2 focus:ring-yellow-500/20 focus:ring-offset-2 focus:outline-none', isDarkYellow ? 'bg-yellow-600 text-white' : isLightYellow ? 'bg-yellow-100 text-yellow-600' : 'bg-white text-slate-400 border border-slate-200 hover:border-yellow-300 hover:bg-yellow-50', isSubmitted && 'cursor-not-allowed opacity-50'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Star$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Star"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-6 w-6', isSelected ? 'fill-current' : ''),
                                                    weight: isSelected ? 'fill' : 'regular'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/app/thank-you-screen.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, num, false, {
                                                fileName: "[project]/components/app/thank-you-screen.tsx",
                                                lineNumber: 114,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/app/thank-you-screen.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app/thank-you-screen.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "feedback-text",
                                        className: "text-sm font-medium text-slate-900 mb-2 block",
                                        children: "Your Feedback (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/app/thank-you-screen.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "feedback-text",
                                        value: feedback,
                                        onChange: (e)=>!isSubmitted && setFeedback(e.target.value),
                                        placeholder: "How was your session with the AI tutor? What did you enjoy most?",
                                        rows: 4,
                                        disabled: isSubmitted,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm', 'text-slate-900 placeholder:text-slate-400', 'focus-visible:ring-2 focus-visible:ring-[#1A73E8]/20 focus-visible:outline-none focus-visible:border-[#1A73E8]', 'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50', 'resize-none transition-all')
                                    }, void 0, false, {
                                        fileName: "[project]/components/app/thank-you-screen.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app/thank-you-screen.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            isSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-emerald-700",
                                    children: "Thank you for your feedback!"
                                }, void 0, false, {
                                    fileName: "[project]/components/app/thank-you-screen.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/app/thank-you-screen.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 p-4 rounded-2xl bg-red-50 border border-red-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-700",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/components/app/thank-you-screen.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/app/thank-you-screen.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmitFeedback,
                                    disabled: isSubmitting || isSubmitted || !rating && !feedback.trim(),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full px-8 py-3 text-sm font-medium transition-all', isSubmitting || isSubmitted || !rating && !feedback.trim() ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-[#1A73E8] text-white hover:bg-[#1557B0] shadow-sm hover:shadow-md', 'focus-visible:ring-2 focus-visible:ring-[#1A73E8]/20 focus-visible:outline-none'),
                                    type: "button",
                                    children: isSubmitting ? 'Submitting...' : isSubmitted ? 'Feedback Submitted' : 'Submit Feedback'
                                }, void 0, false, {
                                    fileName: "[project]/components/app/thank-you-screen.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/app/thank-you-screen.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app/thank-you-screen.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/thank-you-screen.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: "You can now close this window."
                    }, void 0, false, {
                        fileName: "[project]/components/app/thank-you-screen.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/thank-you-screen.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/app/thank-you-screen.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/app/thank-you-screen.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThankYouScreen, "OoYOEoBHeC1q4U9F3fgfK5f4NGE=");
_c = ThankYouScreen;
var _c;
__turbopack_context__.k.register(_c, "ThankYouScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app/validation-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ValidationView",
    ()=>ValidationView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Camera$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Camera.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Microphone$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Microphone.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$WifiHigh$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/WifiHigh.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CheckCircle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/CheckCircle.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$XCircle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/XCircle.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Spinner.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ValidationView = (param)=>{
    let { onStartCall, ref } = param;
    _s();
    const [validations, setValidations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        camera: 'checking',
        microphone: 'checking',
        internetSpeed: 'checking'
    });
    const [speedTestProgress, setSpeedTestProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentSpeed, setCurrentSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [speedTestTime, setSpeedTestTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speedTestIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speedTestTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speedResultsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    // Check camera
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ValidationView.useEffect": ()=>{
            mountedRef.current = true;
            const checkCamera = {
                "ValidationView.useEffect.checkCamera": async ()=>{
                    try {
                        const stream = await navigator.mediaDevices.getUserMedia({
                            video: {
                                width: 640,
                                height: 480
                            },
                            audio: false
                        });
                        if (!mountedRef.current) {
                            stream.getTracks().forEach({
                                "ValidationView.useEffect.checkCamera": (track)=>track.stop()
                            }["ValidationView.useEffect.checkCamera"]);
                            return;
                        }
                        streamRef.current = stream;
                        if (videoRef.current) {
                            videoRef.current.srcObject = stream;
                            await videoRef.current.play().catch(console.error);
                        }
                        // Check if video track is active and receiving frames
                        const videoTrack = stream.getVideoTracks()[0];
                        if (videoTrack && videoTrack.readyState === 'live') {
                            // Wait a bit to ensure camera is actually working and receiving frames
                            const checkFrame = {
                                "ValidationView.useEffect.checkCamera.checkFrame": ()=>{
                                    if (!mountedRef.current) return;
                                    // Check if track is still live and has constraints (indicates active camera)
                                    if (videoTrack.readyState === 'live' && videoTrack.getSettings().width) {
                                        setValidations({
                                            "ValidationView.useEffect.checkCamera.checkFrame": (prev)=>({
                                                    ...prev,
                                                    camera: 'pass'
                                                })
                                        }["ValidationView.useEffect.checkCamera.checkFrame"]);
                                    } else {
                                        setValidations({
                                            "ValidationView.useEffect.checkCamera.checkFrame": (prev)=>({
                                                    ...prev,
                                                    camera: 'fail'
                                                })
                                        }["ValidationView.useEffect.checkCamera.checkFrame"]);
                                    }
                                }
                            }["ValidationView.useEffect.checkCamera.checkFrame"];
                            // Give it a moment to start receiving frames
                            setTimeout(checkFrame, 1000);
                        } else {
                            setValidations({
                                "ValidationView.useEffect.checkCamera": (prev)=>({
                                        ...prev,
                                        camera: 'fail'
                                    })
                            }["ValidationView.useEffect.checkCamera"]);
                        }
                    } catch (error) {
                        console.error('Camera check failed:', error);
                        if (mountedRef.current) {
                            setValidations({
                                "ValidationView.useEffect.checkCamera": (prev)=>({
                                        ...prev,
                                        camera: 'fail'
                                    })
                            }["ValidationView.useEffect.checkCamera"]);
                        }
                    }
                }
            }["ValidationView.useEffect.checkCamera"];
            checkCamera();
            return ({
                "ValidationView.useEffect": ()=>{
                    mountedRef.current = false;
                    if (streamRef.current) {
                        streamRef.current.getTracks().forEach({
                            "ValidationView.useEffect": (track)=>track.stop()
                        }["ValidationView.useEffect"]);
                        streamRef.current = null;
                    }
                }
            })["ValidationView.useEffect"];
        }
    }["ValidationView.useEffect"], []);
    // Check microphone
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ValidationView.useEffect": ()=>{
            mountedRef.current = true;
            let checkInterval = null;
            let microphonePassed = false;
            const checkMicrophone = {
                "ValidationView.useEffect.checkMicrophone": async ()=>{
                    try {
                        const stream = await navigator.mediaDevices.getUserMedia({
                            audio: true,
                            video: false
                        });
                        if (!mountedRef.current) {
                            stream.getTracks().forEach({
                                "ValidationView.useEffect.checkMicrophone": (track)=>track.stop()
                            }["ValidationView.useEffect.checkMicrophone"]);
                            return;
                        }
                        audioStreamRef.current = stream;
                        // Create audio context to analyze microphone input
                        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                        const analyser = audioContext.createAnalyser();
                        const microphone = audioContext.createMediaStreamSource(stream);
                        analyser.fftSize = 256;
                        analyser.smoothingTimeConstant = 0.8;
                        microphone.connect(analyser);
                        audioContextRef.current = audioContext;
                        analyserRef.current = analyser;
                        let checksCount = 0;
                        const maxChecks = 10;
                        // Check for audio input levels
                        checkInterval = setInterval({
                            "ValidationView.useEffect.checkMicrophone": ()=>{
                                if (!mountedRef.current || !analyserRef.current || microphonePassed) {
                                    if (checkInterval) clearInterval(checkInterval);
                                    return;
                                }
                                checksCount++;
                                const bufferLength = analyserRef.current.frequencyBinCount;
                                const dataArray = new Uint8Array(bufferLength);
                                analyserRef.current.getByteFrequencyData(dataArray);
                                // Calculate average volume
                                const average = dataArray.reduce({
                                    "ValidationView.useEffect.checkMicrophone": (sum, value)=>sum + value
                                }["ValidationView.useEffect.checkMicrophone"], 0) / bufferLength;
                                const max = Math.max(...dataArray);
                                // Microphone is working if we can detect audio context activity
                                // Even silence should register some minimal activity, and we check if we're getting data
                                // The fact that we're getting data from the analyser means the mic is working
                                if (dataArray.length > 0) {
                                    // If we get any data at all from the analyser, the microphone is working
                                    microphonePassed = true;
                                    setValidations({
                                        "ValidationView.useEffect.checkMicrophone": (prev)=>({
                                                ...prev,
                                                microphone: 'pass'
                                            })
                                    }["ValidationView.useEffect.checkMicrophone"]);
                                    if (checkInterval) clearInterval(checkInterval);
                                    return;
                                }
                                // After enough checks, if we haven't detected failure, assume it's working
                                // (user might be in a silent environment, but mic is connected)
                                if (checksCount >= maxChecks) {
                                    microphonePassed = true;
                                    setValidations({
                                        "ValidationView.useEffect.checkMicrophone": (prev)=>({
                                                ...prev,
                                                microphone: 'pass'
                                            })
                                    }["ValidationView.useEffect.checkMicrophone"]);
                                    if (checkInterval) clearInterval(checkInterval);
                                }
                            }
                        }["ValidationView.useEffect.checkMicrophone"], 300);
                    } catch (error) {
                        console.error('Microphone check failed:', error);
                        if (mountedRef.current) {
                            setValidations({
                                "ValidationView.useEffect.checkMicrophone": (prev)=>({
                                        ...prev,
                                        microphone: 'fail'
                                    })
                            }["ValidationView.useEffect.checkMicrophone"]);
                        }
                    }
                }
            }["ValidationView.useEffect.checkMicrophone"];
            checkMicrophone();
            return ({
                "ValidationView.useEffect": ()=>{
                    mountedRef.current = false;
                    microphonePassed = false;
                    if (checkInterval) {
                        clearInterval(checkInterval);
                    }
                    if (audioContextRef.current) {
                        audioContextRef.current.close().catch(console.error);
                        audioContextRef.current = null;
                    }
                    if (audioStreamRef.current) {
                        audioStreamRef.current.getTracks().forEach({
                            "ValidationView.useEffect": (track)=>track.stop()
                        }["ValidationView.useEffect"]);
                        audioStreamRef.current = null;
                    }
                }
            })["ValidationView.useEffect"];
        }
    }["ValidationView.useEffect"], []);
    // Check internet speed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ValidationView.useEffect": ()=>{
            mountedRef.current = true;
            const TEST_DURATION = 10000; // 10 seconds
            const MIN_SPEED_MBPS = 2;
            const TEST_INTERVAL = 2000; // Test every 2 seconds
            const MIN_SUCCESSFUL_TESTS = 1; // Reduced to 1 - more lenient
            const checkInternetSpeed = {
                "ValidationView.useEffect.checkInternetSpeed": async ()=>{
                    try {
                        const testStartTime = Date.now();
                        speedResultsRef.current = [];
                        setSpeedTestProgress(0);
                        setSpeedTestTime(0);
                        setCurrentSpeed(0);
                        // Start speed test timer
                        speedTestTimerRef.current = setInterval({
                            "ValidationView.useEffect.checkInternetSpeed": ()=>{
                                if (!mountedRef.current) return;
                                const elapsed = Date.now() - testStartTime;
                                const progress = Math.min(elapsed, TEST_DURATION);
                                setSpeedTestTime(progress);
                                setSpeedTestProgress(progress / TEST_DURATION * 100);
                                if (elapsed >= TEST_DURATION) {
                                    if (speedTestTimerRef.current) {
                                        clearInterval(speedTestTimerRef.current);
                                        speedTestTimerRef.current = null;
                                    }
                                }
                            }
                        }["ValidationView.useEffect.checkInternetSpeed"], 100);
                        // Perform speed test using fast.com via our API proxy
                        const performSpeedTest = {
                            "ValidationView.useEffect.checkInternetSpeed.performSpeedTest": async ()=>{
                                try {
                                    const controller = new AbortController();
                                    const timeoutId = setTimeout({
                                        "ValidationView.useEffect.checkInternetSpeed.performSpeedTest.timeoutId": ()=>controller.abort()
                                    }["ValidationView.useEffect.checkInternetSpeed.performSpeedTest.timeoutId"], 15000); // 15 second timeout for fast.com
                                    const testUrl = "/api/speed-test?fast=true&t=".concat(Date.now());
                                    const response = await fetch(testUrl, {
                                        method: 'GET',
                                        cache: 'no-cache',
                                        signal: controller.signal
                                    });
                                    clearTimeout(timeoutId);
                                    if (!response.ok) {
                                        const errorData = await response.json().catch({
                                            "ValidationView.useEffect.checkInternetSpeed.performSpeedTest": ()=>({})
                                        }["ValidationView.useEffect.checkInternetSpeed.performSpeedTest"]);
                                        console.error("Speed test failed: ".concat(response.status), errorData);
                                        return 0;
                                    }
                                    // Parse the JSON response with speed results
                                    const result = await response.json();
                                    if (result.error) {
                                        console.error('Speed test error:', result.error);
                                        return 0;
                                    }
                                    if (result.speedMbps) {
                                        const speedMbps = parseFloat(result.speedMbps);
                                        const source = result.source || 'unknown';
                                        const sizeMB = (result.sizeBytes / (1024 * 1024)).toFixed(2);
                                        console.log("Speed test (".concat(source, "): ").concat(speedMbps.toFixed(2), " Mbps (").concat(sizeMB, " MB in ").concat(result.durationSeconds, "s)"));
                                        return Math.max(0, speedMbps);
                                    }
                                } catch (error) {
                                    if (error.name === 'AbortError') {
                                        console.log('Speed test timed out');
                                    } else {
                                        console.error('Speed test error:', error);
                                    }
                                }
                                return 0;
                            }
                        }["ValidationView.useEffect.checkInternetSpeed.performSpeedTest"];
                        // Run speed tests periodically
                        const runSpeedTest = {
                            "ValidationView.useEffect.checkInternetSpeed.runSpeedTest": async ()=>{
                                if (!mountedRef.current) return;
                                const elapsed = Date.now() - testStartTime;
                                // Finalize result when test duration is complete
                                if (elapsed >= TEST_DURATION) {
                                    if (speedTestIntervalRef.current) {
                                        clearInterval(speedTestIntervalRef.current);
                                        speedTestIntervalRef.current = null;
                                    }
                                    // Calculate average speed from successful tests
                                    const successfulTests = speedResultsRef.current.filter({
                                        "ValidationView.useEffect.checkInternetSpeed.runSpeedTest.successfulTests": (s)=>s > 0
                                    }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest.successfulTests"]);
                                    const avgSpeed = successfulTests.length > 0 ? successfulTests.reduce({
                                        "ValidationView.useEffect.checkInternetSpeed.runSpeedTest": (sum, s)=>sum + s
                                    }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest"], 0) / successfulTests.length : 0;
                                    if (mountedRef.current) {
                                        // Much more lenient validation - if we have ANY successful test, check it
                                        if (successfulTests.length >= MIN_SUCCESSFUL_TESTS) {
                                            // If average speed is above threshold, pass
                                            if (avgSpeed >= MIN_SPEED_MBPS) {
                                                setValidations({
                                                    "ValidationView.useEffect.checkInternetSpeed.runSpeedTest": (prev)=>({
                                                            ...prev,
                                                            internetSpeed: 'pass'
                                                        })
                                                }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest"]);
                                                setCurrentSpeed(avgSpeed);
                                            } else if (avgSpeed >= MIN_SPEED_MBPS * 0.7) {
                                                // If speed is at least 70% of threshold (1.4 Mbps), still pass (lenient)
                                                // This accounts for network variability
                                                console.log("Speed test passed with lenient threshold: ".concat(avgSpeed.toFixed(2), " Mbps"));
                                                setValidations({
                                                    "ValidationView.useEffect.checkInternetSpeed.runSpeedTest": (prev)=>({
                                                            ...prev,
                                                            internetSpeed: 'pass'
                                                        })
                                                }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest"]);
                                                setCurrentSpeed(avgSpeed);
                                            } else {
                                                // Speed is too low
                                                setValidations({
                                                    "ValidationView.useEffect.checkInternetSpeed.runSpeedTest": (prev)=>({
                                                            ...prev,
                                                            internetSpeed: 'fail'
                                                        })
                                                }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest"]);
                                                setCurrentSpeed(avgSpeed);
                                            }
                                        } else if (successfulTests.length > 0) {
                                            // Even with just 1 test, if it's good enough, pass
                                            const singleSpeed = successfulTests[0];
                                            if (singleSpeed >= MIN_SPEED_MBPS * 0.8) {
                                                // 80% of threshold (1.6 Mbps) is acceptable with just one test
                                                console.log("Speed test passed with single test: ".concat(singleSpeed.toFixed(2), " Mbps"));
                                                setValidations({
                                                    "ValidationView.useEffect.checkInternetSpeed.runSpeedTest": (prev)=>({
                                                            ...prev,
                                                            internetSpeed: 'pass'
                                                        })
                                                }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest"]);
                                                setCurrentSpeed(singleSpeed);
                                            } else {
                                                // Wait for more tests
                                                setCurrentSpeed(singleSpeed);
                                            }
                                        } else {
                                            // No successful tests yet - keep checking
                                            // Don't fail immediately, network might be slow to respond
                                            console.log('Waiting for speed test results...');
                                        }
                                    }
                                    return;
                                }
                                // Perform speed test
                                const speed = await performSpeedTest();
                                if (mountedRef.current) {
                                    if (speed > 0) {
                                        speedResultsRef.current.push(speed);
                                        // Update current speed display with latest or average
                                        const successfulTests = speedResultsRef.current.filter({
                                            "ValidationView.useEffect.checkInternetSpeed.runSpeedTest.successfulTests": (s)=>s > 0
                                        }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest.successfulTests"]);
                                        const avgSpeed = successfulTests.length > 0 ? successfulTests.reduce({
                                            "ValidationView.useEffect.checkInternetSpeed.runSpeedTest": (sum, s)=>sum + s
                                        }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest"], 0) / successfulTests.length : speed;
                                        setCurrentSpeed(avgSpeed);
                                        // Check if we can pass early (have enough good samples)
                                        if (successfulTests.length >= MIN_SUCCESSFUL_TESTS) {
                                            const avgSpeed = successfulTests.reduce({
                                                "ValidationView.useEffect.checkInternetSpeed.runSpeedTest": (sum, s)=>sum + s
                                            }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest"], 0) / successfulTests.length;
                                            // More lenient early pass - after 4 seconds if we have good results
                                            if (elapsed >= 4000) {
                                                // Pass if average is at least 70% of threshold (very lenient)
                                                if (avgSpeed >= MIN_SPEED_MBPS * 0.7) {
                                                    setValidations({
                                                        "ValidationView.useEffect.checkInternetSpeed.runSpeedTest": (prev)=>({
                                                                ...prev,
                                                                internetSpeed: 'pass'
                                                            })
                                                    }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest"]);
                                                    // Stop further tests to save bandwidth
                                                    if (speedTestIntervalRef.current) {
                                                        clearInterval(speedTestIntervalRef.current);
                                                        speedTestIntervalRef.current = null;
                                                    }
                                                    return;
                                                }
                                            }
                                        } else if (successfulTests.length === 1 && elapsed >= 6000) {
                                            // After 6 seconds, if we have at least one test, be very lenient
                                            const singleSpeed = successfulTests[0];
                                            // Accept if speed is at least 80% of threshold (1.6 Mbps)
                                            if (singleSpeed >= MIN_SPEED_MBPS * 0.8) {
                                                console.log("Early pass with single test: ".concat(singleSpeed.toFixed(2), " Mbps"));
                                                setValidations({
                                                    "ValidationView.useEffect.checkInternetSpeed.runSpeedTest": (prev)=>({
                                                            ...prev,
                                                            internetSpeed: 'pass'
                                                        })
                                                }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest"]);
                                                if (speedTestIntervalRef.current) {
                                                    clearInterval(speedTestIntervalRef.current);
                                                    speedTestIntervalRef.current = null;
                                                }
                                            }
                                        }
                                    } else {
                                        // Log failed test but don't update UI yet
                                        console.log('Speed test returned 0, will retry...');
                                    }
                                }
                            }
                        }["ValidationView.useEffect.checkInternetSpeed.runSpeedTest"];
                        // Run initial test immediately
                        runSpeedTest();
                        // Then run tests at intervals
                        speedTestIntervalRef.current = setInterval({
                            "ValidationView.useEffect.checkInternetSpeed": ()=>{
                                runSpeedTest();
                            }
                        }["ValidationView.useEffect.checkInternetSpeed"], TEST_INTERVAL);
                    } catch (error) {
                        console.error('Internet speed check failed:', error);
                        if (mountedRef.current) {
                            // Don't immediately fail, give it a chance to retry
                            console.warn('Speed check encountered an error, but will continue testing...');
                        }
                    }
                }
            }["ValidationView.useEffect.checkInternetSpeed"];
            // Start speed test after a short delay to let camera/mic checks start
            const timeoutId = setTimeout({
                "ValidationView.useEffect.timeoutId": ()=>{
                    checkInternetSpeed();
                }
            }["ValidationView.useEffect.timeoutId"], 500);
            return ({
                "ValidationView.useEffect": ()=>{
                    mountedRef.current = false;
                    clearTimeout(timeoutId);
                    if (speedTestIntervalRef.current) {
                        clearInterval(speedTestIntervalRef.current);
                        speedTestIntervalRef.current = null;
                    }
                    if (speedTestTimerRef.current) {
                        clearInterval(speedTestTimerRef.current);
                        speedTestTimerRef.current = null;
                    }
                }
            })["ValidationView.useEffect"];
        }
    }["ValidationView.useEffect"], []);
    const allValidationsPassed = validations.camera === 'pass' && validations.microphone === 'pass' && validations.internetSpeed === 'pass';
    const handleStartCall = ()=>{
        // Clean up all media streams before starting the call
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track)=>track.stop());
            streamRef.current = null;
        }
        if (audioStreamRef.current) {
            audioStreamRef.current.getTracks().forEach((track)=>track.stop());
            audioStreamRef.current = null;
        }
        if (audioContextRef.current) {
            audioContextRef.current.close().catch(console.error);
            audioContextRef.current = null;
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        // Clear intervals
        if (speedTestIntervalRef.current) {
            clearInterval(speedTestIntervalRef.current);
            speedTestIntervalRef.current = null;
        }
        if (speedTestTimerRef.current) {
            clearInterval(speedTestTimerRef.current);
            speedTestTimerRef.current = null;
        }
        // Start the call
        onStartCall();
    };
    const getStatusIcon = (status)=>{
        switch(status){
            case 'checking':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Spinner$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                    weight: "bold",
                    className: "h-5 w-5 animate-spin text-[#1A73E8]"
                }, void 0, false, {
                    fileName: "[project]/components/app/validation-view.tsx",
                    lineNumber: 481,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'pass':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CheckCircle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircle"], {
                    weight: "bold",
                    className: "h-5 w-5 text-emerald-600"
                }, void 0, false, {
                    fileName: "[project]/components/app/validation-view.tsx",
                    lineNumber: 483,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'fail':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$XCircle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XCircle"], {
                    weight: "bold",
                    className: "h-5 w-5 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/components/app/validation-view.tsx",
                    lineNumber: 485,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    const getStatusText = (status)=>{
        switch(status){
            case 'checking':
                return 'Checking...';
            case 'pass':
                return 'Passed';
            case 'fail':
                return 'Failed';
        }
    };
    const getSpeedTestProgressText = ()=>{
        if (validations.internetSpeed === 'checking') {
            const elapsed = Math.round(speedTestTime / 1000);
            const currentSpeedText = currentSpeed > 0 ? " (Current: ".concat(currentSpeed.toFixed(2), " Mbps)") : '';
            return "Testing... ".concat(elapsed, "s / 10s").concat(currentSpeedText);
        }
        if (validations.internetSpeed === 'pass') {
            return "Speed: ".concat(currentSpeed.toFixed(2), " Mbps (Required: 2+ Mbps)");
        }
        if (validations.internetSpeed === 'fail') {
            return 'Requires 2+ Mbps consistently for 10 seconds';
        }
        return 'Requires 2+ Mbps consistently for 10 seconds';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "min-h-screen bg-white p-4 md:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-3xl mx-auto py-8 md:py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-normal text-slate-900 mb-3 tracking-tight",
                            children: "Classroom Setup"
                        }, void 0, false, {
                            fileName: "[project]/components/app/validation-view.tsx",
                            lineNumber: 520,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-slate-600 font-normal",
                            children: "Let's make sure everything is ready for your live session."
                        }, void 0, false, {
                            fileName: "[project]/components/app/validation-view.tsx",
                            lineNumber: 523,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/app/validation-view.tsx",
                    lineNumber: 519,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-12 w-12 rounded-full bg-[#E8F0FE] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Camera$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"], {
                                                    className: "h-6 w-6 text-[#1A73E8]",
                                                    weight: "regular"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/app/validation-view.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/validation-view.tsx",
                                                lineNumber: 533,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-medium text-slate-900",
                                                        children: "Camera"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/app/validation-view.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-600",
                                                        children: "Testing your camera access"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/app/validation-view.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/app/validation-view.tsx",
                                                lineNumber: 536,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/app/validation-view.tsx",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            getStatusIcon(validations.camera),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-medium', validations.camera === 'pass' ? 'text-emerald-600' : validations.camera === 'fail' ? 'text-red-600' : validations.camera === 'checking' ? 'text-[#1A73E8]' : 'text-slate-400'),
                                                children: getStatusText(validations.camera)
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/validation-view.tsx",
                                                lineNumber: 543,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/app/validation-view.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app/validation-view.tsx",
                                lineNumber: 531,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            (validations.camera === 'checking' || validations.camera === 'pass') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: videoRef,
                                    autoPlay: true,
                                    playsInline: true,
                                    muted: true,
                                    className: "w-full h-80 md:h-96 object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/app/validation-view.tsx",
                                    lineNumber: 561,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/app/validation-view.tsx",
                                lineNumber: 560,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            validations.camera === 'fail' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-4 rounded-2xl bg-red-50 border border-red-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-700",
                                    children: "Camera access denied or not available. Please check your camera permissions and try again."
                                }, void 0, false, {
                                    fileName: "[project]/components/app/validation-view.tsx",
                                    lineNumber: 572,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/app/validation-view.tsx",
                                lineNumber: 571,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app/validation-view.tsx",
                        lineNumber: 530,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/validation-view.tsx",
                    lineNumber: 529,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-12 w-12 rounded-full bg-[#E8F0FE] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Microphone$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Microphone"], {
                                                    className: "h-6 w-6 text-[#1A73E8]",
                                                    weight: "regular"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/app/validation-view.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/validation-view.tsx",
                                                lineNumber: 586,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-medium text-slate-900",
                                                        children: "Microphone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/app/validation-view.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-600",
                                                        children: "Testing your microphone access"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/app/validation-view.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/app/validation-view.tsx",
                                                lineNumber: 589,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/app/validation-view.tsx",
                                        lineNumber: 585,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            getStatusIcon(validations.microphone),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-medium', validations.microphone === 'pass' ? 'text-emerald-600' : validations.microphone === 'fail' ? 'text-red-600' : validations.microphone === 'checking' ? 'text-[#1A73E8]' : 'text-slate-400'),
                                                children: getStatusText(validations.microphone)
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/validation-view.tsx",
                                                lineNumber: 596,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/app/validation-view.tsx",
                                        lineNumber: 594,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app/validation-view.tsx",
                                lineNumber: 584,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            validations.microphone === 'fail' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-4 rounded-2xl bg-red-50 border border-red-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-700",
                                    children: "Microphone access denied or not available. Please check your microphone permissions and try again."
                                }, void 0, false, {
                                    fileName: "[project]/components/app/validation-view.tsx",
                                    lineNumber: 614,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/app/validation-view.tsx",
                                lineNumber: 613,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app/validation-view.tsx",
                        lineNumber: 583,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/validation-view.tsx",
                    lineNumber: 582,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-12 w-12 rounded-full bg-[#E8F0FE] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$WifiHigh$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WifiHigh"], {
                                                    className: "h-6 w-6 text-[#1A73E8]",
                                                    weight: "regular"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/app/validation-view.tsx",
                                                    lineNumber: 629,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/validation-view.tsx",
                                                lineNumber: 628,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-medium text-slate-900",
                                                        children: "Internet Speed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/app/validation-view.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-600",
                                                        children: getSpeedTestProgressText()
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/app/validation-view.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/app/validation-view.tsx",
                                                lineNumber: 631,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/app/validation-view.tsx",
                                        lineNumber: 627,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            getStatusIcon(validations.internetSpeed),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-medium', validations.internetSpeed === 'pass' ? 'text-emerald-600' : validations.internetSpeed === 'fail' ? 'text-red-600' : validations.internetSpeed === 'checking' ? 'text-[#1A73E8]' : 'text-slate-400'),
                                                children: getStatusText(validations.internetSpeed)
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/validation-view.tsx",
                                                lineNumber: 638,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/app/validation-view.tsx",
                                        lineNumber: 636,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app/validation-view.tsx",
                                lineNumber: 626,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            validations.internetSpeed === 'checking' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-slate-200 rounded-full h-2.5 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#1A73E8] h-2.5 rounded-full transition-all duration-300 ease-out",
                                            style: {
                                                width: "".concat(speedTestProgress, "%")
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/app/validation-view.tsx",
                                            lineNumber: 657,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/app/validation-view.tsx",
                                        lineNumber: 656,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 mt-2.5",
                                        children: getSpeedTestProgressText()
                                    }, void 0, false, {
                                        fileName: "[project]/components/app/validation-view.tsx",
                                        lineNumber: 662,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app/validation-view.tsx",
                                lineNumber: 655,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            validations.internetSpeed === 'fail' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-4 rounded-2xl bg-red-50 border border-red-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-700",
                                    children: "Internet speed is below the required 2 Mbps. Please check your connection and try again."
                                }, void 0, false, {
                                    fileName: "[project]/components/app/validation-view.tsx",
                                    lineNumber: 667,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/app/validation-view.tsx",
                                lineNumber: 666,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app/validation-view.tsx",
                        lineNumber: 625,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/validation-view.tsx",
                    lineNumber: 624,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleStartCall,
                        disabled: !allValidationsPassed,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full px-8 py-3 text-sm font-medium transition-all', allValidationsPassed ? 'bg-[#1A73E8] text-white hover:bg-[#1557B0] shadow-sm hover:shadow-md' : 'bg-slate-200 text-slate-400 cursor-not-allowed'),
                        children: allValidationsPassed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2",
                            children: [
                                "Start Session",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CheckCircle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircle"], {
                                    className: "h-4 w-4",
                                    weight: "bold"
                                }, void 0, false, {
                                    fileName: "[project]/components/app/validation-view.tsx",
                                    lineNumber: 691,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/app/validation-view.tsx",
                            lineNumber: 689,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : 'Start Session'
                    }, void 0, false, {
                        fileName: "[project]/components/app/validation-view.tsx",
                        lineNumber: 678,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/validation-view.tsx",
                    lineNumber: 677,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/app/validation-view.tsx",
            lineNumber: 517,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/app/validation-view.tsx",
        lineNumber: 516,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ValidationView, "4di6lKI2dQQwbLfVOxL9GunXTrI=");
_c = ValidationView;
var _c;
__turbopack_context__.k.register(_c, "ValidationView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app/welcome-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeView",
    ()=>WelcomeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Microphone$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Microphone.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CheckCircle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/CheckCircle.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$User$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/User.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Lock$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Lock.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Headphones$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Headphones.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Clock$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Clock.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const WelcomeView = (param)=>{
    let { onNext, ref } = param;
    _s();
    const [isAgreed, setIsAgreed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNext = ()=>{
        if (isAgreed) {
            onNext();
        }
    };
    const guidelines = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Microphone$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Microphone"],
            title: 'Audio Communication',
            description: 'Ensure your microphone and speakers are working properly. Find a quiet spot so you can focus and chat with your tutor easily.'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Headphones$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headphones"],
            title: 'Stay Curious',
            description: 'Don\'t hesitate to ask questions! This session is all about your curiosity and understanding. Your AI tutor is here to guide you.'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Clock$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"],
            title: 'Learn at Your Pace',
            description: 'Learning takes time. We\'ll go at a speed that\'s comfortable for you. Feel free to ask the tutor to explain things again or move forward.'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$User$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["User"],
            title: 'Share Your Thoughts',
            description: 'Share your thoughts and ideas openly. There are no \'wrong\' questions here—every doubt is a step toward better learning.'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Lock$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lock"],
            title: 'Focus & Fun',
            description: 'To get the most out of this session, try to stay focused on the topic. Your tutor is here to help you master the concepts together.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "min-h-screen bg-white p-4 md:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-3xl mx-auto py-8 md:py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-normal text-slate-900 mb-3 tracking-tight",
                            children: "Welcome to Your Live Study Session"
                        }, void 0, false, {
                            fileName: "[project]/components/app/welcome-view.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-slate-600 font-normal",
                            children: "Ready to learn something new today?"
                        }, void 0, false, {
                            fileName: "[project]/components/app/welcome-view.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/app/welcome-view.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 md:p-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: guidelines.map((guideline, index)=>{
                                const Icon = guideline.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-11 w-11 rounded-full bg-[#E8F0FE] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-5 w-5 text-[#1A73E8]",
                                                    weight: "regular"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/app/welcome-view.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/app/welcome-view.tsx",
                                                lineNumber: 80,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/app/welcome-view.tsx",
                                            lineNumber: 79,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 pt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-medium text-slate-900 mb-1.5",
                                                    children: guideline.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/app/welcome-view.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-600 leading-relaxed",
                                                    children: guideline.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/app/welcome-view.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/app/welcome-view.tsx",
                                            lineNumber: 84,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/app/welcome-view.tsx",
                                    lineNumber: 78,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/app/welcome-view.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/app/welcome-view.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/welcome-view.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "agreement",
                                    type: "checkbox",
                                    checked: isAgreed,
                                    onChange: (e)=>setIsAgreed(e.target.checked),
                                    className: "mt-0.5 h-5 w-5 rounded border-slate-300 cursor-pointer appearance-none border-2 transition-all duration-200 checked:bg-[#1A73E8] checked:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 focus:ring-offset-2 relative",
                                    style: {
                                        backgroundImage: isAgreed ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\")" : 'none',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/app/welcome-view.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "agreement",
                                    className: "flex-1 text-sm text-slate-700 leading-relaxed cursor-pointer select-none",
                                    children: "I'm ready to learn and will participate actively in today's session."
                                }, void 0, false, {
                                    fileName: "[project]/components/app/welcome-view.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/app/welcome-view.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/app/welcome-view.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/welcome-view.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        disabled: !isAgreed,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full px-8 py-3 text-sm font-medium transition-all', isAgreed ? 'bg-[#1A73E8] text-white hover:bg-[#1557B0] shadow-sm hover:shadow-md' : 'bg-slate-200 text-slate-400 cursor-not-allowed'),
                        children: isAgreed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2",
                            children: [
                                "Continue",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CheckCircle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircle"], {
                                    className: "h-4 w-4",
                                    weight: "bold"
                                }, void 0, false, {
                                    fileName: "[project]/components/app/welcome-view.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/app/welcome-view.tsx",
                            lineNumber: 141,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : 'Continue'
                    }, void 0, false, {
                        fileName: "[project]/components/app/welcome-view.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/app/welcome-view.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/app/welcome-view.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/app/welcome-view.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WelcomeView, "EmMVXcdoT9yDOcbPtnp97OT8b88=");
_c = WelcomeView;
var _c;
__turbopack_context__.k.register(_c, "WelcomeView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app/view-controller.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewController",
    ()=>ViewController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/contexts-D4V9wQRc.mjs [app-client] (ecmascript) <export f as useRoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/loading-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/session-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/session-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$thank$2d$you$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/thank-you-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$validation$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/validation-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$welcome$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/welcome-view.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const MotionWelcomeView = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$welcome$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WelcomeView"]);
_c = MotionWelcomeView;
const MotionValidationView = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$validation$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationView"]);
_c1 = MotionValidationView;
const MotionSessionView = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionView"]);
_c2 = MotionSessionView;
const MotionThankYouScreen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$thank$2d$you$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThankYouScreen"]);
_c3 = MotionThankYouScreen;
const VIEW_MOTION_PROPS = {
    variants: {
        visible: {
            opacity: 1
        },
        hidden: {
            opacity: 0
        }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    transition: {
        duration: 0.5,
        ease: [
            0,
            0,
            1,
            1
        ]
    }
};
function ViewController() {
    _s();
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"])();
    const isSessionActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [showThankYou, setShowThankYou] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showValidation, setShowValidation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFinishingSession, setIsFinishingSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { appConfig, isSessionActive, startSession, endSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    // animation handler holds a reference to stale isSessionActive value
    isSessionActiveRef.current = isSessionActive;
    // disconnect room after animation completes
    const handleAnimationComplete = ()=>{
        if (!isSessionActiveRef.current && room.state !== 'disconnected') {
            room.disconnect();
        }
    };
    const handleEndInterview = ()=>{
        setShowThankYou(true);
        setIsFinishingSession(false);
        endSession();
    };
    const handleCallEnding = ()=>{
        setIsFinishingSession(true);
    };
    const handleReturnHome = ()=>{
        setShowThankYou(false);
        setShowValidation(false);
    };
    const handleNext = ()=>{
        setShowValidation(true);
    };
    const handleStartCall = ()=>{
        setShowValidation(false);
        startSession();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: [
            isFinishingSession && !showThankYou && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingScreen"], {
                title: "Wrapping up your session...",
                description: "Getting everything ready to finish our live session. This only takes a moment."
            }, "saving-transcript", false, {
                fileName: "[project]/components/app/view-controller.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            !showValidation && !isSessionActive && !showThankYou && !isFinishingSession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionWelcomeView, {
                ...VIEW_MOTION_PROPS,
                onNext: handleNext
            }, "welcome", false, {
                fileName: "[project]/components/app/view-controller.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            showValidation && !isSessionActive && !showThankYou && !isFinishingSession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionValidationView, {
                ...VIEW_MOTION_PROPS,
                onStartCall: handleStartCall
            }, "validation", false, {
                fileName: "[project]/components/app/view-controller.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            isSessionActive && !showThankYou && !isFinishingSession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionSessionView, {
                ...VIEW_MOTION_PROPS,
                appConfig: appConfig,
                onEndInterview: handleEndInterview,
                onCallEnding: handleCallEnding,
                onAnimationComplete: handleAnimationComplete
            }, "session-view", false, {
                fileName: "[project]/components/app/view-controller.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this),
            showThankYou && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionThankYouScreen, {
                ...VIEW_MOTION_PROPS,
                onReturnHome: handleReturnHome
            }, "thank-you", false, {
                fileName: "[project]/components/app/view-controller.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/app/view-controller.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(ViewController, "xA3gPQ1jXPj5vckoeD+ra0BKUZo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$D4V9wQRc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c4 = ViewController;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "MotionWelcomeView");
__turbopack_context__.k.register(_c1, "MotionValidationView");
__turbopack_context__.k.register(_c2, "MotionSessionView");
__turbopack_context__.k.register(_c3, "MotionThankYouScreen");
__turbopack_context__.k.register(_c4, "ViewController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/livekit/toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Warning.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Toaster(param) {
    let { ...props } = param;
    _s();
    const { theme = 'system' } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        position: "top-center",
        icons: {
            warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningIcon"], {
                weight: "bold"
            }, void 0, false, {
                fileName: "[project]/components/livekit/toaster.tsx",
                lineNumber: 16,
                columnNumber: 18
            }, void 0)
        },
        style: {
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)'
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/components/livekit/toaster.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Toaster, "bbCbBsvL7+LiaR8ofHlkcwveh/Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app/app.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "App",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-lNrIMTWQ.mjs [app-client] (ecmascript) <export R as RoomAudioRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__StartAudio$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-lNrIMTWQ.mjs [app-client] (ecmascript) <export q as StartAudio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/session-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$view$2d$controller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/app/view-controller.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/livekit/toaster.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function App(param) {
    let { appConfig } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$session$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        appConfig: appConfig,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "grid h-svh grid-cols-1 place-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$app$2f$view$2d$controller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewController"], {}, void 0, false, {
                    fileName: "[project]/components/app/app.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/app/app.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__StartAudio$3e$__["StartAudio"], {
                label: "Start Audio"
            }, void 0, false, {
                fileName: "[project]/components/app/app.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$lNrIMTWQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__["RoomAudioRenderer"], {}, void 0, false, {
                fileName: "[project]/components/app/app.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$livekit$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                fileName: "[project]/components/app/app.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/app/app.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d22f3d8a._.js.map