import { describe, test } from 'vitest';

import { handleFunctionalChildren } from '@/utils/react';

import { assertRendering } from '@test/assets';

import { testFunctionalApproach } from './utils';

describe('handleFunctionalChildren func', () => {
  test('It returns ReactNode', () => {
    // Children props is basic ReactNode.
    assertRendering(<>{handleFunctionalChildren(<></>)}</>);

    // Functional children without props
    assertRendering(
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
