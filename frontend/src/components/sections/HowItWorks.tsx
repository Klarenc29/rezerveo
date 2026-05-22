import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { HOW_IT_WORKS_HEADER, STEPS } from '@/data/content';

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title={HOW_IT_WORKS_HEADER.title}
      className="bg-slate-50 dark:bg-white/[0.02]"
    >
      <div className="relative mt-16">
        {/* Connecting line (desktop) */}
        <div
          className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent lg:block"
          aria-hidden="true"
        />

        <ol className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.12} className="relative">
              <li className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative z-10 flex items-center gap-4">
                  <span className="grid h-[4.5rem] w-[4.5rem] shrink-0 place-items-center rounded-2xl border border-slate-200/70 bg-white shadow-card dark:border-white/10 dark:bg-brand-950 dark:shadow-card-dark">
                    <step.icon className="h-7 w-7 text-brand-600 dark:text-brand-300" />
                  </span>
                  <span className="font-display text-5xl font-bold text-slate-200 dark:text-white/10">
                    0{step.index}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
