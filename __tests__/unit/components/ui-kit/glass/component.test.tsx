import { describe, test } from 'vitest';

import { Glass } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Glass component', () => {
  test('It renders', () => {
    assertRendering(<Glass />);
  });
});
