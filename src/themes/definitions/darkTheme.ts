import type { Config } from 'tailwindcss';
import type { Defined } from 'xenopomp-essentials';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const darkTheme = {
  colors: {
    accent: '#1C759F',
    'accent-darker': '#104964',
    primary: {
      bg: '#202020',
      font: '#FFFFFF',
    },
    ui: {
      fill: '#2D2C2C',
      border:
        'rgba(89.23755034804344 88.61154913902283 88.61154913902283 / 0.10000000149011612)',
      badges: {
        default: {
          fill: '#606775',
          border:
            'rgba(84.76951450109482 87.46524944901466 92.85668894648552 / 0.20000000298023224)',
        },
        success: {
          fill: '#159941',
          border:
            'rgba(18.08705795556307 126.18017882108688 54.1180944442749 / 0.20000000298023224)',
        },
        warning: {
          fill: '#F86815',
          border:
            'rgba(205.26586711406708 88.3308658003807 20.93083865940571 / 0.20000000298023224)',
        },
        danger: {
          fill: '#ED3B3C',
          border:
            'rgba(194.2797902226448 46.14460989832878 46.976826041936874 / 0.20000000298023224)',
        },
      },
    },
  },
} satisfies Theme;
