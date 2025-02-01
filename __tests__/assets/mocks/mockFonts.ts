import type { NextFont } from 'next/dist/compiled/@next/font';
import { vi } from 'vitest';

import { FONTS_TO_MOCK } from '@app/constants';

// Bind mock font to each font name
const FONT_MAP: Record<string, () => NextFont> = FONTS_TO_MOCK.reduce(
  (o, key) => ({
    ...o,
    [key]: () => ({
      className: 'className',
      style: {
        fontFamily: 'fontFamily',
      },
    }),
  }),
  {},
);

/** This function allows you to mock fonts from **next/google/fonts**. */
export const mockFonts = () => {
  vi.mock('next/font/google', () => FONT_MAP);
  vi.mock('next/dist/compiled/@next/font/dist/google', () => FONT_MAP);
};
