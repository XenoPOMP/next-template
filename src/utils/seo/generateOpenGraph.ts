import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

import {
  APP_DEFAULT_TITLE,
  APP_DESCRIPTION,
  APP_NAME,
  APP_TITLE_TEMPLATE,
  SHARED_OG_CONFIG,
} from '@app/constants';

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

    images: [...SHARED_OG_CONFIG.images, ...(options?.images || [])],

    type: 'website',
    siteName: APP_NAME,
    title: options?.title || {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: options?.description || APP_DESCRIPTION,
  };
};
