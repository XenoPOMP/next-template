import { afterAll, afterEach, beforeAll, describe, test, vi } from 'vitest';
import MatchMediaMock from 'vitest-matchmedia-mock';

import { clearMocks, mockFonts } from '@/__tests__/assets/mocks';
import { mockEnv } from '@/__tests__/assets/mocks/mockEnv';
import { expectToRender, testObject } from '@/__tests__/assets/utilities';
import RootLayout, { generateMetadata } from '@/app/layout';

describe('Root layout test', () => {
  let matchMediaMock = new MatchMediaMock();

  beforeAll(() => {
    mockFonts();
    mockEnv();

    // Mock window.matchMedia.
    matchMediaMock.useMediaQuery('(prefers-color-scheme: dark)');
  });

  afterEach(() => {
    matchMediaMock.clear();
  });

  afterAll(() => {
    clearMocks();
    matchMediaMock.destroy();
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
