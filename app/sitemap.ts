import { AppConstants } from '@/app/app.constants';
import { useEnv } from '@/src/hooks';
import { type Sitemap } from '@/src/utils/seo/sitemap-utils';

export default function sitemap(): Sitemap {
  const env = useEnv();
  const CANONICAL = env.get('CANONICAL_URL') || AppConstants.defaultCanonical;

  return [
    {
      url: `${CANONICAL}`,
      // lastModified: new Date(2024, Months.February, 25),
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
