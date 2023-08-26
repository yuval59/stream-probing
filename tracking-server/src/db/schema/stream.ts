import { boolean, pgTable, varchar } from 'drizzle-orm/pg-core'

export const StreamTable = pgTable('stream', {
  id: varchar('id').primaryKey(),

  streamName: varchar('name').notNull(),
  source: varchar('source').notNull(),

  video: boolean('video').notNull(),
})
