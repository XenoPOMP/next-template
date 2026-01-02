import { describe, test } from 'vitest';
import { assertRendering } from 'xenopomp-essentials/vitest';

import { Avatar } from '@/components/ui/kit';

import catImg from '@test/assets/images/cat.jpeg';

describe('Avatar component', () => {
  test('It renders', () => {
    assertRendering(<Avatar />);
  });

  test('You can set src', () => {
    assertRendering(<Avatar src={catImg} />);
  });

  test('Placeholder without src renders dicebear image', () => {
    assertRendering(<Avatar placeholder='XenoPOMP' />);
  });
});
