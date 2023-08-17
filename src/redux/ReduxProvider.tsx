'use client';

import { PropsWith } from '@xenopomp/advanced-types';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import SplashScreen from '@/src/components/screens/SplashScreen/SplashScreen';
import store, { persistor } from '@/src/redux/index';

const ReduxProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
