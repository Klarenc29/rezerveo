import { Router, type Request, type Response } from 'express';
import { createBooking } from '../controllers/booking.controller';
import { bookingRateLimiter } from '../middleware/rateLimiter';
import { bookingValidationRules, handleValidation } from '../middleware/validate';
import { isSmtpConfigured } from '../config/env';
import type { ApiResponse } from '../types';

const router = Router();

/** Liveness/readiness probe used by Docker healthchecks. */
router.get('/health', (_req: Request, res: Response) => {
  const payload: ApiResponse<{ smtp: boolean; uptime: number }> = {
    success: true,
    message: 'ok',
    data: { smtp: isSmtpConfigured(), uptime: process.uptime() },
  };
  res.status(200).json(payload);
});

/** Demo/booking form submission. */
router.post(
  '/booking',
  bookingRateLimiter,
  bookingValidationRules,
  handleValidation,
  createBooking,
);

export default router;
