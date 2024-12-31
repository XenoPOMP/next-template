import { afterEach, describe, test, vi } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { stubGlobal } from '@/__tests__/assets/utilities';
import type { SHARED_OG_CONFIG } from '@/app/constants';
import { generateOpenGraph } from '@/src/utils/seo';

describe('SEO utilities', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test('OG generation has fallbacks', () => {
    stubGlobal<typeof SHARED_OG_CONFIG>('SHARED_OG_CONFIG', {
      images: {},
    });

    assertNotThrowing(() => generateOpenGraph());
  });
});
