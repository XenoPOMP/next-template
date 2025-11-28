import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { InputField } from '@/components/ui/kit';

describe('InputField component', () => {
  test('It renders', () => {
    assertRendering(<InputField />);
  });
});
