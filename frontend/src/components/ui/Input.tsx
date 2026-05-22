import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export const fieldBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition-colors focus-ring dark:bg-white/[0.04] dark:text-white dark:placeholder:text-slate-500';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, id, name, className, required, ...rest }: InputProps) {
  const fieldId = id ?? name;
  const errorId = error ? `${fieldId}-error` : undefined;

  return (
    <div className="space-y-1.5">
      <label htmlFor={fieldId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
        {required && <span className="text-accent-500"> *</span>}
      </label>
      <input
        id={fieldId}
        name={name}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn(
          fieldBase,
          error
            ? 'border-red-400 focus-visible:ring-red-400'
            : 'border-slate-300 dark:border-white/10',
          className,
        )}
        {...rest}
      />
      {error && (
        <p id={errorId} className="text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
