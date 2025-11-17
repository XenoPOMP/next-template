import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs';
import cn from 'classnames';
import { Inter } from 'next/font/google';

import '../app/globals.scss';

const mainFont = Inter({
  subsets: ['latin', 'cyrillic'],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    // Apply theme plugin
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),

    // Apply global font
    Story => (
      <div className={cn(mainFont.className)}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
