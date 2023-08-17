import { PropsWith } from '@xenopomp/advanced-types';
import { FC } from 'react';

import ReduxProvider from '@/src/redux/ReduxProvider';

import type { ProvidersProps } from './Providers.props';

const Providers: FC<PropsWith<'children', ProvidersProps>> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default Providers;
