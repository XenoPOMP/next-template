import { afterEach, describe, test, vi } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { generateOpenGraph } from '@/src/utils/seo';

describe('SEO utilities', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test('OG generation has fallbacks', () => {
    assertNotThrowing(() => generateOpenGraph());
  });
});
