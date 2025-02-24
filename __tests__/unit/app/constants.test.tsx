import { describe, expect, test } from 'vitest';

import { NO_INDEX_PAGE } from '@app/constants';

import { matchingDataFixture } from '@test/assets';

describe('Test all constants', () => {
  test('SEO constant is defined', () => {
    expect(NO_INDEX_PAGE).toBeDefined();
  });

  test.each(matchingDataFixture)('Matching structure ($name)', ({ values }) => {
    const [real, match] = values;
    expect(real).toMatchStructure(match);
  });
});
