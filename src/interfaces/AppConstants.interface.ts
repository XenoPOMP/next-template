import { FunctionPrimitive } from '@xenopomp/advanced-types';
import { QueryFunction } from 'react-query';

import { ApiService } from '@/app/test/api/Api.service';

export type QueryConstant<K extends string, F extends FunctionPrimitive> = {
  key: K;
  fn: QueryFunction<Awaited<ReturnType<F>>, K>;
};

interface IAppConstants {
  appName: string;
  maxContainerWidth: string;
  queries: {
    posts: {
      getAll: QueryConstant<'Posts >> Get all', typeof ApiService.getAllPosts>;
    };
  };
}

export default IAppConstants;
