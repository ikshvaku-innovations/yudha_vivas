'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useRoomContext } from '@livekit/components-react';
import { LoadingScreen } from '@/components/app/loading-screen';
import { useSession } from '@/components/app/session-provider';
import { SessionView } from '@/components/app/session-view';
import { ThankYouScreen } from '@/components/app/thank-you-screen';
import { ValidationView } from '@/components/app/validation-view';
import { WelcomeView } from '@/components/app/welcome-view';

const MotionWelcomeView = motion.create(WelcomeView);
const MotionValidationView = motion.create(ValidationView);
const MotionSessionView = motion.create(SessionView);
const MotionThankYouScreen = motion.create(ThankYouScreen);

const VIEW_MOTION_PROPS = {
  variants: {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  },
  initial: 'hidden' as const,
  animate: 'visible' as const,
  exit: 'hidden' as const,
  transition: {
    duration: 0.5,
    ease: [0, 0, 1, 1] as [number, number, number, number],
  },
} as const;

export function ViewController() {
  const room = useRoomContext();
  const isSessionActiveRef = useRef(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [isFinishingSession, setIsFinishingSession] = useState(false);
  const { appConfig, isSessionActive, startSession, endSession } = useSession();

  // animation handler holds a reference to stale isSessionActive value
  isSessionActiveRef.current = isSessionActive;

  // disconnect room after animation completes
  const handleAnimationComplete = () => {
    if (!isSessionActiveRef.current && room.state !== 'disconnected') {
      room.disconnect();
    }
  };

  const handleEndInterview = () => {
    setShowThankYou(true);
    setIsFinishingSession(false);
    endSession();
  };

  const handleCallEnding = () => {
    setIsFinishingSession(true);
  };

  const handleReturnHome = () => {
    setShowThankYou(false);
    setShowValidation(false);
  };

  const handleNext = () => {
    setShowValidation(true);
  };

  const handleStartCall = () => {
    setShowValidation(false);
    startSession();
  };

  return (
    <AnimatePresence mode="wait">
      {/* Wrapping up screen - highest priority */}
      {isFinishingSession && !showThankYou && (
        <LoadingScreen
          key="saving-transcript"
          title="Wrapping up your evaluation..."
          description="Saving your transcript and finishing the evaluation. This only takes a moment."
        />
      )}
      {/* Welcome screen */}
      {!showValidation && !isSessionActive && !showThankYou && !isFinishingSession && (
        <MotionWelcomeView key="welcome" {...VIEW_MOTION_PROPS} onNext={handleNext} />
      )}
      {/* Validation screen */}
      {showValidation && !isSessionActive && !showThankYou && !isFinishingSession && (
        <MotionValidationView
          key="validation"
          {...VIEW_MOTION_PROPS}
          onStartCall={handleStartCall}
        />
      )}
      {/* Session view */}
      {isSessionActive && !showThankYou && !isFinishingSession && (
        <MotionSessionView
          key="session-view"
          {...VIEW_MOTION_PROPS}
          appConfig={appConfig}
          onEndInterview={handleEndInterview}
          onCallEnding={handleCallEnding}
          onAnimationComplete={handleAnimationComplete}
        />
      )}
      {/* Thank you screen */}
      {showThankYou && (
        <MotionThankYouScreen
          key="thank-you"
          {...VIEW_MOTION_PROPS}
          onReturnHome={handleReturnHome}
        />
      )}
    </AnimatePresence>
  );
}
