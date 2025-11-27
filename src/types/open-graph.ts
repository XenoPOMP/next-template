import type { Metadata } from 'next';
import type { Modify } from 'xenopomp-essentials';

/**
 * Config of Open Graph from Next Metadata.
 *
 * @see [Next Metadata docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#merging)
 */
type OpenGraphConfig = NonNullable<NonNullable<Metadata['openGraph']>>;

export type OGImage = NonNullable<
  Exclude<OpenGraphConfig['images'], Array<any>>
>;

// This type serves shared OG config interface
export type ModifiedOGConfig = Modify<
  OpenGraphConfig,
  'images',
  Array<OGImage>
>;
