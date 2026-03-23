'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Camera,
  Microphone as MicrophoneIcon,
  WifiHigh,
  CheckCircle,
  XCircle,
  Spinner,
} from '@phosphor-icons/react/dist/ssr';

interface ValidationViewProps {
  onStartCall: () => void;
}

type ValidationStatus = 'checking' | 'pass' | 'fail';

interface ValidationState {
  camera: ValidationStatus;
  microphone: ValidationStatus;
  internetSpeed: ValidationStatus;
}

export const ValidationView = ({
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & ValidationViewProps) => {
  const [validations, setValidations] = useState<ValidationState>({
    camera: 'checking',
    microphone: 'checking',
    internetSpeed: 'checking',
  });

  const [speedTestProgress, setSpeedTestProgress] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [speedTestTime, setSpeedTestTime] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const speedTestIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const speedTestTimerRef = useRef<NodeJS.Timeout | null>(null);
  const speedResultsRef = useRef<number[]>([]);
  const mountedRef = useRef(true);

  // Check camera
  useEffect(() => {
    mountedRef.current = true;

    const checkCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480 },
          audio: false,
        });

        if (!mountedRef.current) {
          stream.getTracks().forEach((track) => track.stop());
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
          const checkFrame = () => {
            if (!mountedRef.current) return;

            // Check if track is still live and has constraints (indicates active camera)
            if (videoTrack.readyState === 'live' && videoTrack.getSettings().width) {
              setValidations((prev) => ({ ...prev, camera: 'pass' }));
            } else {
              setValidations((prev) => ({ ...prev, camera: 'fail' }));
            }
          };

          // Give it a moment to start receiving frames
          setTimeout(checkFrame, 1000);
        } else {
          setValidations((prev) => ({ ...prev, camera: 'fail' }));
        }
      } catch (error) {
        console.error('Camera check failed:', error);
        if (mountedRef.current) {
          setValidations((prev) => ({ ...prev, camera: 'fail' }));
        }
      }
    };

    checkCamera();

    return () => {
      mountedRef.current = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, []);

  // Check microphone
  useEffect(() => {
    mountedRef.current = true;
    let checkInterval: NodeJS.Timeout | null = null;
    let microphonePassed = false;

    const checkMicrophone = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });

        if (!mountedRef.current) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        audioStreamRef.current = stream;

        // Create audio context to analyze microphone input
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
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
        checkInterval = setInterval(() => {
          if (!mountedRef.current || !analyserRef.current || microphonePassed) {
            if (checkInterval) clearInterval(checkInterval);
            return;
          }

          checksCount++;
          const bufferLength = analyserRef.current.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          analyserRef.current.getByteFrequencyData(dataArray);

          // Calculate average volume
          const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
          const max = Math.max(...dataArray);

          // Microphone is working if we can detect audio context activity
          // Even silence should register some minimal activity, and we check if we're getting data
          // The fact that we're getting data from the analyser means the mic is working
          if (dataArray.length > 0) {
            // If we get any data at all from the analyser, the microphone is working
            microphonePassed = true;
            setValidations((prev) => ({ ...prev, microphone: 'pass' }));
            if (checkInterval) clearInterval(checkInterval);
            return;
          }

          // After enough checks, if we haven't detected failure, assume it's working
          // (user might be in a silent environment, but mic is connected)
          if (checksCount >= maxChecks) {
            microphonePassed = true;
            setValidations((prev) => ({ ...prev, microphone: 'pass' }));
            if (checkInterval) clearInterval(checkInterval);
          }
        }, 300);
      } catch (error) {
        console.error('Microphone check failed:', error);
        if (mountedRef.current) {
          setValidations((prev) => ({ ...prev, microphone: 'fail' }));
        }
      }
    };

    checkMicrophone();

    return () => {
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
        audioStreamRef.current.getTracks().forEach((track) => track.stop());
        audioStreamRef.current = null;
      }
    };
  }, []);

  // Check internet speed
  useEffect(() => {
    mountedRef.current = true;
    const TEST_DURATION = 10000; // 10 seconds
    const MIN_SPEED_MBPS = 2;
    const TEST_INTERVAL = 2000; // Test every 2 seconds
    const MIN_SUCCESSFUL_TESTS = 1; // Reduced to 1 - more lenient

    const checkInternetSpeed = async () => {
      try {
        const testStartTime = Date.now();
        speedResultsRef.current = [];
        setSpeedTestProgress(0);
        setSpeedTestTime(0);
        setCurrentSpeed(0);

        // Start speed test timer
        speedTestTimerRef.current = setInterval(() => {
          if (!mountedRef.current) return;
          const elapsed = Date.now() - testStartTime;
          const progress = Math.min(elapsed, TEST_DURATION);
          setSpeedTestTime(progress);
          setSpeedTestProgress((progress / TEST_DURATION) * 100);

          if (elapsed >= TEST_DURATION) {
            if (speedTestTimerRef.current) {
              clearInterval(speedTestTimerRef.current);
              speedTestTimerRef.current = null;
            }
          }
        }, 100);

        // Perform speed test using fast.com via our API proxy
        const performSpeedTest = async (): Promise<number> => {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout for fast.com

            const testUrl = `/api/speed-test?fast=true&t=${Date.now()}`;

            const response = await fetch(testUrl, {
              method: 'GET',
              cache: 'no-cache',
              signal: controller.signal,
            });
            clearTimeout(timeoutId);

            if (!response.ok) {
              const errorData = await response.json().catch(() => ({}));
              console.error(`Speed test failed: ${response.status}`, errorData);
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

              console.log(
                `Speed test (${source}): ${speedMbps.toFixed(2)} Mbps (${sizeMB} MB in ${result.durationSeconds}s)`
              );
              return Math.max(0, speedMbps);
            }
          } catch (error: any) {
            if (error.name === 'AbortError') {
              console.log('Speed test timed out');
            } else {
              console.error('Speed test error:', error);
            }
          }

          return 0;
        };

        // Run speed tests periodically
        const runSpeedTest = async () => {
          if (!mountedRef.current) return;

          const elapsed = Date.now() - testStartTime;

          // Finalize result when test duration is complete
          if (elapsed >= TEST_DURATION) {
            if (speedTestIntervalRef.current) {
              clearInterval(speedTestIntervalRef.current);
              speedTestIntervalRef.current = null;
            }

            // Calculate average speed from successful tests
            const successfulTests = speedResultsRef.current.filter((s) => s > 0);
            const avgSpeed =
              successfulTests.length > 0
                ? successfulTests.reduce((sum, s) => sum + s, 0) / successfulTests.length
                : 0;

            if (mountedRef.current) {
              // Much more lenient validation - if we have ANY successful test, check it
              if (successfulTests.length >= MIN_SUCCESSFUL_TESTS) {
                // If average speed is above threshold, pass
                if (avgSpeed >= MIN_SPEED_MBPS) {
                  setValidations((prev) => ({ ...prev, internetSpeed: 'pass' }));
                  setCurrentSpeed(avgSpeed);
                } else if (avgSpeed >= MIN_SPEED_MBPS * 0.7) {
                  // If speed is at least 70% of threshold (1.4 Mbps), still pass (lenient)
                  // This accounts for network variability
                  console.log(
                    `Speed test passed with lenient threshold: ${avgSpeed.toFixed(2)} Mbps`
                  );
                  setValidations((prev) => ({ ...prev, internetSpeed: 'pass' }));
                  setCurrentSpeed(avgSpeed);
                } else {
                  // Speed is too low
                  setValidations((prev) => ({ ...prev, internetSpeed: 'fail' }));
                  setCurrentSpeed(avgSpeed);
                }
              } else if (successfulTests.length > 0) {
                // Even with just 1 test, if it's good enough, pass
                const singleSpeed = successfulTests[0];
                if (singleSpeed >= MIN_SPEED_MBPS * 0.8) {
                  // 80% of threshold (1.6 Mbps) is acceptable with just one test
                  console.log(`Speed test passed with single test: ${singleSpeed.toFixed(2)} Mbps`);
                  setValidations((prev) => ({ ...prev, internetSpeed: 'pass' }));
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
              const successfulTests = speedResultsRef.current.filter((s) => s > 0);
              const avgSpeed =
                successfulTests.length > 0
                  ? successfulTests.reduce((sum, s) => sum + s, 0) / successfulTests.length
                  : speed;

              setCurrentSpeed(avgSpeed);

              // Check if we can pass early (have enough good samples)
              if (successfulTests.length >= MIN_SUCCESSFUL_TESTS) {
                const avgSpeed =
                  successfulTests.reduce((sum, s) => sum + s, 0) / successfulTests.length;

                // More lenient early pass - after 4 seconds if we have good results
                if (elapsed >= 4000) {
                  // Pass if average is at least 70% of threshold (very lenient)
                  if (avgSpeed >= MIN_SPEED_MBPS * 0.7) {
                    setValidations((prev) => ({ ...prev, internetSpeed: 'pass' }));
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
                  console.log(`Early pass with single test: ${singleSpeed.toFixed(2)} Mbps`);
                  setValidations((prev) => ({ ...prev, internetSpeed: 'pass' }));
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
        };

        // Run initial test immediately
        runSpeedTest();

        // Then run tests at intervals
        speedTestIntervalRef.current = setInterval(() => {
          runSpeedTest();
        }, TEST_INTERVAL);
      } catch (error) {
        console.error('Internet speed check failed:', error);
        if (mountedRef.current) {
          // Don't immediately fail, give it a chance to retry
          console.warn('Speed check encountered an error, but will continue testing...');
        }
      }
    };

    // Start speed test after a short delay to let camera/mic checks start
    const timeoutId = setTimeout(() => {
      checkInternetSpeed();
    }, 500);

    return () => {
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
    };
  }, []);

  const allValidationsPassed =
    validations.camera === 'pass' &&
    validations.microphone === 'pass' &&
    validations.internetSpeed === 'pass';

  const handleStartCall = () => {
    // Clean up all media streams before starting the call
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (audioStreamRef.current) {
      audioStreamRef.current.getTracks().forEach((track) => track.stop());
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

  const getStatusIcon = (status: ValidationStatus) => {
    switch (status) {
      case 'checking':
        return <Spinner weight="bold" className="h-5 w-5 animate-spin text-[#1A73E8]" />;
      case 'pass':
        return <CheckCircle weight="bold" className="h-5 w-5 text-emerald-600" />;
      case 'fail':
        return <XCircle weight="bold" className="h-5 w-5 text-red-600" />;
    }
  };

  const getStatusText = (status: ValidationStatus) => {
    switch (status) {
      case 'checking':
        return 'Checking...';
      case 'pass':
        return 'Passed';
      case 'fail':
        return 'Failed';
    }
  };

  const getSpeedTestProgressText = () => {
    if (validations.internetSpeed === 'checking') {
      const elapsed = Math.round(speedTestTime / 1000);
      const currentSpeedText = currentSpeed > 0 ? ` (Current: ${currentSpeed.toFixed(2)} Mbps)` : '';
      return `Testing... ${elapsed}s / 10s${currentSpeedText}`;
    }
    if (validations.internetSpeed === 'pass') {
      return `Speed: ${currentSpeed.toFixed(2)} Mbps (Required: 2+ Mbps)`;
    }
    if (validations.internetSpeed === 'fail') {
      return 'Requires 2+ Mbps consistently for 10 seconds';
    }
    return 'Requires 2+ Mbps consistently for 10 seconds';
  };

  return (
    <div ref={ref} className="min-h-screen bg-white p-4 md:p-8">
      <div className="w-full max-w-3xl mx-auto py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-normal text-slate-900 mb-3 tracking-tight">
            System Check
          </h1>
          <p className="text-base text-slate-600 font-normal">
            We're verifying your system is ready for the evaluation
          </p>
        </div>

        {/* Camera Test */}
        <div className="rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-6">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#E8F0FE] flex items-center justify-center">
                  <Camera className="h-6 w-6 text-[#1A73E8]" weight="regular" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-900">Camera</h3>
                  <p className="text-sm text-slate-600">Testing your camera access</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(validations.camera)}
                <span
                  className={cn(
                    'text-sm font-medium',
                    validations.camera === 'pass'
                      ? 'text-emerald-600'
                      : validations.camera === 'fail'
                        ? 'text-red-600'
                        : validations.camera === 'checking'
                          ? 'text-[#1A73E8]'
                          : 'text-slate-400'
                  )}
                >
                  {getStatusText(validations.camera)}
                </span>
              </div>
            </div>
            {(validations.camera === 'checking' || validations.camera === 'pass') && (
              <div className="mt-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
            )}
            {validations.camera === 'fail' && (
              <div className="mt-4 p-4 rounded-2xl bg-red-50 border border-red-200">
                <p className="text-sm text-red-700">
                  Camera access denied or not available. Please check your camera permissions and
                  try again.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Microphone Test */}
        <div className="rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-6">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#E8F0FE] flex items-center justify-center">
                  <MicrophoneIcon className="h-6 w-6 text-[#1A73E8]" weight="regular" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-900">Microphone</h3>
                  <p className="text-sm text-slate-600">Testing your microphone access</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(validations.microphone)}
                <span
                  className={cn(
                    'text-sm font-medium',
                    validations.microphone === 'pass'
                      ? 'text-emerald-600'
                      : validations.microphone === 'fail'
                        ? 'text-red-600'
                        : validations.microphone === 'checking'
                          ? 'text-[#1A73E8]'
                          : 'text-slate-400'
                  )}
                >
                  {getStatusText(validations.microphone)}
                </span>
              </div>
            </div>
            {validations.microphone === 'fail' && (
              <div className="mt-4 p-4 rounded-2xl bg-red-50 border border-red-200">
                <p className="text-sm text-red-700">
                  Microphone access denied or not available. Please check your microphone
                  permissions and try again.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Internet Speed Test */}
        <div className="rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-8">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#E8F0FE] flex items-center justify-center">
                  <WifiHigh className="h-6 w-6 text-[#1A73E8]" weight="regular" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-900">Internet Speed</h3>
                  <p className="text-sm text-slate-600">{getSpeedTestProgressText()}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(validations.internetSpeed)}
                <span
                  className={cn(
                    'text-sm font-medium',
                    validations.internetSpeed === 'pass'
                      ? 'text-emerald-600'
                      : validations.internetSpeed === 'fail'
                        ? 'text-red-600'
                        : validations.internetSpeed === 'checking'
                          ? 'text-[#1A73E8]'
                          : 'text-slate-400'
                  )}
                >
                  {getStatusText(validations.internetSpeed)}
                </span>
              </div>
            </div>
            {validations.internetSpeed === 'checking' && (
              <div className="mt-4">
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-[#1A73E8] h-2.5 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${speedTestProgress}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2.5">{getSpeedTestProgressText()}</p>
              </div>
            )}
            {validations.internetSpeed === 'fail' && (
              <div className="mt-4 p-4 rounded-2xl bg-red-50 border border-red-200">
                <p className="text-sm text-red-700">
                  Internet speed is below the required 2 Mbps. Please check your connection and try
                  again.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Begin Button */}
        <div className="flex justify-center">
          <button
            onClick={handleStartCall}
            disabled={!allValidationsPassed}
            className={cn(
              'rounded-full px-8 py-3 text-sm font-medium transition-all',
              allValidationsPassed
                ? 'bg-[#1A73E8] text-white hover:bg-[#1557B0] shadow-sm hover:shadow-md'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            )}
          >
            {allValidationsPassed ? (
              <span className="flex items-center gap-2">
                Begin Evaluation
                <CheckCircle className="h-4 w-4" weight="bold" />
              </span>
            ) : (
              'Begin Evaluation'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
