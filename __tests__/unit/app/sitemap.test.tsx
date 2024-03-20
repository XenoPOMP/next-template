import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { clearMocks } from '@/__tests__/assets/mocks';
import { mockEnv } from '@/__tests__/assets/mocks/mockEnv';
import { testObject } from '@/__tests__/assets/utilities';
import { expectToDeepEqual } from '@/__tests__/assets/utilities/expectToDeepEqual';
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
