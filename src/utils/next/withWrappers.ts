import mdxWrapper from '@next/mdx';
import { pipe } from 'xenopomp-essentials';

import { mapEnvToCfg } from './map-env-to-cfg';

/**
 * Applies wrappers for Next.js config.
 *
 * @example
 * export default withWrappers(nextConfig);
 */
export const withWrappers = pipe(mdxWrapper()).pipe(mapEnvToCfg);
