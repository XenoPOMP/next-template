import { ThemeProvider } from 'next-themes';
import type { FC, PropsWithChildren } from 'react';

import { RQProvider } from '@/src/components/providers';
import { createStorageKey } from '@/src/utils/misc';

import type { ProvidersProps } from './Providers.props';

const Providers: FC<PropsWithChildren<ProvidersProps>> = ({ children }) => {
  return (
    <ThemeProvider
      attribute='class'
      storageKey={createStorageKey('theme')}
      enableSystem
    >
      <RQProvider>{children}</RQProvider>
    </ThemeProvider>
  );
};

export default Providers;
