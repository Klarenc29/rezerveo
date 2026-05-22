/**
 * Rezerveo brand constants — the single source of truth for identity tokens.
 *
 * This file is referenced by both the frontend and backend. Because each
 * service builds in its own Docker context, the values are intentionally
 * plain/serializable so they can be safely duplicated where a cross-package
 * import is not possible.
 */

export const BRAND = {
  name: 'Rezerveo',
  tagline: 'Appointments, managed. Revenue, protected.',
  domain: 'rezerveo.al',
  url: 'https://rezerveo.al',
  contactEmail: 'info@rezerveo.al',
  description:
    'Rezerveo is the all-in-one booking platform for barbershops, salons, physiotherapy clinics, and every appointment-driven business.',
} as const;

/** Brand color palette (primary + secondary) confirmed with the client. */
export const COLORS = {
  // Primary palette
  deepBlue: '#1e3a8a',
  emerald: '#00e676',
  slate: '#0f172a',
  white: '#ffffff',
  // Secondary palette
  blue: '#3b82f6',
  green: '#34d399',
  lightGray: '#f3f4f6',
  gray: '#9ca3af',
} as const;

export type Brand = typeof BRAND;
export type Colors = typeof COLORS;
