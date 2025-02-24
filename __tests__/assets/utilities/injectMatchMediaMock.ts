import MatchMediaMock from 'vitest-matchmedia-mock';

import { injectMocks } from '@test/assets';

/**
 * Mocks stuff related to window.matchMedia.
 *
 * @example
 * describe('Root layout test', () => {
 *   // Use it inside describe suite. Place it to top
 *   injectMatchMediaMock();
 *
 *   injectMocks(() => {
 *     vi.mock('next/font/google', () => ({
 *       Inter: FONT_MOCK,
 *     }));
 *   });
 *
 *   testNextPage(<RootLayout children={undefined} />, {
 *     generateMetadata,
 *   });
 * });
 */
export const injectMatchMediaMock = () => {
  const matcher = new MatchMediaMock();

  injectMocks(() => {
    matcher.clear();
    return () => matcher.destroy();
  }, 'afterEach');
};
