import rateLimit from 'express-rate-limit';
import env from '../config/env';
import type { ApiResponse } from '../types';

/**
 * Per-IP rate limiter for the booking endpoint — primary anti-spam control.
 * Configurable via RATE_LIMIT_WINDOW_MINUTES / RATE_LIMIT_MAX.
 */
export const bookingRateLimiter = rateLimit({
  windowMs: env.rateLimit.windowMinutes * 60 * 1000,
  max: env.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please wait a few minutes and try again.',
  } satisfies ApiResponse,
});
