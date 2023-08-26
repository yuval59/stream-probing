import { relations } from 'drizzle-orm'
import { StreamTable } from './stream'
import { StreamDataTable } from './stream-data'

export const streamRelations = relations(StreamTable, ({ many }) => ({
  data: many(StreamDataTable),
}))

export const streamDataRelations = relations(StreamDataTable, ({ one }) => ({
  stream: one(StreamTable, {
    fields: [StreamDataTable.streamId],
    references: [StreamTable.id],
  }),
}))
