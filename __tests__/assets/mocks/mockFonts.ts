import type { NextFont } from 'next/dist/compiled/@next/font';
import { vi } from 'vitest';

import { FONTS_TO_MOCK, FONT_MOCK } from '@app/constants';

type MockMap = Record<string, () => NextFont>;

// Converts map of font mocks to object that can be exported
// as library exports.
function reduce(map: MockMap[]): MockMap {
  return map.reduce((o, next) => ({ ...o, ...next }));
}

/** This function allows you to mock fonts from **next/google/fonts**. */
export const mockFonts = () => {
  vi.mock('next/font/google', () => {
    const map: MockMap[] = FONTS_TO_MOCK.map(font => ({
      [font]: () => FONT_MOCK,
    }));
    const reduced = reduce(map);

    return reduced;
  });
};
