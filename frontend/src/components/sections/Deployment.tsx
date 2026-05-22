import { Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { DEPLOYMENT_HEADER, DEPLOYMENT_OPTIONS } from '@/data/content';

export function Deployment() {
  return (
    <Section
      id="deployment"
      eyebrow="Deployment"
      title={DEPLOYMENT_HEADER.title}
      subtitle={DEPLOYMENT_HEADER.subtitle}
    >
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {DEPLOYMENT_OPTIONS.map((option, i) => (
          <Reveal key={option.title} delay={i * 0.1}>
            <Card hover className="flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-accent-500/15 text-accent-700 dark:text-accent-400">
                  <option.icon className="h-6 w-6" />
                </span>
                {option.badge && (
                  <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
                    {option.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight">{option.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-slate-600 dark:text-slate-400">
                {option.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 dark:border-white/10">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
