import { cleanup, render, screen } from '@testing-library/react';
import type { usePathname } from 'next/navigation';
import { afterEach, describe, expect, test, vi } from 'vitest';
import {
  assertRendering,
  injectMocks,
  mockRouter,
} from 'xenopomp-essentials/vitest';

import { NavbarItem } from '@/components/ui/kit';

describe('UI Kit / Navbar item', () => {
  injectMocks(() => {
    mockRouter();
  });

  afterEach(() => cleanup());

  test('It renders', () => {
    assertRendering(<NavbarItem href='/'>Go home</NavbarItem>);
  });

  test('Link becomes active if target url is met', () => {
    vi.mock('next/navigation', () => {
      return {
        // eslint-disable-next-line jsdoc/require-jsdoc
        usePathname: (): Partial<ReturnType<typeof usePathname>> => {
          return '/other';
        },
      };
    });

    render(
      <NavbarItem
        href='/other'
        data-testid='item'
      />,
    );

    const navItem = screen.getByTestId('item');
    const isActive = navItem.getAttribute('data-is-active') === 'true';

    expect(isActive).toBe(true);

    // Return base mocks
    mockRouter();
  });

  test('Target URL works', () => {
    assertRendering(
      <NavbarItem
        parentPath='/'
        href='/faq'
      >
        Faq
      </NavbarItem>,
    );
  });

  test('Link can be marked as index', () => {
    assertRendering(
      <NavbarItem
        href='/faq'
        index
      >
        Faq
      </NavbarItem>,
    );

    assertRendering(<NavbarItem href='/faq'>Faq</NavbarItem>);
  });
});
