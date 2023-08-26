import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '../env'
import { schema } from './schema'

export abstract class Controller {
  protected static readonly dbInstance = drizzle(postgres(env.DATABASE_URL), {
    schema,
  })
}
