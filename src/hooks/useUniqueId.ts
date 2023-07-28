import { randomUUID } from 'crypto';

import { isUndefined } from '@/src/utils/type-checks';

/**
 * Use this hook to generate UUID.
 *
 * **Works in server side!!!**
 *
 * @example
 * const id = useUniqueId(generatedId => {
 *   // Dont add callback if you want to
 *   // get only UUID.
 *
 *   return `gallery-${generatedId}`;
 * });
 *
 * @param transformer     callback function that transforms generated
 *                        ID and returns string.
 *
 * @return {string}
 */
export const useUniqueId = (
  transformer?: (generatedId: string) => string
): string => {
  /** Generate UUID. */
  const id = randomUUID();

  /**
   * If transformer callback is defined, call it
   * and return result of it.
   */
  if (!isUndefined(transformer)) {
    return transformer(id);
  }

  /** Return only ID if transformer is undefined. */
  return id;
};
