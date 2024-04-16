import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { handleFunctionalChildren } from '@/src/utils/react';

describe('handleFunctionalChildren func', () => {
  test('It returns ReactNode', () => {
    expectToRender(<>{handleFunctionalChildren(<></>)}</>);

    expectToRender(
      <>
        {handleFunctionalChildren(() => (
          <></>
        ))}
      </>,
    );

    expectToRender(
      <>
        {handleFunctionalChildren<[disabled: boolean]>(
          disabled => (
            <>{disabled ? 'Disabled' : 'Enabled'}</>
          ),
          false,
        )}
      </>,
    );
  });
});
