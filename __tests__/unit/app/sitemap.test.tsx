import { afterAll, beforeAll, describe, test } from 'vitest';

import { clearMocks } from '@/__tests__/assets/mocks';
import { mockEnv } from '@/__tests__/assets/mocks/mockEnv';
import { testObject } from '@/__tests__/assets/utilities';
import sitemap from '@/app/sitemap';

describe('Next.js sitemap generation', () => {
  beforeAll(() => {
    mockEnv();
  });

  afterAll(() => {
    clearMocks();
  });

  test('It works', () => {
    testObject(sitemap());
  });
});
