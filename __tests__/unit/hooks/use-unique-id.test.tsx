'use client';

import { render } from '@testing-library/react';
import { FC } from 'react';
import { describe, expect, test } from 'vitest';

import { useUniqueId } from '@/src/hooks/useUniqueId';

const UseUniqueIdTestComponent: FC<{}> = () => {
  const notTransformedId = useUniqueId();
  const transformedId = useUniqueId(id => `generated-id-${id}`);

  return (
    <>
      <p>Not transformed id: {notTransformedId}</p>
      <p>Transformed id: {transformedId}</p>
    </>
  );
};

describe('useUniqueId hook', () => {
  test('Not throwing errors', () => {
    expect(() => render(<UseUniqueIdTestComponent />)).not.toThrow();
  });
});
