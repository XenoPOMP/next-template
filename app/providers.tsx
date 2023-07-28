'use client';

import { PropsWith } from '@xenopomp/advanced-types';
import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@/src/redux/index';

const Providers: FC<PropsWith<'children', {}>> = ({ children }) => {
  const LibraryProviders: FC<PropsWith<'children', {}>> = ({ children }) => {
    return (
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </ReduxProvider>
    );
  };

  const OtherProviders: FC<PropsWith<'children', {}>> = ({ children }) => {
    return <>{children}</>;
  };

  return (
    <>
      <LibraryProviders>
        <OtherProviders>{children}</OtherProviders>
      </LibraryProviders>
    </>
  );
};

export default Providers;
