import { describe, expect, test } from 'vitest';

import { darkTheme, lightTheme } from '@/src/themes';

describe('TW Theme objects test', () => {
  test('It works', () => {
    expect(darkTheme).toMatchStructure(lightTheme);
  });
});
