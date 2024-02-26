import { NextFont } from 'next/dist/compiled/@next/font';
import { vi } from 'vitest';

/**
 * This function allows you to mock fonts from **next/google/fonts**.
 */
export const mockFonts = () => {
  vi.mock('next/font/google', () => {
    return {
      Inter: (): NextFont => ({
        className: 'className',
        style: {
          fontFamily: 'fontFamily',
        },
      }),
    };
  });
};
