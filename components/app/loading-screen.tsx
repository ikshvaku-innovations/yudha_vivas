'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Spinner, Lightbulb } from '@phosphor-icons/react/dist/ssr';

interface LoadingScreenProps {
  className?: string;
  title?: string;
  description?: string;
}

const tips = [
  'Take a deep breath and relax',
  'Speak clearly and confidently',
  'Think before you answer',
  'Be yourself and stay authentic',
  'Ask for clarification if needed',
];

export const LoadingScreen = ({
  className,
  title = 'Waiting for AI Evaluator to join',
  description,
}: LoadingScreenProps) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % tips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] min-h-screen bg-white flex items-center justify-center p-4 md:p-8',
        className
      )}
    >
      <div className="w-full max-w-3xl">
        {/* Spinner above heading */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-[#E8F0FE] flex items-center justify-center">
            <Spinner className="h-8 w-8 text-[#1A73E8] animate-spin" weight="bold" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-normal text-slate-900 mb-3 tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-base text-slate-600 font-normal">{description}</p>
          )}
        </div>

        {/* Tips Card */}
        <div className="flex justify-center">
          <div className="rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="h-11 w-11 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-yellow-600" weight="regular" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative h-8 overflow-hidden text-center">
                    {tips.map((tip, index) => (
                      <p
                        key={index}
                        className={cn(
                          'absolute inset-0 flex items-center justify-center text-base text-slate-600 leading-relaxed transition-opacity duration-500',
                          currentTipIndex === index ? 'opacity-100' : 'opacity-0'
                        )}
                      >
                        {tip}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
