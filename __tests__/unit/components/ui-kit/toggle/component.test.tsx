import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Toggle } from '@/components/ui/kit';

describe('UI Kit / Toggle', () => {
  test('It renders', () => {
    assertRendering(<Toggle />);
  });
});
