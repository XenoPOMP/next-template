import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Field } from '@/components/ui/kit';

describe('Field component', () => {
  test('It renders', () => {
    assertRendering(<Field />);
  });
});
