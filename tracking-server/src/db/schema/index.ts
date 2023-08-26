export { StreamTable } from './stream'
export { StreamDataTable } from './stream-data'

import { StreamTable } from './stream'
import { StreamDataTable } from './stream-data'

import { streamDataRelations, streamRelations } from './relations'

export const schema = {
  StreamTable,
  streamRelations,

  StreamDataTable,
  streamDataRelations,
}
