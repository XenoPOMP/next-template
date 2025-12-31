import { describe, vi } from 'vitest';
import { injectMocks } from 'xenopomp-essentials/vitest';

import { FONT_MOCK } from '@app/constants';
import RootLayout, { generateMetadata } from '@app/layout.tsx';

import { injectMatchMediaMock, testNextPage } from '@test/assets';

describe('Root layout test', () => {
  // Use it inside describe suite. Place it to top
  injectMatchMediaMock();

  injectMocks(() => {
    vi.mock('next/font/google', () => ({
      Inter: FONT_MOCK,
    }));
  });

  testNextPage(<RootLayout children={undefined} />, {
    generateMetadata,
  });
});
