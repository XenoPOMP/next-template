import type { StrippedNextConfig } from '@/utils/next';
import config from '@/utils/next';

/**
 * Do not extend webpack config here! Modify the
 * config creation utility at {@link config}.
 */
const baseConfig: StrippedNextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Support docker standalone build
  output: 'standalone',
};

export default config(baseConfig, {
  mdx: true,
  serwist: {
    cacheOnNavigation: true,
    swSrc: 'app/sw.ts',
    swDest: 'public/sw.js',
  },
});
