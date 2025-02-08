import { render, renderHook } from '@testing-library/react';

import { assertNotThrowing } from '@test/assets';

type RenderArguments = Parameters<typeof render>;
type RenderHookArguments = Parameters<typeof renderHook>;

type RenderFunc<Args extends unknown[] = RenderArguments> = (
  ...args: Args
) => void;

/**
 * Renders component and expects that it won`t throw.
 *
 * @example
 * test('It renders', () => {
 *   test('It renders', () => {
 *     assertRendering(<MyComponent />, {
 *       wrapper: RQProvider,
 *     });
 *   });
 * });
 */
export const assertRendering: RenderFunc = (...props) => {
  assertNotThrowing(() => render(...props));
};

/**
 * Renders hook within test React component without having to create that component yourself.
 * Expects that it won't throw error.
 *
 * @param props
 *
 * @example
 * test('It renders', () => {
 *   assertHookRendering(() => useExampleStore(DEFAULT_SELECTOR));
 * });
 */
export const assertHookRendering: RenderFunc<RenderHookArguments> = (
  ...props
) => {
  assertNotThrowing(() => renderHook(...props));
};
