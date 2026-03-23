import { WarningCircle } from '@phosphor-icons/react/dist/ssr';

interface InvalidPageProps {
  message?: string;
}

export function InvalidPage({ message }: InvalidPageProps = {}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-amber-50 flex items-center justify-center">
            <WarningCircle className="h-8 w-8 text-amber-600" weight="regular" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-normal text-slate-900 mb-3 tracking-tight">
            Unable to Start Evaluation
          </h1>
          <p className="text-base text-slate-600 font-normal">
            {message ?? 'Please double-check the link you received and try again.'}
          </p>
        </div>

        {/* Info Card */}
        <div className="rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] bg-white">
          <div className="p-8 md:p-10">
            <div className="space-y-4 text-center">
              <p className="text-sm text-slate-600 leading-relaxed">
                If you believe this is an error, please contact support or verify that you're using
                the correct evaluation link.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
