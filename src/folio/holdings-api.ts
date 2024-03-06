import FolioAPI from "./folio-api.js"
import { CqlParams, HoldingsRecord, BoundWithPart, BoundWithParts } from '../schema'

interface HoldingsResponse {
  holdingsRecords: HoldingsRecord[]
}

export default class HoldingsAPI extends FolioAPI {
  async getHoldingsRecord(id: string): Promise<HoldingsRecord> {
    return await this.get<HoldingsRecord>(`/holdings-storage/holdings/${encodeURIComponent(id)}`)
  }

  async getByInstanceId(instanceId: string, params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<HoldingsRecord[]> {
    return await this.getHoldingsRecords({ ...params, instanceId: [instanceId] })
  }

  async getHoldingsRecords(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<HoldingsRecord[]> {
    const urlParams = this.buildCqlQuery(params)
    if (!urlParams.has('limit')) urlParams.set('limit', '2147483647');

    const response = await this.get<HoldingsResponse>(`/holdings-storage/holdings`, { params: urlParams })
    return response.holdingsRecords
  }

  async getBoundWithPart(id: string): Promise<BoundWithPart> {
    const urlParams = this.buildCqlQuery({ holdingsRecordId: id })
    if (!urlParams.has('limit')) urlParams.set('limit', '2147483647');

    const response = await this.get<BoundWithParts>('/inventory-storage/bound-with-parts', { params: urlParams });

    return response.boundWithParts[0];
  }

  async getBoundWithHoldingsPerItem(id: string): Promise<HoldingsRecord[]> {
    const urlParams = this.buildCqlQuery({ itemId: id });
    if (!urlParams.has('limit')) urlParams.set('limit', '2147483647');

    const response = await this.get<BoundWithParts>('/inventory-storage/bound-with-parts', { params: urlParams });

    const holdingsPromises = response.boundWithParts.map((part) => this.getHoldingsRecord(part.holdingsRecordId));
    return Promise.all(holdingsPromises);
  }
}
