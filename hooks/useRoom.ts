import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Room, RoomEvent, TokenSource } from 'livekit-client';
import { AppConfig } from '@/app-config';
import { toastAlert } from '@/components/livekit/alert-toast';

export function useRoom(appConfig: AppConfig) {
  const aborted = useRef(false);
  const room = useMemo(() => new Room(), []);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [hasVideoInsights, setHasVideoInsights] = useState(false);

  useEffect(() => {
    function onDisconnected() {
      setIsSessionActive(false);
    }

    function onMediaDevicesError(error: Error) {
      toastAlert({
        title: 'Encountered an error with your media devices',
        description: `${error.name}: ${error.message}`,
      });
    }

    room.on(RoomEvent.Disconnected, onDisconnected);
    room.on(RoomEvent.MediaDevicesError, onMediaDevicesError);

    return () => {
      room.off(RoomEvent.Disconnected, onDisconnected);
      room.off(RoomEvent.MediaDevicesError, onMediaDevicesError);
    };
  }, [room]);

  useEffect(() => {
    return () => {
      aborted.current = true;
      room.disconnect();
    };
  }, [room]);

  const tokenSource = useMemo(
    () =>
      TokenSource.custom(async () => {
        console.log('[useRoom] TokenSource: Starting token fetch');
        
        const url = new URL(
          process.env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT ?? '/api/connection-details',
          window.location.origin
        );

        // Extract session parameter from current page URL and add it to the API endpoint URL
        const currentUrl = new URL(window.location.href);
        const sessionParam = currentUrl.searchParams.get('session');
        console.log('[useRoom] TokenSource: Extracting session from URL', {
          currentUrl: window.location.href,
          sessionParam,
          hasSession: !!sessionParam,
        });

        if (sessionParam) {
          url.searchParams.set('session', sessionParam);
          console.log('[useRoom] TokenSource: Session parameter added to API URL', {
            apiUrl: url.toString(),
            session: sessionParam,
          });
        } else {
          console.warn('[useRoom] TokenSource: No session parameter found in URL', {
            currentUrl: window.location.href,
          });
        }

        const requestBody = {
          room_config: appConfig.agentName
            ? {
                agents: [{ agent_name: appConfig.agentName }],
              }
            : undefined,
        };
        console.log('[useRoom] TokenSource: Making request to API', {
          url: url.toString(),
          method: 'POST',
          agentName: appConfig.agentName,
          hasRoomConfig: !!requestBody.room_config,
        });

        try {
          const res = await fetch(url.toString(), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Sandbox-Id': appConfig.sandboxId ?? '',
            },
            body: JSON.stringify(requestBody),
          });

          console.log('[useRoom] TokenSource: API response received', {
            status: res.status,
            statusText: res.statusText,
            ok: res.ok,
          });

          if (!res.ok) {
            const errorText = await res.text();
            console.error('[useRoom] TokenSource: API request failed', {
              status: res.status,
              statusText: res.statusText,
              error: errorText,
            });
            throw new Error(`Failed to fetch connection details: ${res.statusText}`);
          }

          const connectionDetails = await res.json() as {
            serverUrl: string;
            roomName: string;
            participantName: string;
            participantToken: string;
            has_video_insights?: boolean;
          };
          console.log('[useRoom] TokenSource: Connection details received', {
            serverUrl: connectionDetails.serverUrl,
            roomName: connectionDetails.roomName,
            participantName: connectionDetails.participantName,
            hasToken: !!connectionDetails.participantToken,
            tokenLength: connectionDetails.participantToken?.length,
            has_video_insights: connectionDetails.has_video_insights,
          });

          // Store has_video_insights
          setHasVideoInsights(connectionDetails.has_video_insights ?? false);

          return connectionDetails;
        } catch (error) {
          console.error('[useRoom] TokenSource: Error fetching connection details', {
            error,
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
          });
          throw new Error('Error fetching connection details!');
        }
      }),
    [appConfig]
  );

  const startSession = useCallback(() => {
    console.log('[useRoom] startSession: Starting session', {
      roomState: room.state,
      isSessionActive,
    });
    setIsSessionActive(true);

    if (room.state === 'disconnected') {
      const { isPreConnectBufferEnabled } = appConfig;
      console.log('[useRoom] startSession: Room is disconnected, initiating connection', {
        isPreConnectBufferEnabled,
        agentName: appConfig.agentName,
      });

      Promise.all([
        room.localParticipant.setMicrophoneEnabled(true, undefined, {
          preConnectBuffer: isPreConnectBufferEnabled,
        }),
        room.localParticipant.setCameraEnabled(true),
        tokenSource
          .fetch({ 
            agentName: appConfig.agentName
          })
          .then((connectionDetails: any) => {
            const details = connectionDetails as {
              serverUrl: string;
              roomName: string;
              participantName: string;
              participantToken: string;
            };
            console.log('[useRoom] startSession: Connecting to room', {
              serverUrl: details.serverUrl,
              roomName: details.roomName,
            });
            return room.connect(details.serverUrl, details.participantToken);
          }),
      ]).catch((error) => {
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
          errorMessage: error.message,
        });

        toastAlert({
          title: 'There was an error connecting to the agent',
          description: `${error.name}: ${error.message}`,
        });
      });
    } else {
      console.log('[useRoom] startSession: Room is not disconnected, skipping connection', {
        roomState: room.state,
      });
    }
  }, [room, appConfig, tokenSource, isSessionActive]);

  const endSession = useCallback(() => {
    setIsSessionActive(false);
  }, []);

  return { room, isSessionActive, hasVideoInsights, startSession, endSession };
}
