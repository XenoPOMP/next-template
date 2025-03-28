import { z } from 'zod';

const lenientSchema = z.intersection(z.string(), z.object({}));

const nodeEnvSchema = z
  .union([z.literal('development'), z.literal('production'), lenientSchema])
  .optional();

// Schema of env parsed object
const envSchema = z.object({
  CANONICAL_URL: z.string().default('http://localhost:3000'),
  NODE_ENV: nodeEnvSchema,
});

export type EnvSchema = z.infer<typeof envSchema>;

// Use this object to validate env file
export const env = envSchema.parse(process.env);
