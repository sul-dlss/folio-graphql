import FolioAPI from "./folio-api.js"
import { CqlParams, Instance, Authority } from '../schema'

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

  // The authorities endpoint throws error using the default types API limit since max limit for 
  // the endpoint is 1000.  We needed to write a custom resolver to both ask by specific id so 
  // we don't have to retrieve all authorities at once in the way the types API does.  
  // We also want to account for null cases since not every authority returned for contributors or
  // subjects will be linked to an id.  
  async getAuthorityById(id: string): Promise<Authority> {
    if (!id) { return null }
    const authority = await this.get<Authority>(`/authority-storage/authorities/${encodeURIComponent(id)}`)
    return authority
  }
}
