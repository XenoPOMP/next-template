import type { Metadata } from 'next';

/**
 * This utility allows to generate Next 13
 * [Metadata object](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object).
 *
 * @param props
 */
export const generateStaticMetadata = ({ ...rest }: Metadata): Metadata => {
  return { ...rest };
};
