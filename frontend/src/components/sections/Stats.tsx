import { Reveal } from '@/components/ui/Reveal';
import { STATS } from '@/data/content';

export function Stats() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-200/70 dark:border-white/10 dark:bg-white/10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="bg-white p-6 text-center dark:bg-brand-950 sm:p-8"
            >
              <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm font-light text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
