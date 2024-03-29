import { describe, expect, test } from 'vitest';

import { AppConstants } from '@/app/app.constants';
import { createStorageKey } from '@/src/utils/misc';

describe('createStorageKey func', () => {
  const { appName } = AppConstants;

  const generateAndExpect = (expected: string, ...keys: string[]) => {
    const generated = createStorageKey(...keys);

    expect(generated).to.equal(expected);
  };

  test('Func filters empty strings', () => {
    generateAndExpect(
      `[${appName}]:storage:persist`,
      '',
      'storage',
      '',
      'persist',
    );
  });

  test('Strings are trimmed', () => {
    generateAndExpect(`[${appName}]:storage:persist`, '  storage  ', 'persist');
  });

  test('Any whitespace is replaced with underscore', () => {
    generateAndExpect(
      `[${appName}]:storage_and_persist`,
      'storage and persist',
    );
  });

  test('Lowercase', () => {
    generateAndExpect(`[${appName}]:hello_world`, 'Hello World');
  });

  test('Forbidden chars are sanitized', () => {
    generateAndExpect(
      `[${appName}]:ya_russkiy_i_mne_povezlo_idk`,
      'я русский! и мне повезло idk',
    );
  });
});
