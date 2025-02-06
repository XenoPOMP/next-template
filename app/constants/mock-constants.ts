import type { NextFont } from 'next/dist/compiled/@next/font';
import type { Fn } from 'xenopomp-essentials';

import type { GoogleFonts } from '@/types';

// List of fonts that have to be mocked.
export const FONTS_TO_MOCK: GoogleFonts[] = ['Inter', 'Geologica'];

// Default mock for any font export.
export const FONT_MOCK: Fn<[], NextFont> = () => ({
  className: 'mocked',
  style: {
    fontFamily: 'mocked',
  },
});
