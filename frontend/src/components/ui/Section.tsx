import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

/** Reusable page section with a consistent rhythm and optional header. */
export function Section({
  id,
  className,
  containerClassName,
  children,
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || subtitle);

  return (
    <section id={id} className={cn('relative scroll-mt-24 py-20 sm:py-28', className)}>
      <div className={cn('container', containerClassName)}>
        {hasHeader && (
          <Reveal className={cn('mx-auto max-w-2xl', centered && 'text-center')}>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg font-light text-slate-600 dark:text-slate-400">
                {subtitle}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
