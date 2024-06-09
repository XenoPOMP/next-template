import { describe, test, vi } from 'vitest';

import { mockEnv } from '@/__tests__/assets/mocks';
import { injectMocks, testObject } from '@/__tests__/assets/utilities';
import sitemap from '@/app/sitemap';

describe('Next.js sitemap generation', () => {
  injectMocks(() => {
    mockEnv();
  });

  test('It works', () => {
    testObject(sitemap());
  });

  test('Canonical url equals to constant value by default', async () => {
    vi.unstubAllEnvs();
    testObject(sitemap());
  });
});
