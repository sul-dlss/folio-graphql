import FolioAPI from "./folio-api.js"
import { CqlParams, HoldingsRecord } from './schema'

export default class HoldingsAPI extends FolioAPI {
  async getHoldingsRecord(id: string): Promise<HoldingsRecord> {
    return await this.get<HoldingsRecord>(`/holdings-storage/holdings/${encodeURIComponent(id)}`)
  }

  async getByInstanceId(instanceId: string, params: Partial<{ params: CqlParams, [key: string]: Object | Object[] | undefined }>): Promise<HoldingsRecord[]> {
    return await this.getHoldingsRecords({ ...params, instanceId: [instanceId] })
  }

  async getHoldingsRecords(params: Partial<{ params: CqlParams, [key: string]: Object | Object[] | undefined }>): Promise<HoldingsRecord[]> {
    let urlParams = this.buildCqlQuery(params)

    let response = await this.get<HoldingsRecord[]>(`/holdings-storage/holdings`, { params: urlParams })
    return response['holdingsRecords']
  }
}
