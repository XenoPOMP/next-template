import { render } from '@testing-library/react';
import { FC } from 'react';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { clearMocks } from '@/__tests__/assets/mocks';
import { mockEnv } from '@/__tests__/assets/mocks/mockEnv';
import { booleanishString, expectToRender } from '@/__tests__/assets/utilities';
import { VariableExistenceError, useEnv } from '@/src/hooks/use-env';

const TestComponent: FC<{}> = () => {
  const { get, getBoolean } = useEnv();

  return (
    <>
      <p>{get('CANONICAL_URL')}</p>

      <p>Is prod: {booleanishString(getBoolean('IS_PRODUCTION'))}</p>
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
});
