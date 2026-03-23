'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useRoomContext, useVoiceAssistant } from '@livekit/components-react';
import type { AppConfig } from '@/app-config';
import { LoadingScreen } from '@/components/app/loading-screen';
import { useSession } from '@/components/app/session-provider';
import { TileLayout } from '@/components/app/tile-layout';
import {
  AgentControlBar,
  type ControlBarControls,
} from '@/components/livekit/agent-control-bar/agent-control-bar';
import { ConfirmDialog } from '@/components/livekit/confirm-dialog';
import { useConnectionTimeout } from '@/hooks/useConnectionTimout';
import { useDebugMode } from '@/hooks/useDebug';
import { useTranscriptLogger } from '@/hooks/useTranscript';
import { useVideoRecording } from '@/hooks/useVideoRecording';
import { cn } from '@/lib/utils';
import { uploadVideoToGCS } from '@/lib/upload-video';

const MotionBottom = motion.create('div');

const IN_DEVELOPMENT = process.env.NODE_ENV !== 'production';
const BOTTOM_VIEW_MOTION_PROPS = {
  variants: {
    visible: {
      opacity: 1,
      translateY: '0%',
    },
    hidden: {
      opacity: 0,
      translateY: '100%',
    },
  },
  initial: 'hidden' as const,
  animate: 'visible' as const,
  exit: 'hidden' as const,
  transition: {
    duration: 0.3,
    delay: 0.5,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number], // easeOut cubic-bezier
  },
} as const;

interface FadeProps {
  top?: boolean;
  bottom?: boolean;
  className?: string;
}

export function Fade({ top = false, bottom = false, className }: FadeProps) {
  return (
    <div
      className={cn(
        'from-background pointer-events-none h-4 bg-linear-to-b to-transparent',
        top && 'bg-linear-to-b',
        bottom && 'bg-linear-to-t',
        className
      )}
    />
  );
}
interface SessionViewProps {
  appConfig: AppConfig;
  onEndInterview?: () => void;
  onCallEnding?: () => void;
}

