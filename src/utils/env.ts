import { z } from 'zod';

import { DEFAULT_CANONICAL } from '@/app/constants';

// Schema of env parsed object
const envSchema = z.object({
  CANONICAL_URL: z.string().default(DEFAULT_CANONICAL),
});

// Use this object to validate env file
export const env = envSchema.parse(process.env);
