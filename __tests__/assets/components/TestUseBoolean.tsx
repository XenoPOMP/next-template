import { type FC } from 'react';

import { booleanishString } from '@/__tests__/assets/utilities';
import useBoolean from '@/src/hooks/useBoolean.ts';

const TestUseBoolean: FC<{ type?: 'toggle' | 'change' }> = () => {
  const [value, toggle, changeValue] = useBoolean();

  return (
    <>
      <div
        data-testid={'value-holder'}
        data-value={value}
      >
        Value: {booleanishString(value)}
      </div>

      <button
        data-testid={'toggle-button'}
        onClick={toggle}
      >
        Toggle
      </button>

      <button
        data-testid={'change-to-true'}
        onClick={() => changeValue(true)}
      >
        Change to true
      </button>

      <button
        data-testid={'change-to-false'}
        onClick={() => changeValue(false)}
      >
        Change to false
      </button>
    </>
  );
};

export default TestUseBoolean;
