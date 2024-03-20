import { render, waitFor } from '@testing-library/react';
import { waitForDebugger } from 'node:inspector';
import { ComponentProps, FC } from 'react';
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
  const renderAndTest = async ({
    textToFind,
    ...props
  }: ComponentProps<typeof TestComponent> & { textToFind: string }) => {
    const { getByText, ...rest } = render(<TestComponent {...props} />);

    await waitFor(() => getByText(textToFind));

    return {
      getByText,
      ...rest,
    };
  };

  test('It does not throw', () => {
    expectToRender(<TestComponent />);
  });

  test('Wait for fetching', async () => {
    await renderAndTest({ url: '/', textToFind: 'Loading...' });
  });

  test('Provide incorrect url', async () => {
    await renderAndTest({ url: '', textToFind: 'Error...' });
  });
});
