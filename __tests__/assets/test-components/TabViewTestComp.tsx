import type { FC } from 'react';
import { useState } from 'react';

import { Tab, TabView } from '@/components/ui/kit';

import { TestUI, createTestingComponent } from '@test/assets';

export const TAB_VIEW_TEST_NAMES = {
  deinitTab: 'TAB_DEINIT',
} as const;

// eslint-disable-next-line jsdoc/require-jsdoc
const TAB_VIEW_TEST_UI: FC = () => {
  const [shown, setShown] = useState(true);

  return (
    <TestUI>
      <TestUI.Button
        testButtonAttribute={TAB_VIEW_TEST_NAMES.deinitTab}
        onClick={() => setShown(false)}
      />

      <TabView>
        {shown && <Tab name='First'>This tab is meant to be unmounted.</Tab>}
      </TabView>
    </TestUI>
  );
};

export const createTabViewTest = createTestingComponent(TAB_VIEW_TEST_UI);
