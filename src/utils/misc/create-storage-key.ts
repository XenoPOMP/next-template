import { transliterate } from '@xenopomp/advanced-utils';

import { AppConstants } from '@/app/app.constants';

/**
 * Creates key for local storage.
 *
 * @example
 * const key = createStorageKey('persist', 'auth store');
 * // [YOUR_APP_NAME]:persist:auth_store
 */
export const createStorageKey = (...keys: string[]) => {
  const { appName } = AppConstants;

  keys = keys
    .filter(key => key !== '')
    .map(key => transliterate(key))
    .map(key =>
      key.trim().replace(/\s/gi, '_').replace(/\W/gi, '').toLowerCase(),
    );

  keys = [`[${appName}]`, ...keys];

  return keys.join(':');
};
