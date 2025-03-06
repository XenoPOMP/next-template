import { describe, expect, test } from 'vitest';

import { createStorageKey } from '@/utils/misc';

import { APP_NAME } from '@app/constants';

describe('createStorageKey func', () => {
  // eslint-disable-next-line jsdoc/require-jsdoc
  const generateAndExpect = (expected: string, ...keys: string[]) => {
    expect(createStorageKey(...keys)).to.equal(expected);
  };

  test('Func filters empty strings', () => {
    generateAndExpect(
      `[${APP_NAME}]:storage:persist`,
      '',
      'storage',
      '',
      'persist',
    );
  });

  test('Strings are trimmed', () => {
    generateAndExpect(
      `[${APP_NAME}]:storage:persist`,
      '  storage  ',
      'persist',
    );
  });

  test('Any whitespace is replaced with underscore', () => {
    generateAndExpect(
      `[${APP_NAME}]:storage_and_persist`,
      'storage and persist',
    );
  });

  test('Lowercase', () => {
    generateAndExpect(`[${APP_NAME}]:hello_world`, 'Hello World');
  });

  test('Forbidden chars are sanitized', () => {
    generateAndExpect(
      `[${APP_NAME}]:ya_russkiy_i_mne_povezlo_idk`,
      'я русский! и мне повезло idk',
    );
  });
});
