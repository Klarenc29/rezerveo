import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
}

const makeVariants = (y: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  },
});

/**
 * Animates its children into view on scroll (fade + slide up).
 * Respects reduced-motion via the app-level <MotionConfig reducedMotion="user">.
 */
export function Reveal({ children, className, delay = 0, y = 22 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={makeVariants(y, delay)}
    >
      {children}
    </motion.div>
  );
}
