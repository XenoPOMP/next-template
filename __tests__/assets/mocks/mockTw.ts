import type { PluginAPI } from 'tailwindcss/types/config';
import { vi } from 'vitest';

export const twApiMock = {
  addBase: vi.fn(),
  addComponents: vi.fn(),
  addUtilities: vi.fn(),
  addVariant: vi.fn(),
  config: vi.fn(),
  corePlugins: vi.fn(),
  e: vi.fn(),
  matchComponents: vi.fn(),
  matchUtilities: vi.fn(),
  matchVariant: vi.fn(),
  theme: vi.fn(),
} satisfies PluginAPI;
