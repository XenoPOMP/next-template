import type { Config } from 'tailwindcss';
import type { Defined } from 'xenopomp-essentials';

type Theme = Defined<Defined<Config['theme']>['extend']>;

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
