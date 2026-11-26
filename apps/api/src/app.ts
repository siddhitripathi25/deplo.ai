/**
 * src/app.ts
 *
 * Express application factory.
 *
 * This file creates and configures the Express app — middleware, routes, and
 * error handlers. It does NOT start the HTTP server. The server is started in
 * server.ts, which keeps application configuration separate from process
 * lifecycle concerns (useful for testing).
 */

import cors from 'cors';
import express, { Application } from 'express';

import { errorMiddleware } from './middleware/error.middleware';
import { notFoundMiddleware } from './middleware/not-found.middleware';
import healthRouter from './routes/health.routes';

export function createApp(): Application {
  const app = express();

  // -------------------------------------------------------------------------
  // Core middleware
  // -------------------------------------------------------------------------

  // Parse incoming JSON request bodies
  app.use(express.json());

  // Parse URL-encoded bodies (e.g. HTML form submissions)
  app.use(express.urlencoded({ extended: true }));

  // Enable CORS for all origins in development.
  // In production, replace the wildcard with an explicit allow-list of origins.
  app.use(cors());

  // -------------------------------------------------------------------------
  // Routes — all API routes are mounted under /api
  // -------------------------------------------------------------------------

  app.use('/api', healthRouter);

  // -------------------------------------------------------------------------
  // Error handling — must be registered after all routes
  // -------------------------------------------------------------------------

  // 404 handler: catches any request that did not match a route above
  app.use(notFoundMiddleware);

  // Global error handler: catches errors thrown/passed inside route handlers
  app.use(errorMiddleware);

  return app;
}
