import type { LucideIcon } from 'lucide-react';

/** Color/visual accent used to theme cards and icons. */
export type Accent = 'brand' | 'accent';

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface BusinessTypeChip {
  label: string;
  icon: LucideIcon;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export interface Step {
  index: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DeploymentOption {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  badge?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  priceSuffix?: string;
  description?: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Shape of the booking/demo form. Mirrors the backend BookingPayload. */
export interface BookingFormValues {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  teamSize: string;
  message: string;
  /** Honeypot — must stay empty. */
  company: string;
}

export type BookingFormErrors = Partial<Record<keyof BookingFormValues, string>>;

export type Theme = 'dark' | 'light';

/** Standard JSON envelope returned by the API. */
export interface ApiResult {
  success: boolean;
  message: string;
  errors?: Array<{ field: string; message: string }>;
}
