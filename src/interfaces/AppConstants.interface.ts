import type { ModifiedOGConfig } from '@/src/types';

interface IAppConstants {
  appName: string;
  defaultCanonical: string;
  sharedOpenGraphConfig: Partial<ModifiedOGConfig>;
}

export default IAppConstants;
