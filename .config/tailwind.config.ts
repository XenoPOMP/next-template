import type { Config } from 'tailwindcss';
import FullBleed from 'tailwindcss-full-bleed';
import tailwindThemer from 'tailwindcss-themer';

import { darkTheme, lightTheme } from '../src/themes';
import { DesignSystemConfig } from '../src/themes/design';
import { CustomClassesPlugin } from '../src/themes/plugins';

const tailwindConfig: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: {
      // Comment line below if design system is not needed
      ...DesignSystemConfig,

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    CustomClassesPlugin(),
    FullBleed,
    tailwindThemer({
      defaultTheme: {
        extend: lightTheme,
      },
      themes: [
        {
          name: 'dark',
          extend: darkTheme,
        },
      ],
    }),
  ],
};

export default tailwindConfig;
