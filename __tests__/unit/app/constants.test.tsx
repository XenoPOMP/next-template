import { describe, expect, test } from 'vitest';

import { NO_INDEX_PAGE } from '@app/constants';

describe('Test all constants', () => {
  test('SEO', () => {
    expect(NO_INDEX_PAGE).toBeDefined();
  });
});
