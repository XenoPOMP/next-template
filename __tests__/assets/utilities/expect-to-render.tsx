import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { ReplaceReturnType } from '@xenopomp/advanced-types';
import { Suspense } from 'react';
import { expect } from 'vitest';

type RenderArguments = Parameters<typeof render>;

type RenderFunc = (...args: RenderArguments) => void;

/**
 * Renders component and expects that it won`t throw error.
 */
export const expectToRender: RenderFunc = (...props) => {
  expect(() => render(...props)).not.toThrow();
};
