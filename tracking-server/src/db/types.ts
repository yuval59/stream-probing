import { StreamDataTable, StreamTable } from './schema'

export type NewStream = typeof StreamTable.$inferInsert
export type NewStreamData = typeof StreamDataTable.$inferInsert
