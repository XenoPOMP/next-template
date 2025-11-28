import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { expect, test } from 'vitest';
import {
  assertNotThrowing,
  assertRendering,
  injectMocks,
  mockRouter,
} from 'xenopomp-essentials/vitest';

import { RQProvider } from '@/components/providers';

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

  test.skipIf(!options?.generateMetadata)('Metadata is correct', async () => {
    expect(await options!.generateMetadata!()).toBeDefined();
  });

  test.skipIf(!options?.generateMetadata)('Metadata won`t throw', async () => {
    assertNotThrowing(async () => {
      await options!.generateMetadata!();
    });
  });
};
