/**
 * src/controllers/health.controller.ts
 *
 * Health-check controller.
 *
 * A controller holds the request-handling logic for a specific resource.
 * Keeping it separate from the route definition makes the code easier to
 * test and reason about as the application grows.
 */

import { Request, Response } from 'express';

/**
 * GET /api/health
 *
 * Returns HTTP 200 with a JSON body confirming the API is running.
 * This endpoint is intentionally simple — it will be extended in later
 * phases to include database connectivity checks, version info, etc.
 */
export function getHealth(req: Request, res: Response): void {
  res.status(200).json({
    success: true,
    message: 'deplo.ai API is running',
  });
}
