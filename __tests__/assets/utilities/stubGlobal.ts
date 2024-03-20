import { vi } from 'vitest';

import type { DeepPartial, Stub } from '@/__tests__/assets/types';

/**
 * Mocks global scope object.
 *
 * @param name
 * @param stub
 *
 * @example
 * stubGlobal<typeof navigator>('navigator', {
 *     clipboard: {
 *       writeText: async (text: string) => vi.fn(),
 *     },
 * });
 */
export const stubGlobal = <Global extends object>(
  name: string,
  stub: DeepPartial<Stub<Global>>,
) => {
  vi.stubGlobal(name, stub);
};
