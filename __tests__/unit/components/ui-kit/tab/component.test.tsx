import { describe, test } from 'vitest';

import { Tab } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('Tab component', () => {
  test('It renders', () => {
    assertRendering(<Tab />);
  });
});
