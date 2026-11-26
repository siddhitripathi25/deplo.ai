/**
 * src/server.ts
 *
 * Application entry point.
 *
 * Responsibilities:
 *  1. Load environment variables (must happen before anything else).
 *  2. Create the Express app.
 *  3. Start the HTTP server on the configured port.
 *
 * Everything else (routes, middleware, DB connections) belongs in other
 * modules — not here — to keep the entry point clean and testable.
 */

import { env } from './config/env';
import { createApp } from './app';

const app = createApp();

app.listen(env.port, () => {
  console.log(`✅  deplo.ai API running`);
  console.log(`    Environment : ${env.nodeEnv}`);
  console.log(`    Port        : ${env.port}`);
  console.log(`    Health      : http://localhost:${env.port}/api/health`);
});
