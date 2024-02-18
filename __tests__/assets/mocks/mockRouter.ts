import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname, useRouter } from 'next/navigation';
import { vi } from 'vitest';

/**
 * Mock **next/navigation** package.
 */
export const mockRouter = () => {
  vi.mock('next/navigation', () => {
    return {
      useRouter: (...args: any[]): Partial<ReturnType<typeof useRouter>> => {
        return {
          push(href: string, options?: NavigateOptions) {},
        };
      },

      usePathname: (
        ...args: any[]
      ): Partial<ReturnType<typeof usePathname>> => {
        return '/';
      },
    };
  });
};
