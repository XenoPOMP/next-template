import { ApiService } from '@/app/test/api/Api.service';
import IAppConstants from '@/src/interfaces/AppConstants.interface';

export const AppConstants: IAppConstants = {
  appName: 'Next Template',
  maxContainerWidth: '1680px',
  queries: {
    posts: {
      getAll: {
        key: 'Posts >> Get all',
        fn: () => ApiService.getAllPosts(),
      },
    },
  },
};
