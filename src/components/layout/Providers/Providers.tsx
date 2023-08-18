import { PropsWith } from '@xenopomp/advanced-types';
import { FC } from 'react';

import ReactQueryProvider from '@/src/components/providers/ReactQueryProvider/ReactQueryProvider';
import ReduxProvider from '@/src/redux/ReduxProvider';

import type { ProvidersProps } from './Providers.props';

const Providers: FC<PropsWith<'children', ProvidersProps>> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
