import type { NextFont } from 'next/dist/compiled/@next/font';
import { vi } from 'vitest';

import { FONTS_TO_MOCK } from '@/app/constants';

/** Primitive font mock. */
const MockFont: NextFont = {
  className: 'className',
  style: {
    fontFamily: 'fontFamily',
  },
};

/** This function allows you to mock fonts from **next/google/fonts**. */
export const mockFonts = () => {
  vi.mock('next/font/google', () => {
    // Bind mock font to each font name
    const map: Record<string, () => NextFont> = FONTS_TO_MOCK.reduce(
      (o, key) => ({ ...o, [key]: () => MockFont }),
      {},
    );

    return map;
  });
};
