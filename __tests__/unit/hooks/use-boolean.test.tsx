'use client';

import {
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react';
import { capitalize } from '@xenopomp/advanced-utils';
import { afterEach, describe, expect, test } from 'vitest';

import { TestUseBoolean } from '@/__tests__/assets/components';
import {
  booleanishString,
  expectHookToRender,
} from '@/__tests__/assets/utilities';
import { ViLogger } from '@/__tests__/assets/utilities/vi-logger.ts';
import useBoolean from '@/src/hooks/useBoolean.ts';

/**
 * Renders useBoolean hook and returns result
 * of render.
 * @param args
 */
const renderResult = (...args: Parameters<typeof useBoolean>) => {
  const res = renderHook(() => useBoolean(...args));
  return res.result.current;
};

/**
 * Renders test artifact and then return functions
 * to manipulate with it.
 */
const renderTestArtifact = () => {
  render(<TestUseBoolean />);
  ViLogger.debug('Test component has been rendered.');

  // Get elements from DOM
  const valueHolder = screen.getByTestId<HTMLDivElement>('value-holder');
  const toggleButton = screen.getByTestId<HTMLButtonElement>('toggle-button');
  const changeToTrueButton =
    screen.getByTestId<HTMLButtonElement>('change-to-true');
  const changeToFalseButton =
    screen.getByTestId<HTMLButtonElement>('change-to-false');

  // Asserts current value
  const assertValue = (value: boolean) => {
    const assertion = booleanishString(value);

    ViLogger.debug(`Assert value to be ${capitalize(assertion)}.`);
    expect(valueHolder.getAttribute('data-value')).toBe(assertion);
  };

  // Presses the `Toggle value` button
  const toggle = () => fireEvent.click(toggleButton);

  const change = (value: boolean) =>
    fireEvent.click(value ? changeToTrueButton : changeToFalseButton);

  return {
    assertValue,
    toggle,
    change,
  };
};

describe('useBoolean hook', () => {
  afterEach(() => {
    cleanup();
  });

  test('Not throwing errors', () => {
    expectHookToRender(() => useBoolean());
  });

  test('Not providing default value', () => {
    const [value] = renderResult();
    expect(value).toBe(false);
  });

  test('Default value', () => {
    const [value] = renderResult(true);
    expect(value).toBe(true);
  });

  test('Toggle value', () => {
    const { assertValue, toggle } = renderTestArtifact();

    // Initial value
    assertValue(false);

    // Toggle should work
    toggle();
    assertValue(true);
  });

  test('Change value', () => {
    const { assertValue, change } = renderTestArtifact();

    // Initial value
    assertValue(false);

    // You can change value manually
    change(true);
    assertValue(true);

    change(false);
    assertValue(false);
  });
});
