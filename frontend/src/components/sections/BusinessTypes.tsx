import { Reveal } from '@/components/ui/Reveal';
import { BUSINESS_TYPES } from '@/data/content';

export function BusinessTypes() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            One platform for every appointment-driven business
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {BUSINESS_TYPES.map((type, i) => (
            <Reveal key={type.label} delay={i * 0.05}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/30">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-700 transition-colors group-hover:bg-brand-gradient group-hover:text-white dark:text-brand-300">
                  <type.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium">{type.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
