import { expectType } from 'tsd';
import { describe, test } from 'vitest';

import type { TypesafeUrl } from '@/types';

describe('TypesafeURL type', () => {
  test('No params', () => {
    expectType<TypesafeUrl<'https://localhost.com'>>({});
  });

  test('HTTP Links are parsed properly', () => {
    expectType<TypesafeUrl<'https://localhost.com/:page/number/:of'>>({
      page: '1',
      of: 'none',
    });

    expectType<TypesafeUrl<'http://otherhost.ru/:page/number/:of'>>({
      page: '1',
      of: 'none',
    });
  });

  test('Relative links also work properly', () => {
    expectType<TypesafeUrl<'/:page/number/:of'>>({
      page: '1',
      of: 'none',
    });

    expectType<TypesafeUrl<'/:page/number/:of'>>({
      page: '1',
      of: 'none',
    });

    expectType<TypesafeUrl<'../:page/number/:of'>>({
      page: '1',
      of: 'none',
    });

    expectType<TypesafeUrl<'../:page/number/:of'>>({
      page: '1',
      of: 'none',
    });

    expectType<TypesafeUrl<'./:page/number/:of'>>({
      page: '1',
      of: 'none',
    });

    expectType<TypesafeUrl<'./:page/number/:of'>>({
      page: '1',
      of: 'none',
    });

    expectType<TypesafeUrl<':page/number/:of'>>({
      page: '1',
      of: 'none',
    });

    expectType<TypesafeUrl<':page/number/:of'>>({
      page: '1',
      of: 'none',
    });
  });
});
