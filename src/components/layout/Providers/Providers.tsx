import { ThemeProvider } from 'next-themes';
import type { FC, PropsWithChildren } from 'react';

import { RQProvider } from '@/components/providers';
import { createStorageKey } from '@/utils/misc';

import type { ProvidersProps } from './Providers.props';

/**
 * Root wrapper for application level.
 *
 * @constructor
 */
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
