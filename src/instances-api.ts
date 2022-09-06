import FolioAPI from "./folio-api.js"
import { Instance } from './schema'

export default class InstancesAPI extends FolioAPI {
  async getInstance(id: string): Promise<Instance> {
    let instance = await this.get<Instance>(`/instance-storage/instances/${encodeURIComponent(id)}`)
    return instance
  }

  async getByHoldingsRecordId(holdingsRecordId: string): Promise<Instance> {
    var instance = await this.get<Instance>(`/instance-storage/instances?query=holdingsRecords.id==${encodeURIComponent(holdingsRecordId)}`)
    return instance['instances'][0]
  }
}
