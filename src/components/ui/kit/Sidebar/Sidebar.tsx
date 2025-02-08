'use client';

import cn from 'classnames';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { type FC, useState } from 'react';

export const Sidebar: FC<unknown> = () => {
  const [opened, setOpened] = useState(true);

  return (
    <aside
      className={cn('bg-red-500/20')}
      data-opened={opened}
    >
      <header className={cn('flex select-none items-center gap-4')}>
        <section
          data-testid='sidebar-open-icon'
          className={cn('cursor-pointer')}
          onClick={() => {
            setOpened(p => !p);
          }}
        >
          {opened ? <PanelLeftClose /> : <PanelLeftOpen />}
        </section>
      </header>
    </aside>
  );
};
