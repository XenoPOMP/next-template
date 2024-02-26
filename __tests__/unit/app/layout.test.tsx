import { afterAll, beforeAll, describe, test } from 'vitest';

import { clearMocks, mockFonts } from '@/__tests__/assets/mocks';
import { expectToRender } from '@/__tests__/assets/utilities';
import RootLayout from '@/app/layout';

describe('Root layout test', () => {
  beforeAll(() => {
    mockFonts();
  });

  afterAll(() => {
    clearMocks();
  });

  test('It renders', () => {
    expectToRender(<RootLayout>Hello world!</RootLayout>);
  });
});
