import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { FINAL_CTA } from '@/data/content';
import { useBookingModal } from '@/hooks/useBookingModal';

export function FinalCTA() {
  const { open } = useBookingModal();

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-brand-gradient px-6 py-16 text-center shadow-glow sm:px-12 sm:py-20">
            {/* decorative glow blobs */}
            <div
              className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-accent-500/30 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                {FINAL_CTA.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg font-light text-blue-100">
                {FINAL_CTA.subheadline}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button onClick={open} variant="accent" size="lg" className="w-full sm:w-auto">
                  {FINAL_CTA.primaryCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button href="#pricing" variant="glass" size="lg" className="w-full sm:w-auto">
                  {FINAL_CTA.secondaryCta}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
