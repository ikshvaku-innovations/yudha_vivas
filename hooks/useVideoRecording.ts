import { useEffect, useRef, useState, useCallback } from 'react';

interface UseVideoRecordingOptions {
  enabled: boolean;
  onRecordingReady?: (blob: Blob) => void;
}

interface UseVideoRecordingReturn {
  isRecording: boolean;
  recordedBlob: Blob | null;
  startRecording: () => void;
  stopRecording: () => Promise<Blob | null>;
  error: Error | null;
}

/**
 * Hook to record user's video and audio tracks as a single stream using MediaRecorder API
 * Uses getUserMedia to capture audio and video directly, independent of LiveKit tracks
 * Starts recording automatically when enabled is true
 */
export function useVideoRecording({
  enabled,
  onRecordingReady,
}: UseVideoRecordingOptions): UseVideoRecordingReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const hasStartedRef = useRef(false);
  const stopPromiseRef = useRef<{ resolve: (blob: Blob | null) => void } | null>(null);
  const mimeTypeRef = useRef<string>('video/webm');
  const dataRequestTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Get user media streams (audio and video) and combine them
   */
  const getUserMediaStream = useCallback(async (): Promise<MediaStream | null> => {
    try {
      console.log('[useVideoRecording] Requesting user media streams');

      // Request both audio and video from user's device
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          frameRate: { ideal: 30 },
        },
      });

      console.log('[useVideoRecording] User media streams obtained', {
        audioTracks: stream.getAudioTracks().length,
        videoTracks: stream.getVideoTracks().length,
        audioTrackLabel: stream.getAudioTracks()[0]?.label,
        videoTrackLabel: stream.getVideoTracks()[0]?.label,
      });

      return stream;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to access user media');
      console.error('[useVideoRecording] Error accessing user media', error);
      setError(error);
      return null;
    }
  }, []);

  /**
   * Start recording with MediaRecorder API
   */
  const startRecording = useCallback(async () => {
    if (hasStartedRef.current || isRecording || !enabled) {
      console.log('[useVideoRecording] Recording already started or disabled', {
        hasStarted: hasStartedRef.current,
        isRecording,
        enabled,
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
        stream.getTracks().forEach((track) => track.stop());
        throw new Error('Missing audio or video tracks');
      }

      console.log('[useVideoRecording] Starting MediaRecorder with combined stream');

      // Determine the best supported MIME type
      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus')
        ? 'video/webm;codecs=vp9,opus'
        : MediaRecorder.isTypeSupported('video/webm;codecs=vp8,opus')
          ? 'video/webm;codecs=vp8,opus'
          : MediaRecorder.isTypeSupported('video/webm')
            ? 'video/webm'
            : MediaRecorder.isTypeSupported('video/mp4')
              ? 'video/mp4'
              : 'video/webm';

      mimeTypeRef.current = mimeType;
      streamRef.current = stream;

      // Create MediaRecorder with the combined stream
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: 2500000, // 2.5 Mbps
        audioBitsPerSecond: 128000, // 128 kbps
      });

      chunksRef.current = [];

      // Helper function to create blob from chunks
      const createBlobFromChunks = () => {
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
        const chunksCopy = [...chunksRef.current];
        const mimeType = mimeTypeRef.current;
        
        const blob = new Blob(chunksCopy, { type: mimeType });
        console.log('[useVideoRecording] Blob created', {
          size: blob.size,
          type: blob.type,
          sizeMB: (blob.size / (1024 * 1024)).toFixed(2),
          chunksCount: chunksCopy.length,
          blobType: blob.type,
        });

        // Verify blob is valid
        if (blob.size === 0) {
          console.error('[useVideoRecording] Created blob is empty!', {
            chunksCount: chunksCopy.length,
            mimeType,
          });
        }

        setRecordedBlob(blob);
        setIsRecording(false);
        onRecordingReady?.(blob);

        // Resolve the stop promise if it exists
        if (stopPromiseRef.current) {
          stopPromiseRef.current.resolve(blob);
          stopPromiseRef.current = null;
        }

        // Clear chunks AFTER blob is created and set
        chunksRef.current = [];

        // Stop all tracks after blob is created
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => {
            track.stop();
            console.log('[useVideoRecording] Stopped track after blob creation', {
              kind: track.kind,
              label: track.label,
            });
          });
          streamRef.current = null;
        }
      };

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunksRef.current.push(event.data);
          console.log('[useVideoRecording] Data chunk received', {
            size: event.data.size,
            totalChunks: chunksRef.current.length,
            totalSize: chunksRef.current.reduce((sum, chunk) => sum + chunk.size, 0),
          });
        } else {
          console.warn('[useVideoRecording] Received empty or null data chunk', {
            hasData: !!event.data,
            dataSize: event.data?.size || 0,
          });
        }
      };

      mediaRecorder.onstop = () => {
        console.log('[useVideoRecording] Recording stopped event fired', {
          totalChunks: chunksRef.current.length,
          mimeType: mimeTypeRef.current,
          totalSize: chunksRef.current.reduce((sum, chunk) => sum + chunk.size, 0),
        });

        // Clear any pending timeout
        if (dataRequestTimeoutRef.current) {
          clearTimeout(dataRequestTimeoutRef.current);
          dataRequestTimeoutRef.current = null;
        }

        // Wait longer to ensure MediaRecorder has fully finalized the recording
        // MediaRecorder needs time to finalize the container format and metadata
        // This is critical for creating playable video files
        setTimeout(() => {
          console.log('[useVideoRecording] Creating blob after stop event (delayed)', {
            totalChunks: chunksRef.current.length,
            totalSize: chunksRef.current.reduce((sum, chunk) => sum + chunk.size, 0),
            mimeType: mimeTypeRef.current,
          });

          // Ensure we have chunks before creating blob
          if (chunksRef.current.length === 0) {
            console.error('[useVideoRecording] No data chunks available after stop event');
            createBlobFromChunks(); // Will handle error case
            return;
          }

          // Verify chunks are valid (not all empty)
          const hasValidChunks = chunksRef.current.some(chunk => chunk.size > 0);
          if (!hasValidChunks) {
            console.error('[useVideoRecording] All chunks are empty!');
            createBlobFromChunks(); // Will handle error case
            return;
          }

          createBlobFromChunks();
        }, 500); // Wait 500ms to ensure MediaRecorder fully finalizes the recording
      };

      mediaRecorder.onerror = (event) => {
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
      };

      mediaRecorderRef.current = mediaRecorder;
      
      // Start recording, collecting data every second
      // Using 1000ms timeslice - data will be available periodically
      // Smaller timeslice = more frequent chunks but more overhead
      mediaRecorder.start(1000);
      
      setIsRecording(true);
      hasStartedRef.current = true;
      setError(null);
      
      // Verify recording state after a brief delay
      setTimeout(() => {
        if (mediaRecorderRef.current) {
          console.log('[useVideoRecording] Recording state check after start', {
            state: mediaRecorderRef.current.state,
            mimeType: mediaRecorderRef.current.mimeType,
            chunksCaptured: chunksRef.current.length,
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
              streamRef.current.getTracks().forEach((track) => track.stop());
              streamRef.current = null;
            }
          }
        }
      }, 500);
      
      console.log('[useVideoRecording] Recording started successfully', {
        mimeType,
        audioTracks: audioTracks.length,
        videoTracks: videoTracks.length,
        streamId: stream.id,
      });
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to start recording');
      console.error('[useVideoRecording] Error starting recording', error);
      setError(error);
      setIsRecording(false);
      hasStartedRef.current = false;

      // Clean up stream if we got one
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    }
  }, [enabled, isRecording, getUserMediaStream, onRecordingReady]);

  /**
   * Stop recording and return the blob
   */
  const stopRecording = useCallback((): Promise<Blob | null> => {
    return new Promise((resolve) => {
      console.log('[useVideoRecording] stopRecording called', {
        hasMediaRecorder: !!mediaRecorderRef.current,
        recorderState: mediaRecorderRef.current?.state,
        isRecording,
        hasStarted: hasStartedRef.current,
        hasExistingBlob: !!recordedBlob,
        existingBlobSize: recordedBlob?.size,
        chunksCount: chunksRef.current.length,
      });

      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        console.log('[useVideoRecording] Stopping active MediaRecorder', {
          state: mediaRecorderRef.current.state,
          currentChunks: chunksRef.current.length,
          totalSize: chunksRef.current.reduce((sum, chunk) => sum + chunk.size, 0),
        });

        // Store the resolve function to be called in onstop handler
        stopPromiseRef.current = { resolve };

        // Request final data chunk BEFORE stopping
        // This ensures we capture the last segment of recording
        if (mediaRecorderRef.current.state === 'recording') {
          console.log('[useVideoRecording] Requesting final data chunk before stopping');
          try {
            mediaRecorderRef.current.requestData();
            // Give a moment for the data to be processed
            dataRequestTimeoutRef.current = setTimeout(() => {
              // Now stop the recorder
              stopMediaRecorder();
            }, 100);
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
            console.log('[useVideoRecording] Calling MediaRecorder.stop()', {
              state: mediaRecorderRef.current?.state,
              chunksBeforeStop: chunksRef.current.length,
            });
            
            if (mediaRecorderRef.current) {
              mediaRecorderRef.current.stop();
              console.log('[useVideoRecording] MediaRecorder.stop() called successfully');
            }
          } catch (err) {
            console.error('[useVideoRecording] Error calling MediaRecorder.stop()', err);
            // Even if stop fails, try to create blob from existing chunks
            setTimeout(() => {
              if (stopPromiseRef.current) {
                let finalBlob = recordedBlob;
                if (!finalBlob && chunksRef.current.length > 0) {
                  finalBlob = new Blob(chunksRef.current, { type: mimeTypeRef.current });
                  setRecordedBlob(finalBlob);
                }
                stopPromiseRef.current.resolve(finalBlob);
                stopPromiseRef.current = null;
              }
            }, 500);
          }
        }

        // Add a timeout in case onstop doesn't fire (shouldn't happen, but safety)
        const timeout = setTimeout(() => {
          if (stopPromiseRef.current && stopPromiseRef.current.resolve === resolve) {
            console.warn('[useVideoRecording] Stop promise timeout after 5s, resolving with existing blob or chunks', {
              hasExistingBlob: !!recordedBlob,
              chunksCount: chunksRef.current.length,
              totalSize: chunksRef.current.reduce((sum, chunk) => sum + chunk.size, 0),
            });
            
            // Try to create blob from existing chunks if available
            let finalBlob = recordedBlob;
            if (!finalBlob && chunksRef.current.length > 0) {
              finalBlob = new Blob(chunksRef.current, { type: mimeTypeRef.current });
              console.log('[useVideoRecording] Created blob from chunks after timeout', {
                size: finalBlob.size,
                type: finalBlob.type,
              });
              setRecordedBlob(finalBlob);
            }
            
            stopPromiseRef.current.resolve(finalBlob);
            stopPromiseRef.current = null;
          }
        }, 5000);

        // Clear timeout when resolved
        const originalResolve = stopPromiseRef.current?.resolve;
        if (stopPromiseRef.current) {
          stopPromiseRef.current.resolve = (blob: Blob | null) => {
            clearTimeout(timeout);
            if (dataRequestTimeoutRef.current) {
              clearTimeout(dataRequestTimeoutRef.current);
              dataRequestTimeoutRef.current = null;
            }
            if (originalResolve) {
              originalResolve(blob);
            }
          };
        }
      } else {
        // No active recording, return existing blob if any
        console.log('[useVideoRecording] No active MediaRecorder found', {
          hasExistingBlob: !!recordedBlob,
          existingBlobSize: recordedBlob?.size,
          chunksCount: chunksRef.current.length,
        });
        
        // If we have chunks but no blob, try to create one
        if (!recordedBlob && chunksRef.current.length > 0) {
          const blob = new Blob(chunksRef.current, { type: mimeTypeRef.current });
          console.log('[useVideoRecording] Created blob from existing chunks', {
            size: blob.size,
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
            streamRef.current.getTracks().forEach((track) => {
              track.stop();
              console.log('[useVideoRecording] Stopped track', {
                kind: track.kind,
                label: track.label,
              });
            });
            streamRef.current = null;
          }
        }
        hasStartedRef.current = false;
    });
  }, [recordedBlob, isRecording, mimeTypeRef]);

  // Auto-start recording when enabled changes to true
  useEffect(() => {
    if (enabled && !hasStartedRef.current && !isRecording) {
      console.log('[useVideoRecording] Auto-starting recording (enabled changed)', {
        enabled,
        hasStarted: hasStartedRef.current,
        isRecording,
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
        error: error?.message,
      });
    }
  }, [enabled, isRecording, startRecording, stopRecording, error]);

  // Cleanup on unmount - stop tracks after recording completes
  useEffect(() => {
    return () => {
      console.log('[useVideoRecording] Cleanup: stopping recording and tracks');
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        console.log('[useVideoRecording] Stopping MediaRecorder during cleanup');
        mediaRecorderRef.current.stop();
        // Give it a moment to process the stop
        setTimeout(() => {
          if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => {
              track.stop();
              console.log('[useVideoRecording] Stopped track during cleanup', {
                kind: track.kind,
                label: track.label,
              });
            });
            streamRef.current = null;
          }
        }, 500);
      } else {
        // Stop tracks immediately if recorder is already inactive
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => {
            track.stop();
            console.log('[useVideoRecording] Stopped track during cleanup', {
              kind: track.kind,
              label: track.label,
            });
          });
          streamRef.current = null;
        }
      }
      hasStartedRef.current = false;
    };
  }, []);

  return {
    isRecording,
    recordedBlob,
    startRecording,
    stopRecording,
    error,
  };
}

