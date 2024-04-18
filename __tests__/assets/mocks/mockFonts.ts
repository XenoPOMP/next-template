import { type NextFont } from 'next/dist/compiled/@next/font';
import type * as GOOGLE_FONTS from 'next/font/google';
import { vi } from 'vitest';

/** All Google Fonts names inside next/font/google package. */
type GoogleFonts = keyof typeof GOOGLE_FONTS;

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
    /** List of font names that have to be mocked. */
    const fontsToMock: GoogleFonts[] = ['Inter', 'Geologica'];

    // Bind mock font to each font name
    const map: Record<string, () => NextFont> = fontsToMock.reduce(
      (o, key) => ({ ...o, [key]: () => MockFont }),
      {},
    );

    return map;
  });
};
