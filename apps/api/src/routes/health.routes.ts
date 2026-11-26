/**
 * src/routes/health.routes.ts
 *
 * Defines the HTTP routes for the health-check resource.
 *
 * Using an Express Router keeps route definitions modular. Each feature area
 * (health, deployments, users, …) will have its own router file, all mounted
 * in app.ts under a shared /api prefix.
 */

import { Router } from 'express';
import { getHealth } from '../controllers/health.controller';

const router = Router();

// GET /api/health
router.get('/health', getHealth);

export default router;
