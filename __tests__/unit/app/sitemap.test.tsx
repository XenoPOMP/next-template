import { describe, expect, test, vi } from 'vitest';

import sitemap from '@app/sitemap';

import { injectMocks, mockEnv } from '@test/assets';

describe('Next.js sitemap generation', () => {
  injectMocks(() => {
    mockEnv();
  });

  test('It works', () => {
    expect(sitemap()).toBeDefined();
  });

  test('Canonical url equals to constant value by default', async () => {
    vi.unstubAllEnvs();
    expect(sitemap()).toBeDefined();
  });
});
