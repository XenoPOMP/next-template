import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Spacer } from '@/components/ui';

describe('Spacer component', () => {
  test('It renders', () => {
    assertRendering(<Spacer />);
  });
});
