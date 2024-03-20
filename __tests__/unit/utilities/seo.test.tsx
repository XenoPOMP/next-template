import { describe, expect, test } from 'vitest';

import { testObject } from '@/__tests__/assets/utilities';
import { Months } from '@/src/utils/seo/sitemap-utils';

describe('SEO utilities', () => {
  test('Test Months enum', () => {
    testObject(Months);
  });
});
