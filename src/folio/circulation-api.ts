import FolioAPI from "./folio-api.js"
import { Loan } from '../schema'

export default class CirculationAPI extends FolioAPI {
  async getLoan(id: string): Promise<Loan> {
    return await this.get<Loan>(`/circulation/loans/${encodeURIComponent(id)}`)
  }
}
