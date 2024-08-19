import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { For } from '@/src/components/layout';

describe('"For" component tests', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    expectToRender(<For each={[]} />);
  });

  test('Internal .map functionality works', () => {
    const testId = `value-holder`;

    render(
      <For
        each={[
          {
            value: 2,
          },
          {
            value: 4,
          },
          {
            value: 8,
          },
        ]}
      >
        {({ value }, index) => (
          <div
            data-testid={testId}
            data-value={value * 2}
            key={`test-item-${index}`}
          >
            Dummy
          </div>
        )}
      </For>,
    );

    const components = screen.getAllByTestId<HTMLDivElement>(testId);
    const values = components
      .map(component => component.getAttribute('data-value'))
      .filter(value => value !== null)
      .map(value => +value);

    expect(values).toStrictEqual([4, 8, 16]);
  });
});
