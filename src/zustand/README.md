# How to use Zustand in Next properly?

**`Next.js`** is **_SSR_** framework and that means that _you really want_ to carry about which code has to be executed on `server` and which code has to be executed on `client`.

## How to make stores?

You can create store same way as usual.

## How to use it in components?

Just use my custom hook `useZustand` to avoid Next hydration errors:

```tsx
import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import useZustand from '@/src/zustand/hooks/useZustand';
import useAppStore from '@/src/zustand/stores/useAppStore';

import styles from './ZustandTestComponent.module.scss';
import type { ZustandTestComponentProps } from './ZustandTestComponent.props';

const ZustandTestComponent: FC<ZustandTestComponentProps> = ({ link }) => {
  // Hook takes to arguments:
  // * store - your store function.
  // * selector - same as selector that you use with
  //              normal Zustand.
  const appState = useZustand(useAppStore, state => state);

  // My state has _hasHydrated key so I can
  // render loader if Zustand is not hydrated.
  return appState?._hasHydrated ? (
    <div className={cn('flex flex-col items-start my-[1.5rem]')}>
      {!isUndefined(link) && <Link href={link.href}>{link.text}</Link>}

      <desc>Current active theme is: {appState?.mode}</desc>

      <button
        onClick={() => {
          appState?.toggleTheme();
        }}
      >
        Toggle theme
      </button>
    </div>
  ) : (
    <div>Loading Zustand...</div>
  );
};

export default ZustandTestComponent;

```
