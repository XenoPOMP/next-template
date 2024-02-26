import { render } from '@testing-library/react';
import { expect } from 'vitest';

type RenderArguments = Parameters<typeof render>;

type RenderFunc = (...args: RenderArguments) => void;

/**
 * Renders component and expects that it won`t throw error.
 */
export const expectToRender: RenderFunc = (...props) => {
  expect(() => render(...props)).not.toThrow();
};
