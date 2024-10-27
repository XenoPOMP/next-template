import type { Config } from 'tailwindcss';
import tailwindThemer from 'tailwindcss-themer';

import { DesignSystemConfig } from './src/styles/themes/design-system.config.ts';
import { CustomClassesPlugin } from './src/styles/themes/plugins';
import { darkTheme, lightTheme } from './src/themes';

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
