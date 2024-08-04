import type { CustomThemeConfig } from 'tailwindcss/types/config';

// This object contains TW values` overrides
// needed for design system.
export const DesignSystem: Partial<CustomThemeConfig> = {
  padding: {
    1: 'var(--p-level-1)',
    2: 'var(--p-level-2)',
    3: 'var(--p-level-3)',
    4: 'var(--p-level-4)',
    5: 'var(--p-level-5)',
  },

  fontSize: {
    24: 'var(--p24)',
    20: 'var(--p20)',
    16: 'var(--p16)',
    14: 'var(--p14)',
  },
};
