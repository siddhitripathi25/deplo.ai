/**
 * types/index.ts
 *
 * Shared TypeScript types for the deplo.ai app.
 * As the app grows, split these into separate files
 * (e.g. types/deployment.ts, types/user.ts) and re-export here.
 */

// ---------------------------------------------------------------------------
// Deployment types (skeleton — to be expanded in future phases)
// ---------------------------------------------------------------------------

export type DeploymentStatus =
  | 'queued'
  | 'building'
  | 'deploying'
  | 'ready'
  | 'failed'
  | 'cancelled';

export interface Deployment {
  id: string;
  projectName: string;
  status: DeploymentStatus;
  branch: string;
  commitSha: string;
  commitMessage: string;
  createdAt: string;    // ISO 8601 date string
  finishedAt?: string;  // undefined if still running
  url?: string;         // Live URL once deployed
}

// ---------------------------------------------------------------------------
// API response wrapper (generic)
// ---------------------------------------------------------------------------

export interface ApiResponse<T> {
  data: T;
  error?: string;
  statusCode: number;
}
