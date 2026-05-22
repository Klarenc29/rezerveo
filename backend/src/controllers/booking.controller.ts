import type { Request, Response, NextFunction } from 'express';
import { sendBookingEmail } from '../services/email.service';
import type { ApiResponse, BookingPayload } from '../types';
import { logger } from '../utils/logger';

/**
 * Handle a demo/booking submission:
 *   1. Silently drop honeypot hits (bots) without tipping them off.
 *   2. Send the notification email to the Rezerveo inbox.
 *   3. Return a standard success envelope.
 */
export async function createBooking(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const body = req.body as BookingPayload;

  // Honeypot: a filled "company" field means a bot. Pretend success.
  if (body.company && body.company.trim().length > 0) {
    logger.warn('Honeypot triggered — dropping suspected spam submission.');
    const decoy: ApiResponse = {
      success: true,
      message: 'Thanks! Your request has been received.',
    };
    res.status(200).json(decoy);
    return;
  }

  try {
    await sendBookingEmail({
      fullName: body.fullName,
      businessName: body.businessName,
      email: body.email,
      phone: body.phone,
      businessType: body.businessType,
      teamSize: body.teamSize,
      message: body.message ?? '',
    });

    const payload: ApiResponse = {
      success: true,
      message: "Thanks! We'll be in touch shortly to schedule your demo.",
    };
    res.status(201).json(payload);
  } catch (err) {
    next(err);
  }
}
