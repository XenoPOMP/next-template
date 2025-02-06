import { describe, test, vi } from 'vitest';

import sitemap from '@app/sitemap';

import { injectMocks, mockEnv, testObject } from '@test/assets';

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
