import { describe, test } from 'vitest';

import catImage from '@/__tests__/assets/images/cat.jpeg';
import { expectToRender } from '@/__tests__/assets/utilities';
import BackgroundImage from '@/src/components/ui/BackgroundImage/BackgroundImage';

describe('BackgroundImage component', () => {
  test('It renders', () => {
    expectToRender(
      <BackgroundImage src={catImage} alt={'Sus'} width={1920} height={1080} />,
    );
  });
});
