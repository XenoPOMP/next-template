import type { NextConfig } from 'next';

import config from '@/utils/next';

const baseConfig: NextConfig = {
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
