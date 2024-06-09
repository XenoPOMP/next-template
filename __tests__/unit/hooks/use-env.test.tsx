import { render } from '@testing-library/react';
import { type FC } from 'react';
import { describe, expect, test } from 'vitest';

import { mockEnv } from '@/__tests__/assets/mocks';
import {
  booleanishString,
  expectToRender,
  injectMocks,
} from '@/__tests__/assets/utilities';
import { VariableExistenceError, useEnv } from '@/src/hooks/use-env';

const TestComponent: FC<{ testGetOrThrow?: boolean }> = ({
  testGetOrThrow = false,
}) => {
  const { get, getBoolean, getOrThrow } = useEnv();

  return (
    <>
      <p>{get('CANONICAL_URL')}</p>

      <p>Is prod: {booleanishString(getBoolean('IS_PRODUCTION'))}</p>

      <p>
        Some boolean that does not exist:{' '}
        {booleanishString(getBoolean('THIS_KEY_IS_NOT_REAL_FOR_SURE'))}
      </p>

      <p>
        Get key that is required and exists: {getOrThrow('THIS_KEY_IS_REAL')}
      </p>

      {testGetOrThrow && (
        <>
          <p>
            Get key that does not exists: {getOrThrow('THIS_KEY_IS_NOT_REAL')}
          </p>
        </>
      )}
    </>
  );
};

describe('useEnv hook', () => {
  injectMocks(() => {
    mockEnv({ THIS_KEY_IS_REAL: 'realKey' });
  });

  test('Not throwing errors', () => {
    expectToRender(<TestComponent />);
  });

  test('getOrThrow actually throws', () => {
    expect(() => render(<TestComponent testGetOrThrow />)).toThrowError(
      VariableExistenceError,
    );
  });
});
