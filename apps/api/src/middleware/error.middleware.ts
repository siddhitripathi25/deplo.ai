/**
 * src/middleware/error.middleware.ts
 *
 * Centralized error-handling middleware.
 *
 * Express identifies error-handling middleware by its four-argument signature
 * (err, req, res, next). It must be registered AFTER all routes.
 *
 * In production we hide the raw error message to avoid leaking internal
 * implementation details. In development we include it for easier debugging.
 */

import { NextFunction, Request, Response } from 'express';
import { env } from '../config/env';

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  // next is required by Express even when unused — removing it breaks detection
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {
  // Log the full error server-side so it's available in server logs
  console.error(`[Error] ${req.method} ${req.path} —`, err.message);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: env.isProduction ? 'An unexpected error occurred.' : err.message,
  });
}
