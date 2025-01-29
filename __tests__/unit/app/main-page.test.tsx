import { describe } from 'vitest';

import Home from '@app/page';

import { testNextPage } from '@test/assets';

describe('MainPage tests', () => {
  testNextPage(<Home />);
});
