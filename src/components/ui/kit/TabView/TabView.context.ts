import type { ReactNode } from 'react';
import { createContext } from 'react';

export const TabViewContext = createContext<TavViewContextType>(
  {} as TavViewContextType,
);

interface TavViewContextType {
  tabs: TabInfo[];
  registerTab: (newTab: TabInfo) => void;
}

interface TabInfo {
  name: string;
  content: ReactNode;
}
