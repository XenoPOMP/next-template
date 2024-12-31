import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { handleFunctionalChildren } from '@/src/utils/react';

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
