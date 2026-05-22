import dotenv from 'dotenv';

dotenv.config();

/** Parse a boolean-ish env string. */
function asBool(value: string | undefined, fallback = false): boolean {
  if (value === undefined) return fallback;
  return ['1', 'true', 'yes', 'on'].includes(value.trim().toLowerCase());
}

/** Parse an integer env string with a fallback. */
function asInt(value: string | undefined, fallback: number): number {
  const n = Number.parseInt(value ?? '', 10);
  return Number.isFinite(n) ? n : fallback;
}

/** Split a comma-separated origin list into a clean array. */
function asList(value: string | undefined): string[] {
  return (value ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  isProduction: (process.env.NODE_ENV ?? 'development') === 'production',
  port: asInt(process.env.PORT, 5000),
  corsOrigins: asList(process.env.CORS_ORIGIN),

  smtp: {
    host: process.env.SMTP_HOST ?? '',
    port: asInt(process.env.SMTP_PORT, 587),
    secure: asBool(process.env.SMTP_SECURE, false),
    user: process.env.SMTP_USER ?? '',
    pass: process.env.SMTP_PASS ?? '',
  },

  mail: {
    // Many SMTP providers (Zoho, Gmail, ...) reject mail whose From address is
    // not the authenticated mailbox or a verified alias ("553 Sender is not
    // allowed to relay"). Default From to the authenticated SMTP user so it is
    // always a valid sender; override MAIL_FROM only with a verified alias.
    from: (process.env.MAIL_FROM ?? '').trim() || process.env.SMTP_USER || 'no-reply@rezerveo.al',
    to: (process.env.MAIL_TO ?? '').trim() || 'info@rezerveo.al',
  },

  rateLimit: {
    windowMinutes: asInt(process.env.RATE_LIMIT_WINDOW_MINUTES, 15),
    max: asInt(process.env.RATE_LIMIT_MAX, 5),
  },
} as const;

/**
 * True when enough SMTP config is present to send mail. Only the host is
 * strictly required — auth is optional so credential-less dev servers like
 * maildev (host "mail_dev", port 1025) work out of the box.
 */
export function isSmtpConfigured(): boolean {
  return Boolean(env.smtp.host);
}

export default env;
