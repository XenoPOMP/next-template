import { describe, test } from 'vitest';

import { Avatar } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Avatar component', () => {
  test('It renders', () => {
    assertRendering(<Avatar />);
  });
});
