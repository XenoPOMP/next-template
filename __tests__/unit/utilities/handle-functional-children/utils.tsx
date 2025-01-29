import { handleFunctionalChildren } from '@/utils/react';

import { expectToRender } from '@test/assets';

export function testFunctionalApproach(values: boolean[]) {
  values.forEach(val => {
    expectToRender(
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
