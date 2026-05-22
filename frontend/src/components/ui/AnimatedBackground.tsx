import { cn } from '@/lib/cn';

/**
 * Subtle decorative background — a faint grid plus slowly drifting gradient
 * blobs. Purely decorative and non-interactive; sits behind content.
 */
export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
    >
      {/* faint grid */}
      <div className="absolute inset-0 bg-grid bg-grid-light opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] dark:bg-grid-dark" />

      {/* drifting gradient blobs */}
      <div className="absolute -left-24 top-[-12%] h-72 w-72 rounded-full bg-brand-500/30 blur-3xl animate-float-slow dark:bg-brand-600/25" />
      <div className="absolute right-[-8%] top-1/3 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl animate-float-slow [animation-delay:-6s] dark:bg-accent-500/12" />
      <div className="absolute bottom-[-12%] left-1/3 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl animate-float-slow [animation-delay:-12s]" />
    </div>
  );
}
