import { afterEach, describe, test, vi } from 'vitest';

import { testObject } from '@/__tests__/assets/utilities';
import { Months } from '@/src/utils/seo/sitemap-utils';

describe('SEO utilities', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test('Test Months enum', () => {
    testObject(Months);
  });
});
