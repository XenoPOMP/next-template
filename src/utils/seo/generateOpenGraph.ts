import { type OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

import { AppConstants } from '@/app/app.constants';

/**
 * Generate OG image for metadata.
 *
 * @param options
 *
 * @example
 * export async function generateMetadata(): Promise<Metadata> {
 *   return generateStaticMetadata({
 *     ...
 *     openGraph: generateOpenGraph({
 *       title: 'Main page',
 *       description: 'This is a main page',
 *     }),
 *     ...
 *   });
 * }
 */
export const generateOpenGraph = (
  options?: Pick<OpenGraph, 'title' | 'description'> & {
    images?: Extract<OpenGraph['images'], Array<any>>;
  },
): OpenGraph => {
  return {
    ...AppConstants.sharedOpenGraphConfig,

    images: [
      ...(AppConstants.sharedOpenGraphConfig.images || []),
      ...(options?.images || []),
    ],

    type: 'website',
    title: options?.title || AppConstants.appName,
    description: options?.description || '',
  };
};
