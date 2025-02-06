import { describe, test, vi } from 'vitest';
import MatchMediaMock from 'vitest-matchmedia-mock';

import { FONT_MOCK } from '@app/constants';
import RootLayout from '@app/layout.tsx';

import { expectToRender, injectMocks } from '@test/assets';

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

  test('It renders', () => {
    expectToRender(<RootLayout children={undefined} />);
  });
});
