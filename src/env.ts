import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { vercel } from "@t3-oss/env-core/presets";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    RESEND_API_KEY: z.string().min(1),
    RESEND_AUDIENCE_ID: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
  },
  extends: [vercel()],
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
