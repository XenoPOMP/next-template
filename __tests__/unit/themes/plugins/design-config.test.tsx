import { describe, expect, test } from 'vitest';

import { DesignSystemConfig } from '@/themes/design';

describe('Design config', () => {
  test('It exists', () => {
    expect(DesignSystemConfig).toBeDefined();
  });
});
