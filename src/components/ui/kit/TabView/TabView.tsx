import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import type { ContextType, FC, PropsWithChildren } from 'react';
import { useCallback, useMemo, useState } from 'react';

import type { TabInfo } from './TabView.context';
import { TabViewContext } from './TabView.context';

// <TabView>
//   <Tab name='First'>First tab</Tab>
//   <Tab name='Second'>Second tab (indeed)</Tab>
// </TabView>
// eslint-disable-next-line jsdoc/require-jsdoc
export const TabView: FC<PropsWithChildren> = ({ children }) => {
  const [tabs, setTabs] = useState<ContextType<typeof TabViewContext>['tabs']>(
    [],
  );

  const registerTab = useCallback(
    (newTab: TabInfo) => {
      setTabs(prev => [...prev, newTab]);
    },
    [setTabs],
  );

  const deleteTab = useCallback(
    (uuid: TabInfo['uuid']) => {
      setTabs(prev => prev.filter(tab => tab.uuid === uuid));
    },
    [setTabs],
  );

  const contextValue = useMemo(
    () => ({
      tabs,
      registerTab,
      deleteTab,
    }),
    [deleteTab, registerTab, tabs],
  );

  return (
    <TabViewContext value={contextValue}>
      <TabGroup as='section'>
        <TabList as='header'>
          {tabs.map(({ name }) => (
            <Tab key={name}>{name}</Tab>
          ))}
        </TabList>

        <TabPanels as='article'>
          {tabs.map(({ name, content }) => (
            <TabPanel key={name}>{content}</TabPanel>
          ))}
        </TabPanels>
      </TabGroup>

      {children}
    </TabViewContext>
  );
};
