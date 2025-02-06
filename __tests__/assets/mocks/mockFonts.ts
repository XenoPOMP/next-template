import { type Mock, vi } from 'vitest';

import { FONTS_TO_MOCK } from '@app/constants';

// Converts map of font mocks to object that can be exported
// as library exports.
function reduce(map: Record<string, Mock<any>>[]): Record<string, Mock<any>> {
  return map.reduce((o, next) => ({ ...o, ...next }));
}

/** This function allows you to mock fonts from **next/google/fonts**. */
export const mockFonts = () => {
  vi.mock('next/font/google', () => {
    const map = FONTS_TO_MOCK.map(font => ({
      [font]: vi.fn(),
    }));
    const reduced = reduce(map);

    return reduced;
  });
};
