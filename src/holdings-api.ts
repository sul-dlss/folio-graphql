import FolioAPI from "./folio-api.js"
import { HoldingsRecord } from './schema'

export default class HoldingsAPI extends FolioAPI {
  async getHoldingsRecord(id: string): Promise<HoldingsRecord> {
    return await this.get<HoldingsRecord>(`/holdings-storage/holdings/${encodeURIComponent(id)}`)
  }

  async getByInstanceId(instanceId: string): Promise<HoldingsRecord[]> {
    var holdingsRecord = await this.get<HoldingsRecord>(`/holdings-storage/holdings?query=instanceId==${encodeURIComponent(instanceId)}`)

    return holdingsRecord['holdingsRecords']
  }
}
