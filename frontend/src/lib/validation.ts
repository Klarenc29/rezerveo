import type { BookingFormErrors, BookingFormValues } from '@/types';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[0-9\s().-]{5,40}$/;

/** Client-side validation mirroring the backend rules. */
export function validateBooking(values: BookingFormValues): BookingFormErrors {
  const errors: BookingFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.';
  } else if (values.fullName.trim().length > 120) {
    errors.fullName = 'Full name is too long.';
  }

  if (!values.businessName.trim()) {
    errors.businessName = 'Please enter your business name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!PHONE_RE.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }

  if (!values.businessType.trim()) {
    errors.businessType = 'Select a business type.';
  }

  if (!values.teamSize.trim()) {
    errors.teamSize = 'Select your team size.';
  }

  if (values.message && values.message.length > 2000) {
    errors.message = 'Message is too long (2000 characters max).';
  }

  return errors;
}

export function hasErrors(errors: BookingFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
