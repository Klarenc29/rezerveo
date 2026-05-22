import { Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { FEATURES, FEATURES_HEADER } from '@/data/content';

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title={FEATURES_HEADER.title}
      subtitle={FEATURES_HEADER.subtitle}
    >
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <Reveal key={feature.title} delay={(i % 3) * 0.08}>
            <Card hover className="h-full">
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight">{feature.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                    <span>{point}</span>
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
