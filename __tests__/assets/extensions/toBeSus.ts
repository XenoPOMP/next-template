import type { ExpectationResult } from '@vitest/expect';

export const toBeSus = (received: any): ExpectationResult => {
  return {
    pass: true,
    message: () => 'Sussy',
  };
};
