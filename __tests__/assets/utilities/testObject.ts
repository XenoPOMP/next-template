import { expect } from 'vitest';

/**
 * Checks if object is defined.
 *
 * @param config
 */
export const testObject = (config: object) => {
  expect(config).toBeDefined();
};
