import { expect, vi } from 'vitest';

// eslint-disable-next-line unused-imports/no-unused-imports
import type { spyFactory } from '@test/assets';

/**
 * Helper function for checking if console.log was used in
 * control flow.
 *
 * @param expectedWord
 *
 * @deprecated Use {@link spyFactory}
 *
 * @example
 * test('Callback should not be running before mount', () => {
 *     const { expectToBeNotCalled, spyLog } = spyOnConsole(
 *       '<HOOK_UPDATE_DETECTED>',
 *     );
 *
 *     renderHook(() =>
 *       useTrackedState(12, () => {
 *         // This log will be called only on second mount.
 *         // If spy detects log, it means that error is occurred.
 *         spyLog();
 *       }),
 *     );
 *
 *     expectToBeNotCalled();
 * });
 */
export function spyOnConsole(expectedWord: string) {
  const spy = vi.spyOn(console, 'log');

  /** */
  const expectToBeCalled = () => expect(spy).toHaveBeenCalledWith(expectedWord);

  /** */
  const expectToBeNotCalled = () =>
    expect(spy).not.toHaveBeenCalledWith(expectedWord);

  /** */
  // eslint-disable-next-line no-console
  const spyLog = () => console.log(expectedWord);

  return {
    expectToBeCalled,
    expectToBeNotCalled,
    spy,
    spyLog,
  };
}
