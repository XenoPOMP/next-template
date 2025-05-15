import type { NextConfig } from 'next';

import config from '@/utils/next';

const baseConfig: NextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default config(baseConfig);
