import { usePathname, useRouter } from 'next/navigation';
import { vi } from 'vitest';

/**
 * Mock **next/navigation** package.
 */
export const mockRouter = () => {
  vi.mock('next/navigation', () => {
    return {
      useRouter: (): Partial<ReturnType<typeof useRouter>> => {
        return {
          push() {},
        };
      },

      usePathname: (): Partial<ReturnType<typeof usePathname>> => {
        return '/';
      },
    };
  });
};
