import type IAppConstants from '@/src/interfaces/AppConstants.interface';

export const AppConstants: IAppConstants = {
  appName: 'Next Template',
  sharedOpenGraphConfig: {
    images: [],
    siteName: 'Next Template',
    url: process.env.CANONICAL_URL,
  },
};
