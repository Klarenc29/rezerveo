import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { TextArea } from '@/components/ui/TextArea';
import { useToast } from '@/hooks/useToast';
import { submitBooking } from '@/lib/api';
import { hasErrors, validateBooking } from '@/lib/validation';
import { BUSINESS_TYPE_OPTIONS, TEAM_SIZE_OPTIONS } from '@/data/content';
import type { BookingFormErrors, BookingFormValues } from '@/types';

const EMPTY: BookingFormValues = {
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  businessType: '',
  teamSize: '',
  message: '',
  company: '',
};

interface BookingFormProps {
  /** Called after a successful submission (e.g. to close the modal). */
  onSuccess?: () => void;
}

type FieldEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export function BookingForm({ onSuccess }: BookingFormProps) {
  const { addToast } = useToast();
  const [values, setValues] = useState<BookingFormValues>(EMPTY);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof BookingFormValues) => (event: FieldEvent) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validation = validateBooking(values);
    if (hasErrors(validation)) {
      setErrors(validation);
      return;
    }

    setSubmitting(true);
    const result = await submitBooking(values);
    setSubmitting(false);

    if (result.success) {
      addToast({
        type: 'success',
        title: 'Request sent!',
        description: result.message,
      });
      setValues(EMPTY);
      setErrors({});
      onSuccess?.();
      return;
    }

    if (result.errors?.length) {
      const mapped: BookingFormErrors = {};
      for (const err of result.errors) {
        if (err.field in EMPTY) {
          mapped[err.field as keyof BookingFormValues] = err.message;
        }
      }
      setErrors(mapped);
    }
    addToast({
      type: 'error',
      title: 'Could not send request',
      description: result.message,
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot — hidden from users, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        value={values.company}
        onChange={update('company')}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Full Name"
          name="fullName"
          autoComplete="name"
          placeholder="Jane Doe"
          required
          value={values.fullName}
          onChange={update('fullName')}
          error={errors.fullName}
        />
        <Input
          label="Business Name"
          name="businessName"
          autoComplete="organization"
          placeholder="Studio Rezerveo"
          required
          value={values.businessName}
          onChange={update('businessName')}
          error={errors.businessName}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="jane@business.com"
          required
          value={values.email}
          onChange={update('email')}
          error={errors.email}
        />
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+355 6X XXX XXXX"
          required
          value={values.phone}
          onChange={update('phone')}
          error={errors.phone}
        />
        <Select
          label="Business Type"
          name="businessType"
          required
          options={BUSINESS_TYPE_OPTIONS}
          placeholder="Select business type"
          value={values.businessType}
          onChange={update('businessType')}
          error={errors.businessType}
        />
        <Select
          label="Team Size"
          name="teamSize"
          required
          options={TEAM_SIZE_OPTIONS}
          placeholder="Select team size"
          value={values.teamSize}
          onChange={update('teamSize')}
          error={errors.teamSize}
        />
      </div>

      <TextArea
        label="Message"
        name="message"
        rows={4}
        placeholder="Tell us about your business and what you'd like to see in the demo..."
        value={values.message}
        onChange={update('message')}
        error={errors.message}
      />

      <Button type="submit" variant="accent" size="lg" fullWidth loading={submitting}>
        {submitting ? (
          'Sending…'
        ) : (
          <>
            Book a Free Demo
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-xs font-light text-slate-500 dark:text-slate-400">
        We&apos;ll only use your details to schedule your demo. No spam, ever.
      </p>
    </form>
  );
}
