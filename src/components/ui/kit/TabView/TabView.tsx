import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import type { ContextType, FC } from 'react';
import { useCallback, useMemo, useState } from 'react';
import type { ArrayItemType } from 'xenopomp-essentials';

import { TabViewContext } from './TabView.context';

// eslint-disable-next-line jsdoc/require-jsdoc
export const TabView: FC<unknown> = () => {
  const [tabs, setTabs] = useState<ContextType<typeof TabViewContext>['tabs']>(
    [],
  );

  const registerTab = useCallback(
    (newTab: ArrayItemType<ContextType<typeof TabViewContext>['tabs']>) => {
      setTabs(prev => [...prev, newTab]);
    },
    [setTabs],
  );

  const contextValue = useMemo(
    () => ({
      tabs,
      registerTab,
    }),
    [registerTab, tabs],
  );

  return (
    <TabViewContext value={contextValue}>
      <TabGroup>
        <TabList>
          {tabs.map(({ name }) => (
            <Tab key={name}>{name}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map(({ name, content }) => (
            <TabPanel key={name}>{content}</TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </TabViewContext>
  );
};
