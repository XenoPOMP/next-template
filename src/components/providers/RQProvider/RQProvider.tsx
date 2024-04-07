'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { PropsWith } from '@xenopomp/advanced-types';
import { type FC, useState } from 'react';

import type { RQProviderProps } from './RQProvider.props';

const RQProvider: FC<PropsWith<'children', RQProviderProps>> = ({
  children,
}) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default RQProvider;
