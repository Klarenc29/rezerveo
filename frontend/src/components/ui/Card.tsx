import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Use a translucent glassmorphism surface. */
  glass?: boolean;
  /** Add hover lift + shadow. */
  hover?: boolean;
}

export function Card({ children, className, glass = false, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border p-6 sm:p-8',
        glass
          ? 'glass'
          : 'border-slate-200/70 bg-white shadow-soft dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none',
        hover &&
          'transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-card dark:hover:border-brand-400/30 dark:hover:shadow-card-dark',
        className,
      )}
    >
      {children}
    </div>
  );
}
