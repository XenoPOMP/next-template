import { describe, test } from 'vitest';

import { VStack } from '@/components/ui';

import { assertRendering } from '@test/assets';

describe('VStack component', () => {
  test('It renders', () => {
    assertRendering(<VStack />);
  });
});
