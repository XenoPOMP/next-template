import { describe, test } from 'vitest';

import { Badge } from '@/components/ui/kit';
import { allBadgeVariants } from '@/components/ui/kit/Badge/Badge.variants.ts';

import { assertRendering } from '@test/assets';

describe('Badge component', () => {
  test('It renders', () => {
    assertRendering(<Badge />);
  });

  test.each(
    Object.keys(allBadgeVariants).map(i => ({
      name: i as keyof typeof allBadgeVariants,
    })),
  )('Badge[$name] renders', ({ name }) => {
    assertRendering(<Badge variant={name} />);
  });
});
