import deepmerge from 'deepmerge';
import type { Config } from 'tailwindcss';
import FullBleed from 'tailwindcss-full-bleed';
import tailwindThemer from 'tailwindcss-themer';

import { darkTheme, lightTheme } from './src/themes';
import { DesignSystemConfig } from './src/themes/design';
import type { TailwindExtension } from './src/themes/extensions';
import { SCREENS } from './src/themes/extensions';
import { CustomClassesPlugin } from './src/themes/plugins';

const tailwindConfig: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: deepmerge.all<TailwindExtension>([
      DesignSystemConfig,
      SCREENS,
      {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    ]),
  },
  plugins: [
    CustomClassesPlugin(),
    FullBleed,
    tailwindThemer({
      defaultTheme: {
        extend: darkTheme,
      },
      themes: [
        {
          name: 'light',
          extend: lightTheme,
        },
      ],
    }),
  ],
};

export default tailwindConfig;
