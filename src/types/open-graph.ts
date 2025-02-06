import type { Metadata } from 'next';
import type { Defined, Modify } from 'xenopomp-essentials';

/**
 * Config of Open Graph from Next Metadata.
 *
 * @see [Next Metadata docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#merging)
 */
type OpenGraphConfig = Defined<NonNullable<Metadata['openGraph']>>;

export type OGImage = Defined<Exclude<OpenGraphConfig['images'], Array<any>>>;

// This type serves shared OG config interface
export type ModifiedOGConfig = Modify<
  OpenGraphConfig,
  'images',
  Array<OGImage>
>;
