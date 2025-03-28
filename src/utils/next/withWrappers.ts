import { withNextDevtools } from '@next-devtools/core/plugin';
import mdxWrapper from '@next/mdx';
import type { NextConfig } from 'next';
import { pipe } from 'xenopomp-essentials';

/**
 * Applies wrappers for Next.js config.
 *
 * @example
 * export default withWrappers(nextConfig);
 */
export const withWrappers: (config: NextConfig) => NextConfig =
  pipe(mdxWrapper()).pipe(withNextDevtools);