export const SessionView = ({
  appConfig,
  onEndInterview,
  onCallEnding,
  ...props
}: React.ComponentProps<'section'> & SessionViewProps) => {
  useConnectionTimeout(200_000);
  useDebugMode({ enabled: IN_DEVELOPMENT });
  const [showEndCallDialog, setShowEndCallDialog] = useState(false);
  const [hasAiStartedSpeaking, setHasAiStartedSpeaking] = useState(false);
  const hasSpokenRef = useRef(false);

  const { state: agentState } = useVoiceAssistant();
  const room = useRoomContext();
  const { isSessionActive, hasVideoInsights } = useSession();

  // Collect and log transcript
  const { logTranscript } = useTranscriptLogger(room, isSessionActive);

  // Record video if has_video_insights is enabled
  // Uses MediaRecorder API with getUserMedia, independent of LiveKit tracks
  const { isRecording, recordedBlob, stopRecording, error: recordingError } = useVideoRecording({
    enabled: hasVideoInsights && isSessionActive,
  });

  // Debug logging for video recording
  useEffect(() => {
    console.log('[SessionView] Video recording state', {
      hasVideoInsights,
      isSessionActive,
      enabled: hasVideoInsights && isSessionActive,
      isRecording,
      hasBlob: !!recordedBlob,
      blobSize: recordedBlob?.size,
      blobType: recordedBlob?.type,
      recordingError: recordingError?.message,
      timestamp: new Date().toISOString(),
    });

    // Log warning if recording should be enabled but isn't recording
    if (hasVideoInsights && isSessionActive && !isRecording && !recordedBlob && !recordingError) {
      console.warn('[SessionView] Recording should be active but is not recording', {
        hasVideoInsights,
        isSessionActive,
        enabled: hasVideoInsights && isSessionActive,
        isRecording,
      });
    }

    // Log if there's a recording error
    if (recordingError) {
      console.error('[SessionView] Recording error detected', {
        error: recordingError.message,
        hasVideoInsights,
        isSessionActive,
      });
    }
  }, [hasVideoInsights, isSessionActive, isRecording, recordedBlob, recordingError]);

  // Track when AI starts speaking for the first time
  useEffect(() => {
    if (agentState === 'speaking' && !hasSpokenRef.current) {
      hasSpokenRef.current = true;
      setHasAiStartedSpeaking(true);
    }
  }, [agentState]);

  const controls: ControlBarControls = {
    leave: true,
    microphone: true,
    camera: false, // Camera is compulsory and always on during interview
    chat: false,
  };

  const handleEndCallClick = () => {
    setShowEndCallDialog(true);
  };

  const handleConfirmEndCall = async () => {
    console.log('[SessionView] Call ending, waiting for final transcriptions...');
    setShowEndCallDialog(false);
    onCallEnding?.();

    if (room) {
      console.log('[SessionView] Disabling local media devices');
      await Promise.allSettled([
        room.localParticipant.setMicrophoneEnabled(false).catch((error) => {
          console.error('[SessionView] Failed to disable microphone', {
            error: error instanceof Error ? error.message : error,
          });
        }),
        room.localParticipant.setCameraEnabled(false).catch((error) => {
          console.error('[SessionView] Failed to disable camera', {
            error: error instanceof Error ? error.message : error,
          });
        }),
      ]);

      console.log('[SessionView] Disconnecting from LiveKit room');
      try {
        await room.disconnect(true);
      } catch (error) {
        console.error('[SessionView] Failed to disconnect from room', {
          error: error instanceof Error ? error.message : error,
        });
      }
    }

    // Stop video recording if it's active and wait for blob
    let finalBlob: Blob | null = recordedBlob;
    console.log('[SessionView] Preparing to stop recording', {
      isRecording,
      hasExistingBlob: !!recordedBlob,
      existingBlobSize: recordedBlob?.size,
      recordingError: recordingError?.message,
    });

    if (isRecording) {
      console.log('[SessionView] Stopping active video recording');
      try {
        finalBlob = await stopRecording();
        console.log('[SessionView] Recording stopped, blob received', {
          hasBlob: !!finalBlob,
          blobSize: finalBlob?.size,
          blobType: finalBlob?.type,
        });
      } catch (error) {
        console.error('[SessionView] Error stopping recording', {
          error: error instanceof Error ? error.message : String(error),
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
            blobSize: finalBlob.size,
          });
        }
      } catch (error) {
        console.warn('[SessionView] Could not retrieve blob from stopRecording', error);
      }
    }

    // Allow a short delay to capture final transcription chunks before upload.
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const result = await logTranscript();

      if (result?.status === 'error') {
        console.error('[SessionView] Failed to store transcript', {
          error: result.error,
        });
      }
    } catch (error) {
      console.error('[SessionView] Unexpected error while storing transcript', {
        error: error instanceof Error ? error.message : error,
      });
    }

    // Upload video if recording was enabled and we have a blob
    // Wait a bit more to ensure blob is ready (state update from hook)
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Use recordedBlob (which may have been updated after stopping) or finalBlob
    const videoBlob = recordedBlob || finalBlob;
    console.log('[SessionView] Checking video upload conditions', {
      hasVideoInsights,
      hasVideoBlob: !!videoBlob,
      blobSize: videoBlob?.size,
      blobType: videoBlob?.type,
      wasRecording: isRecording,
    });
    
    if (hasVideoInsights && videoBlob) {
      try {
        console.log('[SessionView] Uploading video recording', {
          blobSize: videoBlob.size,
          blobType: videoBlob.type,
        });

        // Get session ID from URL
        const currentUrl = new URL(window.location.href);
        const sessionId = currentUrl.searchParams.get('session');

        if (!sessionId) {
          console.error('[SessionView] No session ID found in URL for video upload');
        } else {
          // Upload video directly to Google Cloud Storage
          const result = await uploadVideoToGCS({
            videoBlob,
            sessionId,
            onProgress: (progress) => {
              console.log('[SessionView] Upload progress', {
                progress: `${progress.toFixed(1)}%`,
              });
            },
          });

          console.log('[SessionView] Video uploaded successfully', {
            file_path: result.file_path,
            file_url: result.file_url,
            file_size: result.file_size,
          });
        }
      } catch (error) {
        console.error('[SessionView] Unexpected error while uploading video', {
          error: error instanceof Error ? error.message : error,
        });
      }
    } else if (hasVideoInsights && !videoBlob) {
      console.warn('[SessionView] Video recording was enabled but no blob was recorded');
    }

    // Log recording errors if any
    if (recordingError) {
      console.error('[SessionView] Video recording error', {
        error: recordingError.message,
      });
    }

    onEndInterview?.();
  };

  return (
    <section className="bg-white relative z-10 h-full w-full overflow-hidden" {...props}>
      <AnimatePresence mode="wait">
        {!hasAiStartedSpeaking && <LoadingScreen key="waiting-for-ai" />}
        {hasAiStartedSpeaking && (
          <motion.div
            key="session"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            {/* Tile Layout */}
            <TileLayout />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom - Only show after AI has started speaking */}
      {hasAiStartedSpeaking && (
        <MotionBottom
          {...BOTTOM_VIEW_MOTION_PROPS}
          className="fixed inset-x-3 bottom-0 z-50 md:inset-x-12"
        >
          <div className="relative mx-auto max-w-2xl pb-3 md:pb-12">
            <Fade bottom className="absolute inset-x-0 top-0 h-4 -translate-y-full" />
            <AgentControlBar controls={controls} onLeave={handleEndCallClick} />
          </div>
        </MotionBottom>
      )}

      {/* End Call Confirmation Dialog */}
      <ConfirmDialog
        open={showEndCallDialog}
        onOpenChange={setShowEndCallDialog}
        onConfirm={handleConfirmEndCall}
        title="End Call"
        description="Are you sure you want to end the call? This action cannot be undone."
        confirmText="End Call"
        cancelText="Cancel"
      />
    </section>
  );
};
