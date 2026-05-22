import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost' | 'glass';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-ring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 whitespace-nowrap';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-gradient text-white shadow-glow hover:brightness-110 hover:-translate-y-0.5',
  accent: 'bg-accent-gradient text-ink shadow-glow-accent hover:brightness-105 hover:-translate-y-0.5',
  secondary:
    'bg-ink text-white hover:bg-ink-soft dark:bg-white dark:text-ink dark:hover:bg-slate-200',
  outline:
    'border border-slate-300 text-ink hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5',
  ghost: 'text-ink hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10',
  glass: 'bg-white/10 text-white ring-1 ring-inset ring-white/30 backdrop-blur hover:bg-white/20',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const Spinner = <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />;

  if (props.href !== undefined) {
    const { variant = 'primary', size = 'md', loading = false, fullWidth = false, className, children, href, ...rest } =
      props;
    return (
      <a
        href={href}
        className={cn(base, variantClasses[variant], sizeClasses[size], fullWidth && 'w-full', className)}
        {...rest}
      >
        {loading && Spinner}
        {children}
      </a>
    );
  }

  const { variant = 'primary', size = 'md', loading = false, fullWidth = false, className, children, type, disabled, ...rest } =
    props;
  return (
    <button
      type={type ?? 'button'}
      disabled={disabled || loading}
      className={cn(base, variantClasses[variant], sizeClasses[size], fullWidth && 'w-full', loading && 'cursor-wait', className)}
      {...rest}
    >
      {loading && Spinner}
      {children}
    </button>
  );
}
