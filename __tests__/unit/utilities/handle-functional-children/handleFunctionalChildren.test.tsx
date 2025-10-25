import { describe, test } from 'vitest';

import { handleFunctionalChildren } from '@/utils/react';

import { assertRendering } from '@test/assets';

import { testFunctionalApproach } from './utils';

describe('handleFunctionalChildren func', () => {
  test('It returns ReactNode', () => {
    // Children props is basic ReactNode.
    // eslint-disable-next-line deprecation/deprecation
    assertRendering(<>{handleFunctionalChildren(<></>)}</>);

    // Functional children without props
    assertRendering(
      <>
        {/* eslint-disable-next-line deprecation/deprecation */}
        {handleFunctionalChildren(() => (
          <></>
        ))}
      </>,
    );

    // Functional children with props
    testFunctionalApproach([true, false]);
  });
});
