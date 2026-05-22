import type { SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { fieldBase } from './Input';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  placeholder?: string;
  options: readonly string[];
}

export function Select({
  label,
  error,
  id,
  name,
  className,
  required,
  placeholder = 'Select an option',
  options,
  value,
  ...rest
}: SelectProps) {
  const fieldId = id ?? name;
  const errorId = error ? `${fieldId}-error` : undefined;

  return (
    <div className="space-y-1.5">
      <label htmlFor={fieldId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
        {required && <span className="text-accent-500"> *</span>}
      </label>
      <div className="relative">
        <select
          id={fieldId}
          name={name}
          required={required}
          value={value}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={cn(
            fieldBase,
            'appearance-none pr-10',
            value ? '' : 'text-slate-400 dark:text-slate-500',
            error ? 'border-red-400 focus-visible:ring-red-400' : 'border-slate-300 dark:border-white/10',
            className,
          )}
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-ink">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
      </div>
      {error && (
        <p id={errorId} className="text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
