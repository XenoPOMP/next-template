import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Glass } from '@/components/ui/kit';

describe('Glass component', () => {
  test('It renders', () => {
    assertRendering(<Glass />);
  });
});
