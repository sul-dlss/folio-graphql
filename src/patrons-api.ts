import FolioAPI from "./folio-api.js"
import { Patron } from './schema'

export default class PatronsAPI extends FolioAPI {
  async getPatron(id: string): Promise<Patron> {
    return this.get<Patron>(`/patron/account/${encodeURIComponent(id)}`)
  }
}
