import { expectToRender } from '@/__tests__/assets/utilities';
import { handleFunctionalChildren } from '@/src/utils/react';

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
