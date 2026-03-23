import { useEffect, useRef, useCallback } from 'react';
import { Room, RoomEvent } from 'livekit-client';
import { useTranscriptions, useChat, useRoomContext } from '@livekit/components-react';
import type { TextStreamData, ReceivedChatMessage } from '@livekit/components-react';

export interface TranscriptEntry {
  id: string;
  timestamp: number;
  speaker: 'user' | 'agent';
  message: string;
}

/**
 * Hook to collect and log transcript of conversation between user and AI agent
 * This should be used within a component that has RoomContext available
 * 
 * Handles incremental transcription chunks by merging them by stream ID.
 * LiveKit sends transcriptions in chunks with the same streamInfo.id - we merge these.
 */
export function useTranscriptLogger(room: Room | null, isSessionActive: boolean) {
  const transcriptions: TextStreamData[] = useTranscriptions();
  const chat = useChat();
  const roomContext = useRoomContext();
  const activeRoom = room || roomContext;

  // Use Map to track transcriptions by stream ID (for merging chunks)
  const transcriptMapRef = useRef<Map<string, TranscriptEntry>>(new Map());
  const processedChatIdsRef = useRef<Set<string>>(new Set());
  const hasLoggedRef = useRef(false);

  // Process transcriptions - these come in incremental chunks that need merging
  useEffect(() => {
    if (!isSessionActive || !activeRoom || transcriptions.length === 0) {
      return;
    }

    transcriptions.forEach((transcription: TextStreamData) => {
      // Use streamInfo.id as the key to merge chunks from the same utterance
      const streamId = transcription.streamInfo?.id || `stream_${Date.now()}_${Math.random()}`;
      const isLocal = transcription.participantInfo?.identity === activeRoom.localParticipant.identity;
      const speaker: 'user' | 'agent' = isLocal ? 'user' : 'agent';
      const text = transcription.text || '';
      const timestamp = transcription.streamInfo?.timestamp || Date.now();
      
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
        
        const shouldUpdate = 
          text.length > existingEntry.message.length || // New text is longer
          (text.length >= existingEntry.message.length * 0.9 && text !== existingEntry.message); // Similar length but different (likely final/corrected)
        
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
            timestamp: new Date(timestamp).toISOString(),
          });
        }
      } else {
        // New stream - create entry
        const entry: TranscriptEntry = {
          id: streamId,
          timestamp,
          speaker,
          message: text,
        };
        transcriptMapRef.current.set(streamId, entry);
        
        console.log('[useTranscriptLogger] New transcription stream started', {
          streamId,
          speaker,
          messageLength: text.length,
          messagePreview: text.substring(0, 50),
          timestamp: new Date(timestamp).toISOString(),
        });
      }
    });
  }, [transcriptions, activeRoom, isSessionActive]);

  // Process chat messages - these are complete messages
  useEffect(() => {
    if (!isSessionActive || !activeRoom || !chat.chatMessages || chat.chatMessages.length === 0) {
      return;
    }

    chat.chatMessages.forEach((msg: ReceivedChatMessage) => {
      // Skip if we've already processed this chat message
      if (processedChatIdsRef.current.has(msg.id)) {
        return;
      }

      const isLocal = msg.from?.isLocal;
      const speaker: 'user' | 'agent' = isLocal ? 'user' : 'agent';
      const messageText = msg.message || '';
      
      if (!messageText || messageText.trim().length === 0) {
        return;
      }

      // Chat messages are complete, use unique ID
      const chatId = `chat_${msg.id}`;
      const entry: TranscriptEntry = {
        id: chatId,
        timestamp: msg.timestamp,
        speaker,
        message: messageText,
      };
      
      transcriptMapRef.current.set(chatId, entry);
      processedChatIdsRef.current.add(msg.id);
      
      console.log('[useTranscriptLogger] Chat message collected', {
        id: msg.id,
        speaker,
        messageLength: messageText.length,
        messagePreview: messageText.substring(0, 50),
        timestamp: new Date(msg.timestamp).toISOString(),
      });
    });
  }, [chat.chatMessages, activeRoom, isSessionActive]);

  const logTranscript = useCallback(async () => {
    // Prevent duplicate logging
    if (hasLoggedRef.current) {
      console.log('[useTranscriptLogger] Transcript already logged, skipping upload');
      return { status: 'skipped' as const, transcript: [] as TranscriptEntry[] };
    }

    // Before logging, do one final update from current transcriptions
    // to ensure we have the latest state
    if (transcriptions && transcriptions.length > 0 && activeRoom) {
      transcriptions.forEach((transcription: TextStreamData) => {
        const streamId = transcription.streamInfo?.id || `stream_${Date.now()}_${Math.random()}`;
        const text = transcription.text || '';
        const timestamp = transcription.streamInfo?.timestamp || Date.now();
        
        if (text && text.trim().length > 0) {
          const existingEntry = transcriptMapRef.current.get(streamId);
          if (existingEntry) {
            // Update with latest text if it's different/longer
            if (text.length >= existingEntry.message.length) {
              existingEntry.message = text;
              existingEntry.timestamp = timestamp;
            }
          } else {
            // Create new entry for any missed transcriptions
            const isLocal = transcription.participantInfo?.identity === activeRoom.localParticipant.identity;
            const speaker: 'user' | 'agent' = isLocal ? 'user' : 'agent';
            transcriptMapRef.current.set(streamId, {
              id: streamId,
              timestamp,
              speaker,
              message: text,
            });
          }
        }
      });
    }

    // Convert map to array and sort by timestamp
    const transcriptArray = Array.from(transcriptMapRef.current.values());
    const sortedTranscript = transcriptArray.sort(
      (a, b) => a.timestamp - b.timestamp
    );

    if (sortedTranscript.length === 0) {
      console.warn('[useTranscriptLogger] No transcript data collected, skipping upload');
      hasLoggedRef.current = true;
      return { status: 'empty' as const, transcript: sortedTranscript };
    }

    const roomName = activeRoom?.name ?? '';
    let jobId: string | undefined;
    let userId: string | null | undefined = undefined;

    if (roomName.includes('_')) {
      const [parsedJobId, parsedUserId] = roomName.split('_', 2);
      jobId = parsedJobId;
      userId = parsedUserId && parsedUserId !== 'null' ? parsedUserId : null;
    }

    if (!jobId) {
      console.error('[useTranscriptLogger] Unable to determine job ID from room name', {
        roomName,
      });
      hasLoggedRef.current = true;
      return { status: 'missing_job' as const, transcript: sortedTranscript };
    }

    console.log('[useTranscriptLogger] Uploading transcript', {
      jobId,
      userId,
      messageCount: sortedTranscript.length,
    });

    try {
      const response = await fetch('/api/transcript', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobId,
          userId,
          transcript: sortedTranscript,
        }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        console.error('[useTranscriptLogger] Failed to upload transcript', {
          status: response.status,
          statusText: response.statusText,
          error,
        });
        hasLoggedRef.current = true;
        return { status: 'error' as const, transcript: sortedTranscript, error };
      }

      const payload = await response.json();
      console.log('[useTranscriptLogger] Transcript uploaded successfully', {
        jobId,
        userId,
        transcriptId: payload?.transcript?.id,
      });

      hasLoggedRef.current = true;
      return { status: 'saved' as const, transcript: sortedTranscript, response: payload };
    } catch (error) {
      console.error('[useTranscriptLogger] Unexpected error while uploading transcript', {
        error: error instanceof Error ? error.message : error,
      });
      hasLoggedRef.current = true;
      return { status: 'error' as const, transcript: sortedTranscript, error };
    }
  }, [activeRoom, transcriptions]);

  // Log transcript when call ends
  useEffect(() => {
    if (!activeRoom) {
      return;
    }

    const handleDisconnected = () => {
      console.log('[useTranscriptLogger] Room disconnected, waiting for final transcriptions...');
      // Wait a bit longer to ensure all final transcriptions are received
      // Final transcriptions might arrive slightly after disconnect
      setTimeout(() => {
        console.log('[useTranscriptLogger] Logging transcript after disconnect delay');
        logTranscript().catch((error) => {
          console.error('[useTranscriptLogger] Error logging transcript on disconnect', {
            error: error instanceof Error ? error.message : error,
          });
        });
      }, 1000);
    };

    activeRoom.on(RoomEvent.Disconnected, handleDisconnected);

    return () => {
      activeRoom.off(RoomEvent.Disconnected, handleDisconnected);
    };
  }, [activeRoom, logTranscript]);

  const resetTranscript = () => {
    transcriptMapRef.current.clear();
    processedChatIdsRef.current.clear();
    hasLoggedRef.current = false;
    console.log('[useTranscriptLogger] Transcript reset');
  };

  // Reset when session starts
  useEffect(() => {
    if (isSessionActive) {
      hasLoggedRef.current = false;
      console.log('[useTranscriptLogger] Session active, transcript logging enabled', {
        currentTranscriptEntries: transcriptMapRef.current.size,
      });
    }
  }, [isSessionActive]);

  // Expose logTranscript so it can be called manually (e.g., when endSession is called)
  return {
    logTranscript,
    resetTranscript,
    transcript: Array.from(transcriptMapRef.current.values()),
  };
}
