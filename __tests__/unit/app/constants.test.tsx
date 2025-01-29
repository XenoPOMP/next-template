import { describe, test } from 'vitest';

import { NO_INDEX_PAGE } from '@app/constants';

import { testObject } from '@test/assets';

describe('Test all constants', () => {
  test('SEO', () => {
    testObject(NO_INDEX_PAGE);
  });
});
