import { Modal } from '@/components/ui/Modal';
import { BookingForm } from '@/components/forms/BookingForm';
import { useBookingModal } from '@/hooks/useBookingModal';

/** Global booking modal, controlled via the BookingModal context. */
export function BookingModal() {
  const { isOpen, close } = useBookingModal();

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      title="Book your free demo"
      description="See Rezerveo live in 20 minutes. Tell us a bit about your business."
    >
      <BookingForm onSuccess={close} />
    </Modal>
  );
}
