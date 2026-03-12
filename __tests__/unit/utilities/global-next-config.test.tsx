import { describe, expect, test } from 'vitest';
import { assertNotThrowing } from 'xenopomp-essentials/vitest';

import nextConfig from '@/utils/next';

describe('Global NextConfig util', () => {
  test('Wrappers can be empty', () => {
    assertNotThrowing(() => nextConfig({}));
  });

  test('Wrappers can be enabled', () => {
    assertNotThrowing(() =>
      nextConfig(
        {},
        {
          mdx: true,
          serwist: {
            swSrc: 'app/sw.ts',
            swDest: 'public/sw.js',
          },
        },
      ),
    );
  });

  test('Webpack is modified', () => {
    const config = nextConfig({});
    expect(config.webpack).toBeDefined();
    assertNotThrowing(() =>
      config.webpack!(
        {
          plugins: [],
        },
        {} as any,
      ),
    );
  });

  test('MDX can be disabled', () => {
    assertNotThrowing(() =>
      nextConfig(
        {},
        {
          mdx: false,
        },
      ),
    );
  });
});
