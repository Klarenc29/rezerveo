import { MotionConfig } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileFloatingCTA } from '@/components/layout/MobileFloatingCTA';
import { BookingModal } from '@/components/booking/BookingModal';
import { AppRoutes } from '@/router';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main id="main">
        <AppRoutes />
      </main>
      <Footer />
      <MobileFloatingCTA />
      <BookingModal />
    </MotionConfig>
  );
}
