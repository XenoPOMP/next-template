import { describe, expect, test } from 'vitest';

import { DesignSystemConfig } from '@/styles/themes/design-system.config';

describe('Design config', () => {
  test('It exists', () => {
    expect(DesignSystemConfig).toBeDefined();
  });
});
