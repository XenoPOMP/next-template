import type { Config } from 'tailwindcss';

type Theme = NonNullable<NonNullable<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const darkTheme = {
  colors: {
    primary: {
      bg: '#202020',
      font: '#FFFFFF',
    },
  },
} satisfies Theme;
