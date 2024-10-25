import type { Metadata } from 'next';

export const NO_INDEX_PAGE: Pick<Metadata, 'robots'> = {
  robots: { index: false, follow: false },
};
