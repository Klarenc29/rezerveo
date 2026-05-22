import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Info, X, XCircle, type LucideIcon } from 'lucide-react';
import { createPortal } from 'react-dom';
import type { ToastItem, ToastType } from '@/context/ToastProvider';
import { cn } from '@/lib/cn';

const TYPE_CONFIG: Record<ToastType, { icon: LucideIcon; accent: string }> = {
  success: { icon: CheckCircle2, accent: 'text-accent-500' },
  error: { icon: XCircle, accent: 'text-red-500' },
  info: { icon: Info, accent: 'text-brand-500' },
};

interface ToasterProps {
  toasts: ToastItem[];
  onClose: (id: number) => void;
}

/** Presentational toast viewport. State lives in the ToastProvider. */
export function Toaster({ toasts, onClose }: ToasterProps) {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[120] flex flex-col items-center gap-2 px-4 sm:inset-x-auto sm:right-4 sm:items-end">
      <AnimatePresence initial={false}>
        {toasts.map((toast) => {
          const { icon: Icon, accent } = TYPE_CONFIG[toast.type];
          return (
            <motion.div
              key={toast.id}
              layout
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: -16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.9 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card dark:border-white/10 dark:bg-brand-900"
            >
              <Icon className={cn('mt-0.5 h-5 w-5 shrink-0', accent)} aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink dark:text-white">{toast.title}</p>
                {toast.description && (
                  <p className="mt-0.5 text-sm font-light text-slate-600 dark:text-slate-400">
                    {toast.description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => onClose(toast.id)}
                aria-label="Dismiss notification"
                className="focus-ring -mr-1 -mt-1 rounded-full p-1 text-slate-400 hover:text-ink dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>,
    document.body,
  );
}
