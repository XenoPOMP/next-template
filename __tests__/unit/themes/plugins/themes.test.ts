import { describe, expect, test } from 'vitest';

import { darkTheme, lightTheme } from '@/themes';

const DEFAULT_THEME = darkTheme;

describe('TW Theme objects test', () => {
  test.each([{ name: 'Dark', theme: lightTheme }])(
    'Struct of "$name" theme matches DEFAULT_THEME',
    ({ theme }) => {
      expect(theme).toMatchStructure(DEFAULT_THEME);
    },
  );
});
