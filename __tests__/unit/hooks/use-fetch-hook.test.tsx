import { render, waitFor } from '@testing-library/react';
import { FC } from 'react';
import { describe, expect, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { useFetch } from '@/src/hooks/useFetch';

const TestComponent: FC<{ url?: string }> = ({
  url = 'https://jsonplaceholder.typicode.com/users/1',
}) => {
  const { isLoading, data, error } = useFetch(async () => fetch(url));

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error...</>;
  }

  return <>This is a data</>;
};

describe('useFetch hook', () => {
  test('It does not throw', () => {
    expectToRender(<TestComponent />);
  });

  test('Wait for fetching', async () => {
    const { getByText } = render(<TestComponent />);

    await waitFor(() => getByText('This is a data'));
  });

  test('Provide incorrect url', async () => {
    const { getByText } = render(<TestComponent url={''} />);

    await waitFor(() => getByText('Error...'));
  });
});
