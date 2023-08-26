import 'dotenv/config'

import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    PORT: z.string().transform((port) => parseInt(port)),
  },

  runtimeEnv: process.env,
})
