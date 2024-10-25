import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

import { APP_NAME, SHARED_OG_CONFIG } from '@/app/constants';

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
    ...SHARED_OG_CONFIG,

    images: [...(SHARED_OG_CONFIG.images || []), ...(options?.images || [])],

    type: 'website',
    title: options?.title || APP_NAME,
    description: options?.description || '',
  };
};
