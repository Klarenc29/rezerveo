import { motion, type Variants } from 'framer-motion';
import { ArrowRight, CalendarCheck, Check, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { HERO } from '@/data/content';
import { useBookingModal } from '@/hooks/useBookingModal';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const { open } = useBookingModal();

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      <AnimatedBackground />

      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item} className="flex justify-center">
            <Badge icon={Sparkles}>{HERO.note}</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {HERO.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-xl font-semibold sm:text-2xl"
          >
            <span className="text-gradient">{HERO.subheadline}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button onClick={open} size="lg" className="w-full sm:w-auto">
              {HERO.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="#pricing" variant="outline" size="lg" className="w-full sm:w-auto">
              {HERO.secondaryCta}
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          >
            {HERO.badges.map((badge) => (
              <Badge key={badge} icon={Check}>
                {badge}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        {/* Product preview mock */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="absolute inset-x-8 -bottom-6 h-24 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
          <HeroPreview />
        </motion.div>
      </div>
    </section>
  );
}

/** Stylized booking dashboard preview. */
function HeroPreview() {
  const appointments = [
    { time: '09:00', name: 'Haircut & Beard', who: 'with Arben', tone: 'brand' as const },
    { time: '10:30', name: 'Physio Session', who: 'with Dr. Elisa', tone: 'accent' as const },
    { time: '12:00', name: 'Color & Style', who: 'with Mara', tone: 'brand' as const },
    { time: '14:15', name: 'Personal Training', who: 'with Klaus', tone: 'accent' as const },
  ];

  return (
    <div className="glass relative overflow-hidden rounded-4xl p-3 shadow-card dark:shadow-card-dark sm:p-4">
      <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 dark:border-white/10 dark:bg-brand-950/60 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-white">
              <CalendarCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Today&apos;s Schedule</p>
              <p className="text-xs font-light text-slate-500 dark:text-slate-400">12 bookings · 4 specialists</p>
            </div>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold text-accent-700 dark:text-accent-400 sm:inline-flex">
            <ShieldCheck className="h-3.5 w-3.5" /> Live
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {appointments.map((a) => (
            <div
              key={a.time}
              className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-3.5 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <span
                className={
                  a.tone === 'brand'
                    ? 'grid h-10 w-10 place-items-center rounded-xl bg-brand-500/15 text-xs font-bold text-brand-700 dark:text-brand-300'
                    : 'grid h-10 w-10 place-items-center rounded-xl bg-accent-500/15 text-xs font-bold text-accent-700 dark:text-accent-400'
                }
              >
                <Clock className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{a.name}</p>
                <p className="truncate text-xs font-light text-slate-500 dark:text-slate-400">
                  {a.time} · {a.who}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
