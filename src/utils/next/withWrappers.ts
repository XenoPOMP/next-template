import mdxWrapper from '@next/mdx';
import { pipe } from 'xenopomp-essentials';

/**
 * Applies wrappers for Next.js config.
 *
 * @example
 * export default withWrappers(nextConfig);
 */
export const withWrappers = pipe(mdxWrapper());
