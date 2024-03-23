import type { Defined, Modify } from '@xenopomp/advanced-types';
import { type Metadata } from 'next';

/**
 * Config of Open Graph from Next Metadata.
 *
 * @see [Next Metadata docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#merging)
 */
type OpenGraphConfig = Defined<NonNullable<Metadata['openGraph']>>;

export type OGImage = Defined<Exclude<OpenGraphConfig['images'], Array<any>>>;

export type ModifiedOGConfig = Modify<
  OpenGraphConfig,
  'images',
  Array<OGImage>
>;

interface IAppConstants {
  appName: string;
  sharedOpenGraphConfig: Partial<ModifiedOGConfig>;
}

export default IAppConstants;
