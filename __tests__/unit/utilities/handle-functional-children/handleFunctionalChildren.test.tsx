import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { handleFunctionalChildren } from '@/utils/react';

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
