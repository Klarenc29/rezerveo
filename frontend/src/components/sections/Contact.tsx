import { CalendarClock, Mail, ShieldCheck, Zap } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { BookingForm } from '@/components/forms/BookingForm';
import { BRAND, CONTACT } from '@/data/content';

const PERKS = [
  { icon: Zap, title: 'Live in under 30 minutes', text: 'Most teams are taking bookings the same day.' },
  { icon: CalendarClock, title: '20-minute walkthrough', text: 'A focused demo tailored to your business.' },
  { icon: ShieldCheck, title: 'No commitment', text: 'See it first. No credit card, no pressure.' },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {CONTACT.title}
            </h2>
            <p className="mt-4 text-lg font-light text-slate-600 dark:text-slate-400">
              {CONTACT.subtitle}
            </p>

            <ul className="mt-8 space-y-5">
              {PERKS.map((perk) => (
                <li key={perk.title} className="flex items-start gap-4">
                  <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent-500/15 text-accent-700 dark:text-accent-400">
                    <perk.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{perk.title}</p>
                    <p className="text-sm font-light text-slate-600 dark:text-slate-400">{perk.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${BRAND.email}`}
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full text-sm font-medium text-brand-700 hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-200"
            >
              <Mail className="h-4 w-4" />
              Prefer email? {BRAND.email}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-4xl p-6 shadow-card dark:shadow-card-dark sm:p-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
