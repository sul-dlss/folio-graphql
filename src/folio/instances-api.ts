import FolioAPI from "./folio-api.js"
import { CqlParams, Instance } from '../schema'

interface InstancesResponse {
  instances: Instance[]
}

export default class InstancesAPI extends FolioAPI {
  async getInstance(id: string): Promise<Instance> {
    const instance = await this.get<Instance>(`/instance-storage/instances/${encodeURIComponent(id)}`)
    return instance
  }

  async getByHoldingsRecordId(holdingsRecordId: string): Promise<Instance> {
    const instance = await this.getInstances({ 'holdingsRecords.id': [holdingsRecordId] })
    return instance[0]
  }

  async getInstances(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<Instance[]> {
    const urlParams = this.buildCqlQuery(params)
    if (!urlParams.has('limit')) urlParams.set('limit', '2147483647');

    const response = await this.get<InstancesResponse>(`/instance-storage/instances`, { params: urlParams })
    return response.instances
  }
}
