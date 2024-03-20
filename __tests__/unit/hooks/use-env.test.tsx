import { render } from '@testing-library/react';
import { FC } from 'react';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { clearMocks } from '@/__tests__/assets/mocks';
import { mockEnv } from '@/__tests__/assets/mocks/mockEnv';
import { expectToRender } from '@/__tests__/assets/utilities';
import { VariableExistenceError, useEnv } from '@/src/hooks/use-env';

const TestComponent: FC<{}> = () => {
  const { get } = useEnv();

  return <>{get('CANONICAL_URL')}</>;
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
