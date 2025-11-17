import { describe, test } from 'vitest';

import { Tab, TabView } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('TabView component', () => {
  test('It renders', () => {
    assertRendering(
      <TabView>
        <Tab name='First'>First</Tab>
        <Tab name='Second'>Second</Tab>
      </TabView>,
    );
  });
});
