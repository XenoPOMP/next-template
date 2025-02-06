import type { NextConfig } from 'next';

import { withWrappers } from '@/utils/next';

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withWrappers(nextConfig);
