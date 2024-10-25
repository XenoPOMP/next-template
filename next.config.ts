import mdxWrapper from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = mdxWrapper();

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
