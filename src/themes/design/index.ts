import type { CustomThemeConfig, KeyValuePair } from 'tailwindcss/types/config';

import { mapAndReduce } from '../api';

// All available padding sizes
const sizing: KeyValuePair = mapAndReduce([1, 2, 3, 4, 5] as const, n => ({
  [n]: `var(--p-level-${n})`,
}));

// All available font sizes
const fontSize: KeyValuePair = mapAndReduce([24, 20, 16, 14] as const, n => ({
  [n]: `var(--p${n})`,
}));

// This object contains TW values` overrides
// needed for design system.
export const DesignSystemConfig: Partial<CustomThemeConfig> = {
  padding: sizing,
  margin: sizing,
  gap: sizing,
  fontSize,
};
