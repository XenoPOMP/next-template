import { describe, test } from 'vitest';

import { handleFunctionalChildren } from '@/utils/react';

import { expectToRender } from '@test/assets';

import { testFunctionalApproach } from './utils';

describe('handleFunctionalChildren func', () => {
  test('It returns ReactNode', () => {
    // Children props is basic ReactNode.
    expectToRender(<>{handleFunctionalChildren(<></>)}</>);

    // Functional children without props
    expectToRender(
      <>
        {handleFunctionalChildren(() => (
          <></>
        ))}
      </>,
    );

    // Functional children with props
    testFunctionalApproach([true, false]);
  });
});
