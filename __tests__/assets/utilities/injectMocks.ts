import { afterAll, afterEach, beforeAll } from 'vitest';
import type { Optional } from 'xenopomp-essentials';

import { clearMocks } from '@test/assets';

type Fn = () => void;
type Strategy = keyof typeof strategies;

type AfterAllCallback = Optional<Fn> | void;

/**
 * Map of all available strategies for
 * injectMocks function.
 */
const strategies = {
  beforeAll,
  afterEach,
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
