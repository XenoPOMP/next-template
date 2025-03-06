import { handleFunctionalChildren } from '@/utils/react';

import { assertRendering } from '@test/assets';

/**
 * Helper function for testing handleFunctionalChildren.
 * @param values
 */
export function testFunctionalApproach(values: boolean[]) {
  values.forEach(val => {
    assertRendering(
      <>
        {handleFunctionalChildren<[disabled: boolean]>(
          disabled => (
            <>{disabled ? 'Disabled' : 'Enabled'}</>
          ),
          val,
        )}
      </>,
    );
  });
}
