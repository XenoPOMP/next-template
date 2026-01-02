import { describe, test } from 'vitest';
import { spyFactory } from 'xenopomp-essentials/vitest';

describe('spyFactory utility', () => {
  test('Calling spy works', () => {
    const { callSpy, expectToBeCalled, expectToBeNotCalled } =
      spyFactory('spyFactory test');

    // Call spy with some args
    const args: any[] = [1, 'some', 'args', 2];
    callSpy(...args);

    // Run expectation func
    expectToBeCalled(...args);
    expectToBeNotCalled(2, 2, 7);
  });
});
