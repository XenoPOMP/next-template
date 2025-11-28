import { cleanup } from '@testing-library/react';
import { afterEach, describe, test } from 'vitest';
import { assertNotThrowing, assertRendering } from 'xenopomp-essentials/vitest';

import { Tab, TabView } from '@/components/ui/kit';

import {
  TAB_VIEW_TEST_NAMES,
  createTabViewTest,
  injectMatchMediaMock,
} from '@test/assets';

describe('TabView component', () => {
  injectMatchMediaMock();

  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertRendering(
      <TabView>
        <Tab name='First'>First</Tab>
        <Tab name='Second'>Second</Tab>
      </TabView>,
    );
  });

  test('Tab is removed from context on unmount', () => {
    const { clickButton } = createTabViewTest({});
    assertNotThrowing(() => clickButton(TAB_VIEW_TEST_NAMES.deinitTab));
  });
});
