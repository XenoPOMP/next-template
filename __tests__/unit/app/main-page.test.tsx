import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import Home from '@/app/page.tsx';

describe('MainPage tests', () => {
  testNextPage(<Home />);
});
