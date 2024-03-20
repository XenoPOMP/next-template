import { render } from '@testing-library/react';
import { FC } from 'react';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { clearMocks } from '@/__tests__/assets/mocks';
import { mockEnv } from '@/__tests__/assets/mocks/mockEnv';
import { booleanishString, expectToRender } from '@/__tests__/assets/utilities';
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

      {testGetOrThrow && (
        <p>
          Get key that does not exists: {getOrThrow('THIS_KEY_IS_NOT_REAL')}
        </p>
      )}
    </>
  );
};

describe('useEnv hook', () => {
  beforeAll(() => {
    mockEnv();
  });

  afterAll(() => {
    clearMocks();
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
