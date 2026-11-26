/**
 * src/middleware/not-found.middleware.ts
 *
 * Catches any request that did not match a registered route and returns a
 * consistent 404 JSON response.
 *
 * Register this middleware AFTER all route definitions and BEFORE the
 * error-handling middleware so that unmatched routes are handled cleanly.
 */

import { Request, Response } from 'express';

export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}
