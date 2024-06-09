import { afterAll, beforeAll } from 'vitest';

import { clearMocks } from '@/__tests__/assets/mocks';

interface InjectMocksOptions {
  /**
   * Place all your mocks inside this
   * function.
   */
  mockingFn: () => void;

  /**
   * This function will be executed after
   * all tests (in afterAll).
   */
  afterFn?: () => void;

  /** Select when mocks should be injected. */
  strategy?: 'beforeAll';
}

/**
 * Inserts mocks according to selected strategy
 * (default is `beforeAll`).
 *
 * @example
 * injectMocks({
 *   mockingFn: () => {
 *     mockRouter();
 *   },
 * });
 */
export const injectMocks = ({
  mockingFn,
  strategy = 'beforeAll',
  afterFn,
}: InjectMocksOptions) => {
  if (strategy === 'beforeAll')
    beforeAll(() => {
      mockingFn();
    });

  afterAll(() => {
    clearMocks();
    afterFn?.();
  });
};
