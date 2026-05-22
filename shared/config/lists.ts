/**
 * Shared option lists used by the booking form (frontend) and validated by
 * the backend. Keeping them here documents the canonical values; each service
 * imports/duplicates as needed for build isolation.
 */

export const BUSINESS_TYPES = [
  'Barbershop',
  'Hair Salon',
  'Physiotherapy Clinic',
  'Nail & Beauty',
  'Fitness & Personal Training',
  'Multi-location Business',
  'Other',
] as const;

export const TEAM_SIZES = [
  '1 (Solo)',
  '2-3',
  '4-10',
  '11-25',
  '25+',
] as const;

export type BusinessType = (typeof BUSINESS_TYPES)[number];
export type TeamSize = (typeof TEAM_SIZES)[number];
