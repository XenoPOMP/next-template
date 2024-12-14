import { describe, test } from 'vitest';

import { testObject } from '@/__tests__/assets/utilities';
import { DesignSystemConfig } from '@/src/styles/themes/design-system.config.ts';

describe('Design config', () => {
  test('It exists', () => {
    testObject(DesignSystemConfig);
  });
});
