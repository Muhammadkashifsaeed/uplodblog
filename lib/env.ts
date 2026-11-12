import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default("UploadBlog.com"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_FACEBOOK_URL: z
    .string()
    .url()
    .default("https://www.facebook.com/uploadblog"),
  NEXT_PUBLIC_INSTAGRAM_URL: z
    .string()
    .url()
    .default("https://www.instagram.com/uploadblog"),
  NEXT_PUBLIC_API_BASE_URL: z.string().min(1).default("/api"),
  NEXT_PUBLIC_API_TIMEOUT: z.coerce.number().int().positive().default(10000),
});

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || undefined,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || undefined,
  NEXT_PUBLIC_FACEBOOK_URL: process.env.NEXT_PUBLIC_FACEBOOK_URL || undefined,
  NEXT_PUBLIC_INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL || undefined,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || undefined,
  NEXT_PUBLIC_API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT || undefined,
});
