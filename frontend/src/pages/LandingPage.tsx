import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { BusinessTypes } from '@/components/sections/BusinessTypes';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Deployment } from '@/components/sections/Deployment';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Contact } from '@/components/sections/Contact';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function LandingPage() {
  useDocumentMeta(
    'Rezerveo — Booking Platform for Service Businesses',
    'Rezerveo is the all-in-one booking platform for barbershops, salons, physiotherapy clinics, and every appointment-driven business. Feature-based pricing. No per-user fees. Ever.',
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Stats />
      <BusinessTypes />
      <Features />
      <HowItWorks />
      <Deployment />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
    </motion.div>
  );
}
