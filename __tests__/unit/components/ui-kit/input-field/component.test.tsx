import { describe, test } from 'vitest';

import { InputField } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('InputField component', () => {
  test('It renders', () => {
    assertRendering(<InputField />);
  });
});
