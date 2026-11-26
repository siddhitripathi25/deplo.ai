/**
 * src/controllers/health.controller.ts
 *
 * Health-check controller.
 *
 * Returns HTTP 200 with JSON confirming the API is running, and includes
 * the status of the PostgreSQL database connection via Prisma.
 */

import { Request, Response } from 'express';
import { prisma } from '../config/prisma';

/**
 * GET /api/health
 *
 * Checks server status and verifies database connectivity via Prisma.
 * Responds with HTTP 200 when healthy.
 */
export async function getHealth(req: Request, res: Response): Promise<void> {
  let dbStatus = 'disconnected';

  try {
    // Perform a lightweight query to confirm database connectivity
    await prisma.$queryRaw`SELECT 1`;
    dbStatus = 'connected';
  } catch (error) {
    // Log the error server-side, but do not expose credentials or internal details
    console.error('[HealthCheck] Database connection check failed:', (error as Error).message);
    dbStatus = 'error';
  }

  res.status(200).json({
    success: true,
    message: 'deplo.ai API is running',
    database: dbStatus,
  });
}
