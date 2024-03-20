import { afterAll, beforeAll, describe, test } from 'vitest';

import { clearMocks, mockFonts } from '@/__tests__/assets/mocks';
import { mockEnv } from '@/__tests__/assets/mocks/mockEnv';
import { expectToRender, testObject } from '@/__tests__/assets/utilities';
import RootLayout, { generateMetadata } from '@/app/layout';

describe('Root layout test', () => {
  beforeAll(() => {
    mockFonts();
    mockEnv();
  });

  afterAll(() => {
    clearMocks();
  });

  test('It renders', () => {
    expectToRender(<RootLayout>Hello world!</RootLayout>);
  });

  test('Metadata generates', async () => {
    const metadata = await generateMetadata();

    testObject(metadata);
  });
});
