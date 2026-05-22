import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import {
  PRICING_FOOTER,
  PRICING_HEADER,
  PRICING_PLANS,
  PRICING_PLAN_ICONS,
} from '@/data/content';
import { useBookingModal } from '@/hooks/useBookingModal';
import { cn } from '@/lib/cn';

export function Pricing() {
  const { open } = useBookingModal();

  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title={PRICING_HEADER.title}
      subtitle={PRICING_HEADER.subtitle}
      className="bg-slate-50 dark:bg-white/[0.02]"
    >
      <div className="mt-14 grid gap-6 lg:grid-cols-4">
        {PRICING_PLANS.map((plan, i) => {
          const Icon = PRICING_PLAN_ICONS[i] ?? PRICING_PLAN_ICONS[0];
          const popular = Boolean(plan.popular);
          return (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 sm:p-7',
                  popular
                    ? 'border-brand-500/50 bg-white shadow-glow dark:bg-brand-900/40 lg:-translate-y-3 lg:scale-[1.02]'
                    : 'border-slate-200/70 bg-white hover:-translate-y-1.5 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-card-dark',
                )}
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-gradient px-4 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-glow-accent">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'inline-grid h-10 w-10 place-items-center rounded-xl',
                      popular
                        ? 'bg-brand-gradient text-white'
                        : 'bg-brand-500/10 text-brand-700 dark:text-brand-300',
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight">{plan.name}</h3>
                </div>

                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-4xl font-bold tracking-tight">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="mb-1 text-sm font-light text-slate-500 dark:text-slate-400">
                      one-time
                    </span>
                  )}
                </div>
                {plan.description && (
                  <p className="mt-2 text-sm font-light text-slate-600 dark:text-slate-400">
                    {plan.description}
                  </p>
                )}

                <ul className="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-6 dark:border-white/10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={open}
                  variant={popular ? 'primary' : 'outline'}
                  fullWidth
                  className="mt-7"
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10">
        <p className="mx-auto max-w-2xl text-center text-sm font-light text-slate-500 dark:text-slate-400">
          {PRICING_FOOTER}
        </p>
      </Reveal>
    </Section>
  );
}
