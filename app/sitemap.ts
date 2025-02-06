import { env } from '@/utils/env';
import type { Sitemap } from '@/utils/seo/sitemap-utils';

export default function sitemap(): Sitemap {
  const CANONICAL = env.CANONICAL_URL;

  return [
    {
      url: `${CANONICAL}`,
      // lastModified: new Date(2024, Months.February, 25),
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
