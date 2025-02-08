import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { test } from 'vitest';

import { RQProvider } from '@/components/providers';

import {
  assertRendering,
  injectMocks,
  mockRouter,
  testObject,
} from '@test/assets';

interface ITestNextPageOptions {
  generateMetadata?: () => Promise<Metadata>;
}

/**
 * Contains all basic logic for testing simple Next
 * page.
 * @param page
 * @param options
 *
 * @example
 * testNextPage(<DashboardPage />);
 */
export const testNextPage = (
  page: ReactNode,
  options?: ITestNextPageOptions,
) => {
  injectMocks(() => {
    mockRouter();
  });

  test('It renders', () => {
    assertRendering(page, {
      wrapper: RQProvider,
    });
  });

  test('Metadata is correct', async () => {
    // Test metadata only if it is provided
    if (!options?.generateMetadata) {
      return;
    }

    testObject(await options.generateMetadata());
  });
};
