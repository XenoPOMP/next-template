import { render, renderHook } from '@testing-library/react';

import { assertNotThrowing } from '../assertions/not-throwing.ts';

type RenderArguments = Parameters<typeof render>;
type RenderHookArguments = Parameters<typeof renderHook>;

type RenderFunc<Args extends unknown[] = RenderArguments> = (
  ...args: Args
) => void;

/** Renders component and expects that it won't throw error. */
export const expectToRender: RenderFunc = (...props) => {
  assertNotThrowing(() => render(...props));
};

/**
 * Renders hook within test React component without having to create that component yourself.
 * Expects that it won't throw error.
 * @param props
 */
export const expectHookToRender: RenderFunc<RenderHookArguments> = (
  ...props
) => {
  assertNotThrowing(() => renderHook(...props));
};
