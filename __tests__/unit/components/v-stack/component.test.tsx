import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { VStack } from '@/components/ui';

describe('VStack component', () => {
  test('It renders', () => {
    assertRendering(<VStack />);
  });
});
