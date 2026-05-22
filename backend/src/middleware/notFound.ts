import type { Request, Response } from 'express';
import type { ApiResponse } from '../types';

/** 404 handler for unmatched API routes. */
export function notFound(req: Request, res: Response): void {
  const payload: ApiResponse = {
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  };
  res.status(404).json(payload);
}
