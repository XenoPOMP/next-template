import { type PropsWith } from '@xenopomp/advanced-types';
import { ThemeProvider } from 'next-themes';
import { type FC } from 'react';

import { createStorageKey } from '@/src/utils/misc';

import type { ProvidersProps } from './Providers.props';

const Providers: FC<PropsWith<'children', ProvidersProps>> = ({ children }) => {
  return (
    <ThemeProvider
      attribute={'class'}
      storageKey={createStorageKey('theme')}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
