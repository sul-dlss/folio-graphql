import FolioAPI from "./folio-api.js"
import { FeeFine } from './schema'

export default class FeeFinesAPI extends FolioAPI {
  async getFeeFine(id: string): Promise<FeeFine> {
    return this.get<FeeFine>(`/feefines/${encodeURIComponent(id)}`)
  }
}
