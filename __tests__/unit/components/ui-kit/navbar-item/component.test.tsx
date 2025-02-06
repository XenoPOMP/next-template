import { cleanup, render, screen } from '@testing-library/react';
import type { usePathname } from 'next/navigation';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { NavbarItem } from '@/components/ui/kit';

import { expectToRender, injectMocks, mockRouter } from '@test/assets';

describe('UI Kit / Navbar item', () => {
  injectMocks(() => {
    mockRouter();
  });

  afterEach(() => cleanup());

  test('It renders', () => {
    expectToRender(<NavbarItem href='/'>Go home</NavbarItem>);
  });

  test('Link becomes active if target url is met', () => {
    vi.mock('next/navigation', () => {
      return {
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
    expectToRender(
      <NavbarItem
        parentPath='/'
        href='/faq'
      >
        Faq
      </NavbarItem>,
    );
  });

  test('Link can be marked as index', () => {
    expectToRender(
      <NavbarItem
        href='/faq'
        index
      >
        Faq
      </NavbarItem>,
    );

    expectToRender(<NavbarItem href='/faq'>Faq</NavbarItem>);
  });
});
