import type IAppConstants from '@/src/interfaces/AppConstants.interface';

export const AppConstants: IAppConstants = {
  appName: 'Next Template',
  defaultCanonical: 'http://localhost:3000',
  sharedOpenGraphConfig: {
    images: [
      {
        url: '/open-graph/og (200x200).png',
        width: 200,
        height: 200,
      },
      {
        url: '/open-graph/og (1200x627).png',
        width: 1200,
        height: 627,
      },
    ],
    siteName: 'Next Template',
    url: process.env.CANONICAL_URL,
  },
};
