import { describe, test } from 'vitest';

import { List } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('List component', () => {
  test('It renders', () => {
    assertRendering(<List />);
  });
});
