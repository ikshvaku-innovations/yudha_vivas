'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Star } from '@phosphor-icons/react/dist/ssr';

interface ThankYouScreenProps {
  onReturnHome: () => void;
}

export const ThankYouScreen = ({
  onReturnHome,
  ref,
}: React.ComponentProps<'div'> & ThankYouScreenProps) => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmitFeedback = async () => {
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          rating: rating || null,
          feedback: feedback.trim() || null,
        }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: 'Failed to submit feedback' }));
        throw new Error(errorData.error || `Failed to submit feedback: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Feedback submitted successfully:', result);

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={ref} className="min-h-screen bg-white p-4 md:p-8">
      <div className="w-full max-w-3xl mx-auto py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-normal text-slate-900 mb-3 tracking-tight">
            Thank You
          </h1>
          <p className="text-base text-slate-600 font-normal">
            Thank you for participating in the evaluation. We appreciate your time and participation.
          </p>
        </div>

        {/* Feedback Card */}
        <div className="rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white mb-6">
          <div className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="h-11 w-11 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Star className="h-5 w-5 text-yellow-600" weight="regular" />
                </div>
              </div>
              <div className="flex-1 pt-0.5">
                <h2 className="text-base font-medium text-slate-900 mb-1.5">
                  We'd love your feedback!
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your feedback helps us improve the evaluation experience
                </p>
              </div>
            </div>

            {/* Rating Selection */}
            <div className="mb-6">
              <label className="text-sm font-medium text-slate-900 mb-3 block">
                Rating (Optional)
              </label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => {
                  const isSelected = rating !== null && num <= rating;
                  const isDarkYellow = rating === num;
                  const isLightYellow = rating !== null && num < rating;
                  
                  return (
                    <button
                      key={num}
                      type="button"
                      onClick={() => !isSubmitted && setRating(num)}
                      disabled={isSubmitted}
                      className={cn(
                        'h-12 w-12 rounded-full flex items-center justify-center transition-all',
                        'focus:ring-2 focus:ring-yellow-500/20 focus:ring-offset-2 focus:outline-none',
                        isDarkYellow
                          ? 'bg-yellow-600 text-white'
                          : isLightYellow
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-white text-slate-400 border border-slate-200 hover:border-yellow-300 hover:bg-yellow-50',
                        isSubmitted && 'cursor-not-allowed opacity-50'
                      )}
                    >
                      <Star
                        className={cn(
                          'h-6 w-6',
                          isSelected ? 'fill-current' : ''
                        )}
                        weight={isSelected ? 'fill' : 'regular'}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback Textarea */}
            <div className="mb-6">
              <label
                htmlFor="feedback-text"
                className="text-sm font-medium text-slate-900 mb-2 block"
              >
                Your Feedback (Optional)
              </label>
              <textarea
                id="feedback-text"
                value={feedback}
                onChange={(e) => !isSubmitted && setFeedback(e.target.value)}
                placeholder="Share your thoughts about the evaluation experience..."
                rows={4}
                disabled={isSubmitted}
                className={cn(
                  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm',
                  'text-slate-900 placeholder:text-slate-400',
                  'focus-visible:ring-2 focus-visible:ring-[#1A73E8]/20 focus-visible:outline-none focus-visible:border-[#1A73E8]',
                  'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50',
                  'resize-none transition-all'
                )}
              />
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <p className="text-sm text-emerald-700">Thank you for your feedback!</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmitFeedback}
                disabled={isSubmitting || isSubmitted || (!rating && !feedback.trim())}
                className={cn(
                  'rounded-full px-8 py-3 text-sm font-medium transition-all',
                  isSubmitting || isSubmitted || (!rating && !feedback.trim())
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-[#1A73E8] text-white hover:bg-[#1557B0] shadow-sm hover:shadow-md',
                  'focus-visible:ring-2 focus-visible:ring-[#1A73E8]/20 focus-visible:outline-none'
                )}
                type="button"
              >
                {isSubmitting
                  ? 'Submitting...'
                  : isSubmitted
                    ? 'Feedback Submitted'
                    : 'Submit Feedback'}
              </button>
            </div>
          </div>
        </div>

        {/* Close window message */}
        <div className="text-center">
          <p className="text-sm text-slate-500">
            You can now close this window.
          </p>
        </div>
      </div>
    </div>
  );
};
