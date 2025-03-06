import {
  type DefaultError,
  type QueryKey,
  type UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

/**
 * This hook is extended useMutation hook.
 * You have to specify query key to invalidate
 * after successful mutation.
 *
 * @param queryKey
 * @param onSuccess
 * @param mutRest
 *
 * @example
 * const { mutate } = useLinkedMutation(['query key'], {
 *   onSuccess() {
 *     console.log('Successful mutation.');
 *   },
 * });
 */
export const useLinkedMutation = <
  TReturn = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
>(
  queryKey: QueryKey,
  {
    onSuccess,
    ...mutRest
  }: UseMutationOptions<TReturn, TError, TVariables, TContext>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    /** Run code on successful mutation. */
    onSuccess(...args) {
      // Run onSuccess func from options.
      onSuccess?.(...args);

      // Invalidate query key.
      queryClient.invalidateQueries({
        queryKey,
      });
    },
    ...mutRest,
  });
};
