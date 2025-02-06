import { describe, vi } from 'vitest';
import MatchMediaMock from 'vitest-matchmedia-mock';

import { FONT_MOCK } from '@app/constants';
import RootLayout, { generateMetadata } from '@app/layout.tsx';

import { injectMocks, testNextPage } from '@test/assets';

describe('Root layout test', () => {
  const matcher = new MatchMediaMock();

  injectMocks(() => {
    vi.mock('next/font/google', () => ({
      Inter: FONT_MOCK,
    }));
  });

  injectMocks(() => {
    matcher.clear();
    return () => matcher.destroy();
  }, 'afterEach');

  testNextPage(<RootLayout children={undefined} />, {
    generateMetadata,
  });
});
