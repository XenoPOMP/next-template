import { z } from 'zod';

import { AppConstants } from '@/app/app.constants.ts';

// Schema of env parsed object
const envSchema = z.object({
  CANONICAL_URL: z.string().default(AppConstants.defaultCanonical),
});

// Use this object to validate env file
export const env = envSchema.parse(process.env);
