import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Heading } from '@/components/ui/kit';

describe('Heading element', () => {
  test('It renders', () => {
    for (const lvl of [1, 2, 3, 4, 5] as const) {
      assertRendering(<Heading level={lvl} />);
    }
  });
});
