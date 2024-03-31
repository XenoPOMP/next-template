import { type NextFont } from 'next/dist/compiled/@next/font';
import { vi } from 'vitest';

const MockFont: NextFont = {
  className: 'className',
  style: {
    fontFamily: 'fontFamily',
  },
};

/**
 * This function allows you to mock fonts from **next/google/fonts**.
 */
export const mockFonts = () => {
  vi.mock('next/font/google', () => {
    const fontsToMock = ['Inter'];
    const map: Record<string, () => NextFont> = {};

    // Bind mock font to each font name
    fontsToMock.forEach(font => (map[font] = () => MockFont));

    return map;
  });
};
