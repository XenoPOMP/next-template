import type { ReactNode } from 'react';
import { createContext } from 'react';

export const TabViewContext = createContext<TavViewContextType>(
  {} as TavViewContextType,
);

export interface TavViewContextType {
  tabs: TabInfo[];
  registerTab: (newTab: TabInfo) => void;
  deleteTab: (uuid: TabInfo['uuid']) => void;
}

export interface TabInfo {
  name: string;
  content: ReactNode;
  uuid: string;
}
