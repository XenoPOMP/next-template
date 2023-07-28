import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Car page',
  robots: 'noindex, nofollow',
};

const CarPage: FC<{}> = () => {
  return <main>Car page</main>;
};

export default CarPage;
