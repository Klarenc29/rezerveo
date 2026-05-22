import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

interface BadgeProps {
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
}

export function Badge({ children, icon: Icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300',
        className,
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />}
      {children}
    </span>
  );
}
