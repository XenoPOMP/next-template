import type { NextConfig } from 'next';
import { describe, expect, test } from 'vitest';
import type { Defined } from 'xenopomp-essentials';

import nextConfig from '@/utils/next';

import { assertNotThrowing } from '@test/assets';

describe('Global NextConfig util', () => {
  // eslint-disable-next-line jsdoc/require-jsdoc
  const testCfg = ({
    base,
    options,
    expected,
  }: {
    base: NextConfig;
    options: Defined<Parameters<typeof nextConfig>[1]>;
    expected: NextConfig;
  }) => {
    const transformed = nextConfig(base, options);
    expect(transformed).toStrictEqual(expected);
  };

  test('Wrappers can be disabled', () => {
    testCfg({
      base: {},
      options: {
        mdx: false,
        serwist: false,
      },
      expected: {},
    });
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
});
