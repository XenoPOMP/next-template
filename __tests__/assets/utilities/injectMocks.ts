import type { Undefinable } from '@xenopomp/advanced-types';
import { afterAll, beforeAll } from 'vitest';

import { clearMocks } from '@/__tests__/assets/mocks';

type Fn = () => void;
type Strategy = keyof typeof strategies;

type AfterAllCallback = Undefinable<Fn> | void;

/**
 * Map of all available strategies for
 * injectMocks function.
 */
const strategies = {
  beforeAll,
};

/**
 * Inserts mocks according to selected strategy
 * (default is `beforeAll`).
 *
 * This function takes approach of useEffect hook
 * from React. You define mocks inside function body,
 * then you return function, that will be called
 * in `afterAll` event.
 *
 * @example
 * injectMocks(() => {
 *     mockRouter();
 *
 *     return () => {
 *       console.log('This is printed from injectMocks func (afterAll event).');
 *     };
 *   });
 */
export const injectMocks = (
  func: () => AfterAllCallback,
  strategy: Strategy = 'beforeAll',
) => {
  // This function will be called in `afterAll`
  // event.
  let afterFn: AfterAllCallback;

  // Get strategy function from map.
  strategies[strategy](() => (afterFn = func()));

  afterAll(() => {
    clearMocks();
    afterFn?.();
  });
};
