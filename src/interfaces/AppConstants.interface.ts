import type { ModifiedOGConfig } from '@/src/types';

interface IAppConstants {
  APP_NAME: string;
  defaultCanonical: string;
  SHARED_OG_CONFIG: Partial<ModifiedOGConfig>;
}

export default IAppConstants;
