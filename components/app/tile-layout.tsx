import React, { useMemo } from 'react';
import { Track } from 'livekit-client';
import { AnimatePresence, motion } from 'motion/react';
import {
  BarVisualizer,
  type TrackReference,
  VideoTrack,
  useLocalParticipant,
  useTracks,
  useVoiceAssistant,
} from '@livekit/components-react';
import { cn } from '@/lib/utils';

const MotionContainer = motion.create('div');

const ANIMATION_TRANSITION = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 0.8,
} as const;

export function useLocalTrackRef(source: Track.Source) {
  const { localParticipant } = useLocalParticipant();
  const publication = localParticipant.getTrackPublication(source);
  const trackRef = useMemo<TrackReference | undefined>(
    () => (publication ? { source, participant: localParticipant, publication } : undefined),
    [source, publication, localParticipant]
  );
  return trackRef;
}

export function TileLayout() {
  const {
    state: agentState,
    audioTrack: agentAudioTrack,
    videoTrack: agentVideoTrack,
  } = useVoiceAssistant();
  const [screenShareTrack] = useTracks([Track.Source.ScreenShare]);
  const cameraTrack: TrackReference | undefined = useLocalTrackRef(Track.Source.Camera);

  const isCameraEnabled = cameraTrack && !cameraTrack.publication.isMuted;
  const isScreenShareEnabled = screenShareTrack && !screenShareTrack.publication.isMuted;
  const hasSecondTile = isCameraEnabled || isScreenShareEnabled;

  const isAvatar = agentVideoTrack !== undefined;
  const videoWidth = agentVideoTrack?.publication.dimensions?.width ?? 0;
  const videoHeight = agentVideoTrack?.publication.dimensions?.height ?? 0;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center p-4 pt-20 pb-32 md:p-8 md:pt-24 md:pb-48">
      <div className="relative h-full w-full max-w-7xl">
        <div
          className={cn(
            'flex h-full items-center justify-center transition-all duration-500 ease-out',
            hasSecondTile ? 'gap-8 md:gap-12' : 'gap-0'
          )}
        >
          {/* Agent Tile */}
          <AnimatePresence mode="wait">
            {!isAvatar && (
              // Audio Agent
              <MotionContainer
                key="agent-audio"
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={ANIMATION_TRANSITION}
                className={cn(
                  'relative flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 transition-all duration-500',
                  'border border-slate-200 shadow-[0_4px_12px_rgba(15,23,42,0.08)]',
                  hasSecondTile
                    ? 'h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[440px] md:w-[440px] lg:h-[520px] lg:w-[520px]'
                    : 'h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[480px] md:w-[480px] lg:h-[560px] lg:w-[560px]'
                )}
              >
                {/* Audio Visualizer - Nested directly in tile */}
                <motion.div
                  className="relative z-10"
                >
                  <BarVisualizer
                    barCount={5}
                    state={agentState}
                    options={{ minHeight: 8 }}
                    trackRef={agentAudioTrack}
                    className="flex items-center justify-center gap-2 md:gap-3"
                  >
                    <motion.span
                      className={cn(
                        'aspect-square min-h-3 w-3 rounded-full bg-gradient-to-t from-[#1A73E8] to-[#1557B0] sm:min-h-4 sm:w-4 md:min-h-5 md:w-5',
                        'origin-center transition-all duration-200 ease-out',
                        'data-[lk-highlighted=true]:from-[#1557B0] data-[lk-highlighted=true]:to-[#1A73E8]',
                        'data-[lk-muted=true]:from-slate-400 data-[lk-muted=true]:to-slate-500'
                      )}
                      animate={{
                        scaleY: agentState === 'speaking' ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        repeat: agentState === 'speaking' ? Infinity : 0,
                        duration: 0.6,
                      }}
                    />
                  </BarVisualizer>
                </motion.div>
              </MotionContainer>
            )}

            {isAvatar && (
              // Avatar Agent
              <MotionContainer
                key="agent-avatar"
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={ANIMATION_TRANSITION}
                className={cn(
                  'relative overflow-hidden rounded-3xl bg-black border border-slate-200 shadow-[0_4px_12px_rgba(15,23,42,0.08)] transition-all duration-500',
                  hasSecondTile
                    ? 'h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[440px] md:w-[440px] lg:h-[520px] lg:w-[520px]'
                    : 'h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[480px] md:w-[480px] lg:h-[560px] lg:w-[560px]'
                )}
              >
                <VideoTrack
                  width={videoWidth}
                  height={videoHeight}
                  trackRef={agentVideoTrack}
                  className="h-full w-full object-cover"
                />
              </MotionContainer>
            )}
          </AnimatePresence>

          {/* Camera & Screen Share Tile */}
          <AnimatePresence>
            {hasSecondTile && (
              <MotionContainer
                key="user-video"
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={ANIMATION_TRANSITION}
                className="relative h-[280px] w-[280px] overflow-hidden rounded-3xl bg-black border border-slate-200 shadow-[0_4px_12px_rgba(15,23,42,0.08)] transition-all duration-500 sm:h-[360px] sm:w-[360px] md:h-[440px] md:w-[440px] lg:h-[520px] lg:w-[520px]"
              >
                <VideoTrack
                  trackRef={cameraTrack || screenShareTrack}
                  width={(cameraTrack || screenShareTrack)?.publication.dimensions?.width ?? 0}
                  height={(cameraTrack || screenShareTrack)?.publication.dimensions?.height ?? 0}
                  className="h-full w-full object-cover"
                />

                {/* User Label Overlay */}
                <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md md:top-6 md:left-6">
                  <div className="aspect-square h-2 w-2 rounded-full bg-[#1A73E8]" />
                  <span className="text-xs font-medium text-white sm:text-sm">
                    {isScreenShareEnabled ? 'Screen Share' : 'You'}
                  </span>
                </div>
              </MotionContainer>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
