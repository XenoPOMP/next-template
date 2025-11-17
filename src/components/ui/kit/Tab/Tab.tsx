'use client';

import type { FC, PropsWithChildren } from 'react';
import { useContext, useEffect } from 'react';

import type { TabInfo } from '@/components/ui/kit';
import { TabViewContext } from '@/components/ui/kit';
import { useUniqueId } from '@/hooks';

// eslint-disable-next-line jsdoc/require-jsdoc
export const Tab: FC<PropsWithChildren<Omit<TabInfo, 'content' | 'uuid'>>> = ({
  name,
  children,
}) => {
  const uuid = useUniqueId();
  const { registerTab, deleteTab } = useContext(TabViewContext);

  useEffect(() => {
    registerTab({
      name,
      content: children,
      uuid,
    });

    return () => deleteTab(uuid);
  }, [name, children, registerTab, uuid, deleteTab]);

  return <></>;
};
