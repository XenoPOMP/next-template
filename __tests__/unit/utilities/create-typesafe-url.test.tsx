import { describe, expect, test } from 'vitest';

import { createTypesafeUrl } from '@/utils/misc';

import { typesafeUrlFixtures } from '@test/assets';

describe('createTypesafeUrl func', () => {
  test.each(typesafeUrlFixtures)(
    'Test case "$name"',
    ({ href, params, queryParams, expected }) => {
      // Generate string
      const handled = createTypesafeUrl(href, {
        params,
        queryParams,
      });
      // Run assertion
      expect(handled).toBe(expected);
    },
  );
});
