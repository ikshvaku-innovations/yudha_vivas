'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { XIcon, PhoneDisconnectIcon } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/livekit/button';
import { cn } from '@/lib/utils';

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
}

export function ConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
  title = 'End Call',
  description = 'Are you sure you want to end the call?',
  confirmText = 'End Call',
  cancelText = 'Cancel',
}: ConfirmDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  React.useEffect(() => {
    if (open) {
      // Prevent body scroll when dialog is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop - covers entire screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            onClick={handleCancel}
          />

          {/* Dialog - centered */}
          <div className="pointer-events-none relative flex w-full items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
              }}
              className={cn(
                'pointer-events-auto relative w-full max-w-md',
                'bg-white border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] rounded-[28px] border',
                'p-6'
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCancel}
                className={cn(
                  'absolute top-4 right-4 rounded-full p-1.5',
                  'hover:bg-slate-100 transition-colors',
                  'focus-visible:ring-[#1A73E8]/20 focus-visible:ring-2 focus-visible:outline-none'
                )}
                aria-label="Close"
              >
                <XIcon weight="bold" className="text-slate-500 size-4" />
              </button>

              {/* Content */}
              <div className="pr-8">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center">
                      <PhoneDisconnectIcon className="h-6 w-6 text-red-600" weight="regular" />
                    </div>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h2 className="text-xl font-semibold text-slate-900 mb-2">{title}</h2>
                    <p className="text-base text-slate-600 leading-relaxed">{description}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={handleCancel}
                    className={cn(
                      'rounded-full px-6 py-2.5 text-sm font-medium transition-all',
                      'border border-slate-200 bg-white text-slate-700',
                      'hover:bg-slate-50 hover:border-slate-300',
                      'focus-visible:ring-2 focus-visible:ring-[#1A73E8]/20 focus-visible:outline-none'
                    )}
                  >
                    {cancelText}
                  </button>
                  <button
                    onClick={handleConfirm}
                    className={cn(
                      'rounded-full px-6 py-2.5 text-sm font-medium transition-all',
                      'bg-red-600 text-white',
                      'hover:bg-red-700 shadow-sm hover:shadow-md',
                      'focus-visible:ring-2 focus-visible:ring-red-600/20 focus-visible:outline-none'
                    )}
                  >
                    {confirmText}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
