import { handleFunctionalChildren } from '@/utils/react';

import { assertRendering } from '@test/assets';

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
