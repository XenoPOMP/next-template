'use client';

import { PropsWith } from '@xenopomp/advanced-types';
import { FC, cache } from 'react';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from 'react-query';

import type { ReactQueryProviderProps } from './ReactQueryProvider.props';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
};

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));

const queryClient = getQueryClient();

const ReactQueryProvider: FC<
  PropsWith<'children', ReactQueryProviderProps>
> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
