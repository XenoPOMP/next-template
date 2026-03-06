import { z } from 'zod';

// Schema of env parsed object
const envSchema = z.object({
  NEXT_PUBLIC_CANONICAL_URL: z.string(),
  NODE_ENV: z.string().optional(),
});

export type EnvSchema = z.infer<typeof envSchema>;

// Use this object to validate env file
export const env = envSchema.parse(process.env);
