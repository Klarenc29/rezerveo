import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { TESTIMONIALS, TESTIMONIALS_HEADER } from '@/data/content';

function initials(name: string): string {
  const caps = name.match(/[A-Z]/g);
  return (caps ?? [name[0] ?? '?']).slice(0, 2).join('');
}

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title={TESTIMONIALS_HEADER.title}
      subtitle={TESTIMONIALS_HEADER.subtitle}
    >
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <Card hover className="flex h-full flex-col">
              <Quote className="h-8 w-8 text-brand-500/30" aria-hidden="true" />
              <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent-500 text-accent-500" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base font-light leading-relaxed text-slate-700 dark:text-slate-200">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs font-light text-slate-500 dark:text-slate-400">
                    {t.role} · {t.location}
                  </span>
                </span>
              </figcaption>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
