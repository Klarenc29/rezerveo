import { useContext } from 'react';
import { BookingModalContext } from '@/context/BookingModalProvider';

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error('useBookingModal must be used within a BookingModalProvider.');
  }
  return ctx;
}
