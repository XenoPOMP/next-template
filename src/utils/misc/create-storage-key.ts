import { transliterate } from 'xenopomp-essentials';

import { APP_NAME } from '@/app/constants';

/**
 * Creates key for local storage.
 *
 * @example
 * const key = createStorageKey('persist', 'auth store');
 * // [YOUR_APP_NAME]:persist:auth_store
 */
export const createStorageKey = (...keys: string[]) => {
  keys = keys
    .filter(key => key !== '')
    .map(key => transliterate(key))
    .map(key =>
      key.trim().replace(/\s/g, '_').replace(/\W/g, '').toLowerCase(),
    );

  keys = [`[${APP_NAME}]`, ...keys];

  return keys.join(':');
};
