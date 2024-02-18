import { FunctionPrimitive } from '@xenopomp/advanced-types';
import { NextFont } from 'next/dist/compiled/@next/font';
import { vi } from 'vitest';

/** This function allows you to mock fonts from **next/google/fonts**. */
export const mockFonts = () => {
  /** These fonts will be mocked from Google Fonts. */
  const fontNames: string[] = ['Unbounded', 'Inter'];

  /** This function allows to generate mocks for fonts. */
  const fonts = (
    names: string[]
  ): Record<string, FunctionPrimitive<NextFont>> => {
    const result: ReturnType<typeof fonts> = {};

    /** Generate mock fonts. */
    names.forEach(name => {
      result[name] = (...args) => ({
        className: 'className',
        style: {
          fontFamily: 'fontFamily',
        },
      });
    });

    return result;
  };

  /** Mock Google Fonts package. */
  vi.mock('next/font/google', () => fonts(fontNames));
};
