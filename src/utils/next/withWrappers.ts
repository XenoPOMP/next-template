import mdxWrapper from '@next/mdx';
import type { NextConfig } from 'next';
import { pipe } from 'xenopomp-essentials';

type NextConfigPipe = (init: NextConfig) => NextConfig;

/**
 * Applies wrappers for Next.js config.
 *
 * @example
 * export default withWrappers(nextConfig);
 */
export const withWrappers: NextConfigPipe = pipe(mdxWrapper());
