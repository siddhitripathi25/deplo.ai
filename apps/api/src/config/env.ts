/**
 * src/config/env.ts
 *
 * Loads and validates environment variables.
 * Import this module early — before any other app code — so that all
 * process.env values are available throughout the application.
 *
 * dotenv reads the .env file (if present) and sets the values on process.env.
 * In production the variables are typically injected by the hosting platform,
 * so dotenv gracefully does nothing when the file is absent.
 */

import dotenv from 'dotenv';

// Load .env into process.env
dotenv.config();

export const env = {
  /** Port the HTTP server will listen on. Defaults to 5000. */
  port: parseInt(process.env.API_PORT ?? '5000', 10),

  /** Current runtime environment. Defaults to 'development'. */
  nodeEnv: process.env.NODE_ENV ?? 'development',

  /** True when running in production. Used to suppress sensitive error details. */
  isProduction: process.env.NODE_ENV === 'production',
} as const;
