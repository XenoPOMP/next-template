import { afterEach, describe, test, vi } from 'vitest';

import { stubGlobal, testObject } from '@/__tests__/assets/utilities';
import { AppConstants } from '@/app/app.constants';
import { generateOpenGraph } from '@/src/utils/seo';
import { Months } from '@/src/utils/seo/sitemap-utils';

describe('SEO utilities', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test('Test Months enum', () => {
    testObject(Months);
  });

  test('Generate OG image', () => {
    stubGlobal<typeof AppConstants>('AppConstants', {
      sharedOpenGraphConfig: { images: undefined },
    });
    testObject(generateOpenGraph());
  });
});
