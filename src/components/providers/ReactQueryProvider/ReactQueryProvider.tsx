'use client';

import { PropsWith } from '@xenopomp/advanced-types';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import type { ReactQueryProviderProps } from './ReactQueryProvider.props';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const ReactQueryProvider: FC<
  PropsWith<'children', ReactQueryProviderProps>
> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
