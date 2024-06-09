import { afterEach, describe, test, vi } from 'vitest';
import MatchMediaMock from 'vitest-matchmedia-mock';

import { mockEnv, mockFonts } from '@/__tests__/assets/mocks';
import {
  expectToRender,
  injectMocks,
  testObject,
} from '@/__tests__/assets/utilities';
import RootLayout, { generateMetadata } from '@/app/layout';

describe('Root layout test', () => {
  const matchMediaMock = new MatchMediaMock();

  injectMocks(() => {
    mockEnv();
    mockFonts();

    // Mock window.matchMedia.
    matchMediaMock.useMediaQuery('(prefers-color-scheme: dark)');

    return () => matchMediaMock.destroy();
  });

  afterEach(() => {
    matchMediaMock.clear();
  });

  test('It renders', () => {
    expectToRender(<RootLayout>Hello world!</RootLayout>);
  });

  test('Metadata generates', async () => {
    const metadata = await generateMetadata();
    testObject(metadata);
  });

  test('Canonical url equals to constant value by default', async () => {
    vi.unstubAllEnvs();

    const metadata = await generateMetadata();
    testObject(metadata);
  });
});
