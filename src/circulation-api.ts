import FolioAPI from "./folio-api.js"
import { CirculationLoan } from './schema'

export default class CirculationAPI extends FolioAPI {
  async getLoan(id: string): Promise<CirculationLoan> {
    return await this.get<CirculationLoan>(`/circulation/loans/${encodeURIComponent(id)}`)
  }
}
