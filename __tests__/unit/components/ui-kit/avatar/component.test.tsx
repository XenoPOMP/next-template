import { describe, test } from 'vitest';

import { Avatar } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';
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
