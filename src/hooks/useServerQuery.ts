import { FunctionPrimitive, Undefinable } from '@xenopomp/advanced-types';

/**
 * This hook allows you to manage data prefetching in server-side.
 *
 * The syntax is familiar to **React-query** syntax.
 *
 * Use this hook with keyword **await** inside async functions!
 *
 * @param queryFn          the function that will be executed. Must be async.
 *
 * @example
 * const { data, isError } = await useServerQuery(ApiService.getAllPosts);
 */
export const useServerQuery = async <R extends any>(
  queryFn: FunctionPrimitive<Promise<R>>
): Promise<{
  data?: R;
  isError: boolean;
}> => {
  let data: Undefinable<R> = undefined;
  let isError: boolean = false;

  try {
    data = await queryFn();
  } catch (e) {
    isError = true;
  }

  return {
    data,
    isError,
  };
};
