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
    ui: {
      fill: '#2D2C2C',
      border:
        'rgba(89.23755034804344 88.61154913902283 88.61154913902283 / 0.10000000149011612)',
    },
  },
} satisfies Theme;
