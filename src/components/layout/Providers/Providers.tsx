import { type PropsWith } from '@xenopomp/advanced-types';
import { ThemeProvider } from 'next-themes';
import { type FC } from 'react';

import { AppConstants } from '@/app/app.constants';

import type { ProvidersProps } from './Providers.props';

const Providers: FC<PropsWith<'children', ProvidersProps>> = ({ children }) => {
  const { appName } = AppConstants;

  return (
    <ThemeProvider
      attribute={'class'}
      storageKey={`[${appName}]:theme`}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
