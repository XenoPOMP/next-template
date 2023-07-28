'use client';

import { PropsWith } from '@xenopomp/advanced-types';
import { FC } from 'react';
import { Provider } from 'react-redux';

import store from '@/src/redux/index';

const ReduxProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
