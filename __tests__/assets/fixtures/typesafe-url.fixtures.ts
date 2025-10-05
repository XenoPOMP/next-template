interface Fixture {
  name: string;
  href: string;
  params: Record<string, string>;
  queryParams: Record<string, string>;
  expected: string;
}

export const typesafeUrlFixtures: Fixture[] = [
  {
    name: 'No params',
    href: 'https://localhost.com',
    params: {},
    queryParams: {},
    expected: 'https://localhost.com/',
  },
  {
    name: 'Path params',
    href: 'https://localhost.com/pages/:page/reviews/:reviewId',
    params: {
      page: '1',
      reviewId: '109',
    },
    queryParams: {},
    expected: 'https://localhost.com/pages/1/reviews/109',
  },
  {
    name: 'Query params',
    href: 'https://localhost.com',
    params: {},
    queryParams: {
      location: 'Russia',
      pos: 'x1y2',
    },
    expected: 'https://localhost.com/?location=Russia&pos=x1y2',
  },
  {
    name: 'Path params & Query params',
    href: 'https://localhost.com/pages/:page/reviews/:reviewId',
    params: {
      page: '1',
      reviewId: '109',
    },
    queryParams: {
      location: 'Russia',
      pos: 'x1y2',
    },
    expected:
      'https://localhost.com/pages/1/reviews/109?location=Russia&pos=x1y2',
  },
];
