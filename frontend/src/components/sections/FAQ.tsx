import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { FAQS, FAQ_HEADER } from '@/data/content';
import { cn } from '@/lib/cn';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" eyebrow="FAQ" title={FAQ_HEADER.title} subtitle={FAQ_HEADER.subtitle}>
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          return (
            <Reveal key={faq.question} delay={i * 0.05}>
              <div
                className={cn(
                  'overflow-hidden rounded-2xl border transition-colors',
                  isOpen
                    ? 'border-brand-400/40 bg-white dark:bg-white/[0.04]'
                    : 'border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.02]',
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-base font-semibold">{faq.question}</span>
                    <Plus
                      className={cn(
                        'h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 dark:text-brand-300',
                        isOpen && 'rotate-45',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm font-light leading-relaxed text-slate-600 dark:text-slate-400 sm:px-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
