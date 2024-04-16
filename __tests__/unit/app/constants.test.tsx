import { describe, test } from 'vitest';

import { testObject } from '@/__tests__/assets/utilities';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants';

describe('Test all constants', () => {
  test('SEO', () => {
    testObject(NO_INDEX_PAGE);
  });
});
