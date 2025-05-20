import { describe, test } from 'vitest';

import { Field } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Field component', () => {
  test('It renders', () => {
    assertRendering(<Field />);
  });
});
