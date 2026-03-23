import { useState } from 'react';
import {
  Microphone,
  CheckCircle,
  User,
  Lock,
  Headphones,
  Clock,
} from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';

interface WelcomeViewProps {
  onNext: () => void;
}

export const WelcomeView = ({ onNext, ref }: React.ComponentProps<'div'> & WelcomeViewProps) => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleNext = () => {
    if (isAgreed) {
      onNext();
    }
  };

  const guidelines = [
    {
      icon: Microphone,
      title: 'Audio Communication',
      description:
        'Ensure your microphone and speakers are working properly. Find a quiet, well-lit environment for the best evaluation experience. Speak clearly and at a natural pace.',
    },
    {
      icon: Headphones,
      title: 'Active Listening',
      description:
        'Listen carefully to each question before responding. Feel free to ask for clarification if needed. The evaluator is here to help you showcase your best self.',
    },
    {
      icon: Clock,
      title: 'Time Management',
      description:
        'Take your time to think through your responses. There is no need to rush. Quality answers are more valuable than quick ones.',
    },
    {
      icon: User,
      title: 'Be Yourself',
      description:
        'Answer questions based on your own knowledge and experience. If you don\'t know something, it\'s perfectly fine to say so. Honesty and authenticity are valued.',
    },
    {
      icon: Lock,
      title: 'Evaluation Integrity',
      description:
        'Please refrain from using external resources, search engines, or AI assistance during the evaluation. This ensures a fair evaluation process for all candidates.',
    },
  ];

  return (
    <div ref={ref} className="min-h-screen bg-white p-4 md:p-8">
      <div className="w-full max-w-3xl mx-auto py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-normal text-slate-900 mb-3 tracking-tight">
            Welcome to Your Evaluation
          </h1>
          <p className="text-base text-slate-600 font-normal">
            Please take a moment to review these guidelines
          </p>
        </div>

        {/* Instructions Card */}
        <div className="rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-6">
          <div className="p-8 md:p-10">
            <div className="space-y-8">
              {guidelines.map((guideline, index) => {
                const Icon = guideline.icon;
                return (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="h-11 w-11 rounded-full bg-[#E8F0FE] flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#1A73E8]" weight="regular" />
                      </div>
                    </div>
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-base font-medium text-slate-900 mb-1.5">
                        {guideline.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {guideline.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Agreement Section */}
        <div className="rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-8">
          <div className="p-6">
            <div className="flex items-start gap-3.5">
              <input
                id="agreement"
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mt-0.5 h-5 w-5 rounded border-slate-300 cursor-pointer appearance-none border-2 transition-all duration-200 checked:bg-[#1A73E8] checked:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 focus:ring-offset-2 relative"
                style={{
                  backgroundImage: isAgreed
                    ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E")`
                    : 'none',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />
              <label
                htmlFor="agreement"
                className="flex-1 text-sm text-slate-700 leading-relaxed cursor-pointer select-none"
              >
                I understand and agree to follow all the guidelines above. I confirm that I will
                participate honestly and to the best of my ability.
              </label>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            disabled={!isAgreed}
            className={cn(
              'rounded-full px-8 py-3 text-sm font-medium transition-all',
              isAgreed
                ? 'bg-[#1A73E8] text-white hover:bg-[#1557B0] shadow-sm hover:shadow-md'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            )}
          >
            {isAgreed ? (
              <span className="flex items-center gap-2">
                Continue
                <CheckCircle className="h-4 w-4" weight="bold" />
              </span>
            ) : (
              'Continue'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
