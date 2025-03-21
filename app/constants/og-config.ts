import type { ModifiedOGConfig } from '@/types';
import { env } from '@/utils/env';

import ogSquareImg from '@public/open-graph/og (200x200).png';
import ogWideImg from '@public/open-graph/og (1200x627).png';

export const SHARED_OG_CONFIG = {
  images: [
    {
      url: ogSquareImg.src,
      width: 200,
      height: 200,
    },
    {
      url: ogWideImg.src,
      width: 1200,
      height: 627,
    },
  ],
  siteName: 'Next Template',
  url: env.CANONICAL_URL,
} satisfies Partial<ModifiedOGConfig>;
