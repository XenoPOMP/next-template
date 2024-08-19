import { z } from 'zod';

// Schema of env parsed object
const envSchema = z.object({
  CANONICAL_URL: z.string(),
});

// Use this object to validate env file
export const env = envSchema.parse(process.env);
