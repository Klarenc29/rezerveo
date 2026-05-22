import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import { useBookingModal } from '@/hooks/useBookingModal';

/** Sticky floating CTA shown on small screens only. */
export function MobileFloatingCTA() {
  const { open } = useBookingModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(0.85rem+env(safe-area-inset-bottom))] md:hidden"
    >
      <button
        type="button"
        onClick={open}
        className="focus-ring flex w-full items-center justify-center gap-2 rounded-full bg-accent-gradient px-6 py-3.5 text-base font-semibold text-ink shadow-glow-accent active:scale-[0.98]"
      >
        <CalendarCheck className="h-5 w-5" />
        Book a Demo
      </button>
    </motion.div>
  );
}
