import { afterEach, describe, test, vi } from 'vitest';
import { assertNotThrowing } from 'xenopomp-essentials/vitest';

import { generateOpenGraph } from '@/utils/seo';

describe('SEO utilities', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test('OG generation has fallbacks', () => {
    assertNotThrowing(() => generateOpenGraph());
  });
});
