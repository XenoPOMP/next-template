import { describe, test } from 'vitest';

import { TabView } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('TabView component', () => {
  test('It renders', () => {
    assertRendering(<TabView />);
  });
});
