import type { Config } from 'drizzle-kit'
import { env } from './src/env'

export default {
  driver: 'pg',
  out: 'drizzle',
  schema: ['src/db/schema'],
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config
