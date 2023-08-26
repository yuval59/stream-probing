import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'
import { StreamTable } from './stream'

export const StreamDataTable = pgTable('stream_data', {
  id: varchar('id').primaryKey(),
  streamId: varchar('stream_id')
    .references(() => StreamTable.id)
    .notNull(),
  video_bitrate: integer('video_bitrate'),
  audio_bitrate: integer('audio_bitrate'),
  width: integer('width'),
  height: integer('height'),
})
