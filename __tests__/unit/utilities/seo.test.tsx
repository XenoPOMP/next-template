import { afterEach, describe, test, vi } from 'vitest';

import { generateOpenGraph } from '@/utils/seo';

import { assertNotThrowing } from '@test/assets';

describe('SEO utilities', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test('OG generation has fallbacks', () => {
    assertNotThrowing(() => generateOpenGraph());
  });
});
