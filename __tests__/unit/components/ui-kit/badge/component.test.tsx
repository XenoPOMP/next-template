import { describe, test } from 'vitest';

import { Badge } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Badge component', () => {
  test('It renders', () => {
    assertRendering(<Badge />);
  });
});
