import FolioAPI from "./folio-api.js"
import { FeeFine, CqlParams } from '../schema'

interface FeeFinesResponse {
  feefines: FeeFine[]
}

export default class FeeFinesAPI extends FolioAPI {
  async getFeeFine(id: string): Promise<FeeFine> {
    return this.get<FeeFine>(`/feefines/${encodeURIComponent(id)}`)
  }

  // Types of fee/fines in the system can be retrieved via an API call (GET /feefines)
  async getFeeFineTypes(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<FeeFine[]> {
    const urlParams = this.buildCqlQuery(params)
    const response = await this.get<FeeFinesResponse>(`/feefines`, { params: urlParams })
    return response.feefines
  }
}
