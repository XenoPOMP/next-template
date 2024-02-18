import { describe, test } from 'vitest';

import { testObject } from '@/__tests__/assets/utilities/testObject';
import nextConfig from '@/next.config';
import postcssConfig from '@/postcss.config';
import twConfig from '@/tailwind.config';

describe('Configs', () => {
  test('Next.js config', () => {
    testObject(nextConfig);
  });

  test('PostCSS config', () => {
    testObject(postcssConfig);
  });

  test('Tailwind config', () => {
    testObject(twConfig);
  });
});
