import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { HStack } from '@/components/ui';

describe('HStack component', () => {
  test('It renders', () => {
    assertRendering(<HStack />);
  });
});
