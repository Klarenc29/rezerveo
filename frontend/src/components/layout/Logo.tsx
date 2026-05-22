import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

/** Rezerveo brand mark (from /favicon.svg) + wordmark. */
export function Logo({ className, withText = true }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src="/favicon.svg"
        alt=""
        aria-hidden="true"
        className="h-9 w-9 rounded-xl shadow-glow"
        width={36}
        height={36}
      />
      {withText && (
        <span className="font-display text-lg font-bold tracking-tight text-ink dark:text-white">
          Rezerveo
        </span>
      )}
    </span>
  );
}
