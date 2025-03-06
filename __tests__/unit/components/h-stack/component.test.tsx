import { describe, test } from 'vitest';

import { HStack } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('HStack component', () => {
  test('It renders', () => {
    assertRendering(<HStack />);
  });
});
