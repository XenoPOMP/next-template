import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Home from '@/app/page';

describe('Index page', () => {
  test('Render without errors', () => {
    expect(() => render(<Home />)).not.toThrow();
  });
});
