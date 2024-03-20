import { FC } from 'react';
import { describe, expect, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { useFetch } from '@/src/hooks/useFetch';

const TestComponent: FC = () => {
  const { isLoading, data } = useFetch(async () =>
    fetch('https://www.npmjs.com'),
  );

  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && <p>{JSON.stringify(data, null, 2)}</p>}
    </>
  );
};

describe('useFetch hook', () => {
  test('It does not throw', () => {
    expectToRender(<TestComponent />);
  });
});
