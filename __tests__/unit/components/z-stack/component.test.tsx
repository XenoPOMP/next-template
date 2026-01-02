import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { ZStack } from '@/components/ui';

describe('ZStack component', () => {
  test('It renders', () => {
    assertRendering(<ZStack />);
  });
});
