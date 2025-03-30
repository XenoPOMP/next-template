import { describe, expect, test } from 'vitest';

import { darkTheme, lightTheme } from '@/themes';

const DEFAULT_THEME = darkTheme;

describe('TW Theme objects test', () => {
  // TODO Change this test when multiple themes will be implemented
  test.skip.each([{ name: 'Light', theme: lightTheme }])(
    'Struct of "$name" theme matches DEFAULT_THEME',
    ({ theme }) => {
      expect(theme).toMatchStructure(DEFAULT_THEME);
    },
  );
});
