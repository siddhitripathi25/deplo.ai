/**
 * Colors.ts
 *
 * Centralized color palette for deplo.ai.
 * All UI colors are defined here to ensure consistency and make
 * theme changes easy — only this file needs to be updated.
 */

export const Colors = {
  // Brand
  background: '#0F172A',      // Dark navy — primary background
  surface: '#1E293B',         // Slightly lighter — cards, panels
  surfaceHover: '#334155',    // Hovered/pressed surface state

  // Text
  textPrimary: '#F8FAFC',     // Near-white — headings, labels
  textSecondary: '#94A3B8',   // Muted grey — subtitles, hints
  textMuted: '#475569',       // Even more muted — disabled, placeholders

  // Accent
  accent: '#3B82F6',          // Blue — primary CTA, links
  accentLight: '#DBEAFE',     // Light blue — badges, highlights

  // Status colors (for deployment states)
  success: '#22C55E',         // Green — deployed, healthy
  warning: '#F59E0B',         // Amber — building, pending
  error: '#EF4444',           // Red — failed, error
  info: '#06B6D4',            // Cyan — informational

  // Borders
  border: '#1E293B',
  borderLight: '#334155',
} as const;

export type ColorKey = keyof typeof Colors;
