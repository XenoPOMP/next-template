import type { Config } from 'tailwindcss';
import type { Defined } from 'xenopomp-essentials/types';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const lightTheme = {
  colors: {
    primary: {
      bg: '#FFF',
      font: '#000',
    },
  },
} satisfies Theme;
