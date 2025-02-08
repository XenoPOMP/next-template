import { describe, test } from 'vitest';

import { Heading } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Heading element', () => {
  test('It renders', () => {
    for (const lvl of [1, 2, 3, 4, 5] as const) {
      assertRendering(<Heading level={lvl} />);
    }
  });
});
