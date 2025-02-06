import { describe, test } from 'vitest';

import RootLayout from '@app/layout.tsx';

import { expectToRender, injectMocks, mockFonts } from '@test/assets';

describe('Root layout test', () => {
  injectMocks(() => {
    mockFonts();
  });

  test('It imports', async () => {
    const sus = await import('next/font/google');
    // eslint-disable-next-line no-console
    console.log(sus);
  });

  test('It renders', () => {
    expectToRender(<RootLayout children={undefined} />);
  });
});
