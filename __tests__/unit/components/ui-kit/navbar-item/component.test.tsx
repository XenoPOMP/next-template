import { cleanup } from '@testing-library/react';
import { afterEach, describe, test } from 'vitest';

import { mockRouter } from '@/__tests__/assets/mocks';
import { expectToRender, injectMocks } from '@/__tests__/assets/utilities';
import { NavbarItem } from '@/src/components/ui/kit/NavbarItem/NavbarItem.tsx';

describe('UI Kit / Navbar item', () => {
  injectMocks(() => {
    mockRouter();
  });

  afterEach(() => cleanup());

  test('It renders', () => {
    expectToRender(<NavbarItem href='/'>Go home</NavbarItem>);
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
