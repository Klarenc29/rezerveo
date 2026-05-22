import { Mail } from 'lucide-react';
import { Logo } from '@/components/layout/Logo';
import { BRAND, FOOTER_LINKS } from '@/data/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-brand-950">
      <div className="container py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm font-light leading-relaxed text-slate-600 dark:text-slate-400">
              {BRAND.tagline} The all-in-one booking platform for appointment-driven businesses —
              feature-based pricing, no per-user fees.
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full text-sm font-medium text-brand-700 hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-200"
            >
              <Mail className="h-4 w-4" />
              {BRAND.email}
            </a>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.heading}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="focus-ring rounded text-sm text-slate-600 transition-colors hover:text-ink dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
          <p>
            © {year} {BRAND.name}. All rights reserved.
          </p>
          <p className="font-light">Appointments, managed. Revenue, protected.</p>
        </div>
      </div>
    </footer>
  );
}
