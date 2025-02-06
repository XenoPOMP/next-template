import { describe, expect, test } from 'vitest';

import { darkTheme, lightTheme } from '@/themes';

const DEFAULT_THEME = lightTheme;

describe('TW Theme objects test', () => {
  test.each([{ name: 'Dark', theme: darkTheme }])(
    'Struct of "$name" theme matches DEFAULT_THEME',
    ({ theme }) => {
      expect(theme).toMatchStructure(DEFAULT_THEME);
    },
  );
});
