import { FunctionPrimitive } from '@xenopomp/advanced-types';
import { useQuery } from 'react-query';

import { QueryConstant } from '@/src/interfaces/AppConstants.interface';

/**
 * This hook allows to use constant queries from AppConstants.
 *
 * @param constant
 *
 * @example
 * const { data } = useConstantQuery(AppConstants.queries.posts.getAll);
 */
export const useConstantQuery = <K extends string, F extends FunctionPrimitive>(
  constant: QueryConstant<K, F>
) => {
  const { key, fn } = constant;

  return useQuery(key, fn);
};
