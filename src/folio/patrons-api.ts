import FolioAPI from "./folio-api.js"
import { Patron } from '../schema'

export default class PatronsAPI extends FolioAPI {
  async getPatron(id: string, fields: string[]): Promise<Patron> {

    const params = new URLSearchParams({
      includeLoans: String(fields.includes("loans")),
      includeHolds: String(fields.includes("holds")),
      includeCharges: String(fields.includes("charges")),
    })

    const patron = await this.get<Patron>(`/patron/account/${encodeURIComponent(id)}?${params}`)

    // force add the UUID we queried with because FOLIO doesn't return it...
    patron.id = id
    return patron
  }
}
