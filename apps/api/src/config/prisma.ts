/**
 * src/config/prisma.ts
 *
 * Reusable Prisma Client instance for deplo.ai API.
 *
 * Follows the singleton pattern recommended by Prisma to avoid creating multiple
 * client instances during development hot reloads (e.g. with tsx watch).
 *
 * In production, a single instance is created.
 * In development, the instance is attached to globalThis across module reloads.
 */

import { PrismaClient } from '@prisma/client';
import { env } from './env';

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: env.nodeEnv === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (env.nodeEnv !== 'production') {
  globalForPrisma.prisma = prisma;
}
