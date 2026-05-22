import type { Request, Response, NextFunction } from 'express';
import env from '../config/env';
import { HttpError, type ApiResponse } from '../types';
import { logger } from '../utils/logger';

/**
 * Centralized error handler. Logs full detail server-side, returns safe
 * messages to the client. Must keep all four args so Express treats it as an
 * error handler.
 */
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const isHttp = err instanceof HttpError;
  const statusCode = isHttp ? err.statusCode : 500;
  const exposeMessage = isHttp && err.expose;

  if (statusCode >= 500) {
    logger.error('Unhandled error in request pipeline.', err);
  } else {
    logger.warn(`Request error (${statusCode}).`, err instanceof Error ? err.message : err);
  }

  const payload: ApiResponse = {
    success: false,
    message: exposeMessage
      ? (err as HttpError).message
      : 'Something went wrong. Please try again later.',
  };

  // Include stack only outside production to aid local debugging.
  if (!env.isProduction && err instanceof Error) {
    (payload as ApiResponse & { stack?: string }).stack = err.stack;
  }

  res.status(statusCode).json(payload);
}
