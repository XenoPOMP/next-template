import { Metadata } from 'next';
import { describe, test } from 'vitest';

import { expectToDeepEqual } from '@/__tests__/assets/utilities/expectToDeepEqual';
import { generateStaticMetadata } from '@/src/utils/seo';

describe('generateStaticMetadata func', () => {
  test('No robots config defined', () => {
    const generated = generateStaticMetadata({});
    const real: Metadata = {
      robots: null,
    };

    expectToDeepEqual(generated, real);
  });

  test('Only noIndex provided', () => {
    const generated = generateStaticMetadata({
      robots: { noIndex: true },
    });
    const real: Metadata = {
      robots: 'noindex',
    };

    expectToDeepEqual(generated, real);
  });

  test('Only noFollow provided', () => {
    const generated = generateStaticMetadata({
      robots: { noFollow: true },
    });
    const real: Metadata = {
      robots: 'nofollow',
    };

    expectToDeepEqual(generated, real);
  });

  test('noFollow and noIndex', () => {
    const generated = generateStaticMetadata({
      robots: { noFollow: true, noIndex: true },
    });
    const real: Metadata = {
      robots: 'noindex, nofollow',
    };

    expectToDeepEqual(generated, real);
  });
});
