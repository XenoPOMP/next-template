import { cleanup } from '@testing-library/react';
import { afterEach, describe, test } from 'vitest';

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
