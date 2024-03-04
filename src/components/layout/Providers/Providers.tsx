import { type PropsWith } from '@xenopomp/advanced-types';
import { type FC } from 'react';

import type { ProvidersProps } from './Providers.props';

const Providers: FC<PropsWith<'children', ProvidersProps>> = ({ children }) => {
  return <>{children}</>;
};

export default Providers;
