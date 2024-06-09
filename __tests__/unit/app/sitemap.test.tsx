import { afterAll, beforeAll, describe, test, vi } from 'vitest';

import { clearMocks, mockEnv } from '@/__tests__/assets/mocks';
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

  test('Canonical url equals to constant value by default', async () => {
    vi.unstubAllEnvs();
    testObject(sitemap());
  });
});
