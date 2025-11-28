import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Badge } from '@/components/ui/kit';

describe('Badge component', () => {
  test('It renders', () => {
    assertRendering(<Badge />);
  });
});
