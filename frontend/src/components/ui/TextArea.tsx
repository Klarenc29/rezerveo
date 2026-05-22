import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import { fieldBase } from './Input';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function TextArea({ label, error, id, name, className, required, ...rest }: TextAreaProps) {
  const fieldId = id ?? name;
  const errorId = error ? `${fieldId}-error` : undefined;

  return (
    <div className="space-y-1.5">
      <label htmlFor={fieldId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
        {required && <span className="text-accent-500"> *</span>}
      </label>
      <textarea
        id={fieldId}
        name={name}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn(
          fieldBase,
          'min-h-[120px] resize-y',
          error ? 'border-red-400 focus-visible:ring-red-400' : 'border-slate-300 dark:border-white/10',
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
