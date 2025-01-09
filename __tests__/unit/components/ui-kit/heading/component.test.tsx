import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { Heading } from '@/src/components/ui/kit';

describe('Heading element', () => {
  test('It renders', () => {
    for (const lvl of [1, 2, 3, 4, 5] as const) {
      expectToRender(<Heading level={lvl} />);
    }
  });
});
