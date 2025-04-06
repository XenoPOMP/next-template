import type { MutationFunction, QueryKey } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface MutationContext {
  results: {
    rollback: () => void;
    invalidate?: () => void;
    didCancelFetch?: boolean;
  }[];
}

interface HandlerReactQuery<TOptimisticData> {
  queryKey: QueryKey;
  updater: (data: TOptimisticData) => TOptimisticData | undefined;
}

interface Handler<TOptimisticData> {
  getData: () => TOptimisticData;
  setData: (data: TOptimisticData) => void;
  updater: (data: TOptimisticData) => TOptimisticData | undefined;
}

type OptimisticFunction<TOptimisticDataArray, TVariables> = (
  variables: TVariables,
) => {
  [K in keyof TOptimisticDataArray]:
    | HandlerReactQuery<TOptimisticDataArray[K]>
    | Handler<TOptimisticDataArray[K]>;
};

interface OptimisticMutationProps<TData, TVariables, TOptimisticDataArray> {
  mutationFn: MutationFunction<TData, TVariables>;
  optimistic: OptimisticFunction<TOptimisticDataArray, TVariables>;
}

/**
 * Hook for optimistic query updates.
 *
 * @see https://gist.github.com/gragland/30a8282714bc6f4f0f6024fee7e9492f
 */
export function useOptimisticMutation<
  TData,
  TError,
  TVariables,
  TOptimisticDataArray extends unknown[],
>({
  mutationFn,
  optimistic,
}: OptimisticMutationProps<TData, TVariables, TOptimisticDataArray>) {
  const queryClient = useQueryClient();

  return useMutation<TData, TError, TVariables, MutationContext>({
    mutationFn,
    // eslint-disable-next-line jsdoc/require-jsdoc
    onMutate: async variables => {
      const results = [];
      const handlers = optimistic(variables);

      for (const handler of handlers) {
        if ('queryKey' in handler) {
          const { queryKey, updater } = handler;
          let didCancelFetch = false;

          // If query is currently fetching, we cancel it to avoid overwriting our optimistic update.
          // This would happen if query responds with old data after our optimistic update is applied.
          const isFetching =
            queryClient.getQueryState(queryKey)?.fetchStatus === 'fetching';
          if (isFetching) {
            await queryClient.cancelQueries({ queryKey });
            didCancelFetch = true;
          }

          // Get previous data before optimistic update
          const previousData = queryClient.getQueryData(queryKey);
          // Rollback function we call if mutation fails
          // eslint-disable-next-line jsdoc/require-jsdoc
          const rollback = () =>
            queryClient.setQueryData(queryKey, previousData);
          // Invalidate function to call after mutation is done if we cancelled a fetch.
          // This ensures that we get both the optimistic update and fresh data from the server.
          // eslint-disable-next-line jsdoc/require-jsdoc
          const invalidate = () => queryClient.invalidateQueries({ queryKey });

          // Update data in React Query cache
          queryClient.setQueryData(queryKey, updater);

          // Add to results that we read in onError and onSettled
          results.push({
            rollback,
            invalidate,
            didCancelFetch,
          });
        } else {
          // If no query key then we're not operating on the React Query cache
          // We expect to have a `getData` and `setData` function
          const { getData, setData, updater } = handler;
          const previousData = getData();
          // eslint-disable-next-line jsdoc/require-jsdoc
          const rollback = () => setData(previousData);
          setData(updater);
          results.push({
            rollback,
          });
        }
      }

      return { results };
    },
    // On error revert all queries to their previous data
    // eslint-disable-next-line jsdoc/require-jsdoc,node/handle-callback-err
    onError: (error, variables, context) => {
      if (context?.results) {
        context.results.forEach(({ rollback }) => {
          rollback();
        });
      }
    },
    // When mutation is done invalidate cancelled queries so they get refetched
    // eslint-disable-next-line jsdoc/require-jsdoc
    onSettled: (data, error, variables, context) => {
      if (context?.results) {
        context.results.forEach(({ didCancelFetch, invalidate }) => {
          if (didCancelFetch && invalidate) {
            invalidate();
          }
        });
      }
    },
  });
}
