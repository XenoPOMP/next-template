import { z } from 'zod';

// Schema of env parsed object
const envSchema = z.object({
  CANONICAL_URL: z.string().default('http://localhost:3000'),
  NODE_ENV: z.string().min(1),
});

// Use this object to validate env file
export const env = envSchema.parse(process.env);
