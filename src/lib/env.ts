import { z } from "zod";

const envSchema = z.object({
  apiBaseUrl: z.string().url(),
});

const parsedEnv = envSchema.parse({
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const env = {
  apiBaseUrl: parsedEnv.apiBaseUrl,
} as const;
