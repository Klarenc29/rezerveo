import nodemailer, { type Transporter } from 'nodemailer';
import env, { isSmtpConfigured } from '../config/env';
import { HttpError, type BookingPayload } from '../types';
import { renderBookingEmail } from '../templates/bookingEmail';
import { logger } from '../utils/logger';

let transporter: Transporter | null = null;

/** Lazily create (and cache) the Nodemailer transport from env config. */
function getTransporter(): Transporter {
  if (!isSmtpConfigured()) {
    throw new HttpError(
      503,
      'Email service is not configured. Please try again later.',
      true,
    );
  }

  if (!transporter) {
    const hasAuth = Boolean(env.smtp.user && env.smtp.pass);
    transporter = nodemailer.createTransport({
      host: env.smtp.host,
      port: env.smtp.port,
      secure: env.smtp.secure, // true for 465, false for 587/STARTTLS
      // Auth is optional — omitted for credential-less dev servers (maildev).
      ...(hasAuth ? { auth: { user: env.smtp.user, pass: env.smtp.pass } } : {}),
    });
  }

  return transporter;
}

/** Verify the SMTP connection on boot (non-fatal — logs a warning on failure). */
export async function verifyEmailTransport(): Promise<void> {
  if (!isSmtpConfigured()) {
    logger.warn(
      'SMTP is not configured — the booking form will return 503 until SMTP_* env vars are set.',
    );
    return;
  }
  try {
    await getTransporter().verify();
    logger.info(`SMTP transport ready (${env.smtp.host}:${env.smtp.port}).`);
  } catch (err) {
    logger.warn('SMTP verification failed — check credentials/host.', err);
  }
}

/** Send the branded booking notification email. */
export async function sendBookingEmail(payload: BookingPayload): Promise<void> {
  const { subject, text, html } = renderBookingEmail(payload);

  try {
    await getTransporter().sendMail({
      from: env.mail.from,
      // Envelope sender = authenticated user, so strict relays (Zoho/Gmail)
      // accept the message even when From uses a verified alias.
      sender: env.smtp.user || undefined,
      to: env.mail.to,
      // The lead's address goes here so replies reach them directly.
      replyTo: `${payload.fullName} <${payload.email}>`,
      subject,
      text,
      html,
    });
    logger.info(`Booking email sent to ${env.mail.to} for ${payload.email}.`);
  } catch (err) {
    if (err instanceof HttpError) throw err;
    logger.error('Failed to send booking email.', err);
    throw new HttpError(
      502,
      'We could not send your request right now. Please try again shortly.',
      true,
    );
  }
}
