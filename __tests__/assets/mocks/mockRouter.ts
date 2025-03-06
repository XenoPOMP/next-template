import type { usePathname, useRouter } from 'next/navigation';
import { vi } from 'vitest';

/**
 * Mock **next/navigation** package.
 */
export const mockRouter = () => {
  vi.mock('next/navigation', () => {
    return {
      /** Mock implementation for useRouter */
      useRouter: (): Partial<ReturnType<typeof useRouter>> => {
        return {
          /** Mock implementation for useRouter().push */
          push() {},
        };
      },

      /** Mock implementation for usePathname */
      usePathname: (): Partial<ReturnType<typeof usePathname>> => {
        return '/';
      },
    };
  });
};
