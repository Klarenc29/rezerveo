import { cn } from '@/lib/cn';

interface SkeletonProps {
  className?: string;
}

/** Shimmering placeholder block for loading states. */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('skeleton-shimmer rounded-lg bg-slate-200/80 dark:bg-white/10', className)}
      aria-hidden="true"
    />
  );
}

/** Convenience composite: a few stacked lines, e.g. while a form submits. */
export function SkeletonLines({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-3', className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn('h-4', i === lines - 1 ? 'w-2/3' : 'w-full')} />
      ))}
    </div>
  );
}
