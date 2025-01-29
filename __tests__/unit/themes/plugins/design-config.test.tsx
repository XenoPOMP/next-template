import { describe, test } from 'vitest';

import { DesignSystemConfig } from '@/styles/themes/design-system.config';

import { testObject } from '@test/assets';

describe('Design config', () => {
  test('It exists', () => {
    testObject(DesignSystemConfig);
  });
});
