import type { CustomThemeConfig, KeyValuePair } from 'tailwindcss/types/config';

const padding: KeyValuePair = {
  1: 'var(--p-level-1)',
  2: 'var(--p-level-2)',
  3: 'var(--p-level-3)',
  4: 'var(--p-level-4)',
  5: 'var(--p-level-5)',
};

// This object contains TW values` overrides
// needed for design system.
export const DesignSystemConfig: Partial<CustomThemeConfig> = {
  padding,
  margin: padding,
  gap: padding,

  fontSize: {
    24: 'var(--p24)',
    20: 'var(--p20)',
    16: 'var(--p16)',
    14: 'var(--p14)',
  },
};
