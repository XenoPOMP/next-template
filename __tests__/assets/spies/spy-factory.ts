import { blue, blueBright, green } from 'ansi-colors';
import { expect, vi } from 'vitest';

type Caller = (...args: any[]) => void;

class CustomSpyCaller {
  private readonly _executionContext: string;

  constructor(context: string) {
    this._executionContext = context;
  }

  call(...args: any[]) {
    // eslint-disable-next-line no-console
    console.debug(
      `${blue(`[${this._executionContext}]`)} ${green(
        `Custom spy is called with these args: ${blueBright(
          args.map(s => `${s}`).join(', '),
        )}`,
      )}`,
    );
  }
}

/**
 * Creates custom spy factory object that is callable.
 * @param context
 * @example
 * const { callSpy, expectToBeCalled, expectToBeNotCalled } =
 *   spyFactory('spyFactory test');
 *
 * // Call spy with some args
 * const args: any[] = [1, 'some', 'args', 2];
 * callSpy(...args);
 *
 * // Run expectation func
 * expectToBeCalled(...args);
 * expectToBeNotCalled(2, 2, 7);
 */
export function spyFactory(context: string) {
  const caller: CustomSpyCaller = new CustomSpyCaller(context);
  const spy = vi.spyOn(caller, 'call');

  // eslint-disable-next-line jsdoc/require-jsdoc
  const expectToBeCalled: Caller = (...args) =>
    expect(spy).toHaveBeenCalledWith(args);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const expectToBeNotCalled: Caller = (...args) =>
    expect(spy).not.toHaveBeenCalledWith(args);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const callSpy: Caller = (...args) => caller.call(args);

  return {
    expectToBeCalled,
    expectToBeNotCalled,
    spy,
    callSpy,
  };
}
