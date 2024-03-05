import { useEnv } from '@/src/hooks/use-env';
import { type Sitemap } from '@/src/utils/seo/sitemap-utils';

export default function sitemap(): Sitemap {
  const env = useEnv();

  const CANONICAL = env.getOrThrow('CANONICAL_URL');

  return [
    {
      url: `${CANONICAL}`,
      lastModified: new Date(2024, 2, 25),
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
