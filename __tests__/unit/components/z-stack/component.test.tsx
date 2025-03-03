import { describe, test } from 'vitest';

import { ZStack } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('ZStack component', () => {
  test('It renders', () => {
    assertRendering(<ZStack />);
  });
});
