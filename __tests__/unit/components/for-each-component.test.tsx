import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { For } from '@/components/layout';

import { assertRendering } from '@test/assets';

describe('"For" component tests', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    assertRendering(<For each={[]} />);
  });

  test('Internal .map functionality works', () => {
    const testId = `value-holder`;
    const testData = [2, 4, 8].map(v => ({ value: v }));

    render(
      <For each={testData}>
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
