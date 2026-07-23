import DataLoader from "dataloader"
import FolioAPI from "./folio-api.js"
import { CqlParams, HoldingsRecord, BoundWithPart, BoundWithParts } from '../schema'

interface HoldingsResponse {
  holdingsRecords: HoldingsRecord[]
}

export default class HoldingsAPI extends FolioAPI {
  private boundWithPartsByItemIdLoader = this.buildBoundWithPartsByItemIdLoader()

  private buildBoundWithPartsByItemIdLoader() {
    return new DataLoader<string, BoundWithPart[]>(
      (itemIds) => this.batchBoundWithPartsByItemId(itemIds as string[]),
      { maxBatchSize: 50 },
    )
  }

  clearLoaders(): void {
    this.boundWithPartsByItemIdLoader = this.buildBoundWithPartsByItemIdLoader()
  }

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

  async getBoundWithPartsByItemId(itemId: string): Promise<BoundWithPart[]> {
    if (!itemId) return []
    return this.boundWithPartsByItemIdLoader.load(itemId)
  }

  private async batchBoundWithPartsByItemId(itemIds: string[]): Promise<BoundWithPart[][]> {
    const urlParams = this.buildCqlQuery({ itemId: itemIds })
    if (!urlParams.has('limit')) urlParams.set('limit', '2147483647')

    const response = await this.get<BoundWithParts>('/inventory-storage/bound-with-parts', { params: urlParams })

    const byItemId = new Map<string, BoundWithPart[]>()
    for (const part of response.boundWithParts) {
      const bucket = byItemId.get(part.itemId) ?? []
      bucket.push(part)
      byItemId.set(part.itemId, bucket)
    }
    return itemIds.map((id) => byItemId.get(id) ?? [])
  }

  async getBoundWithHoldingsPerItem(id: string): Promise<HoldingsRecord[]> {
    const parts = await this.getBoundWithPartsByItemId(id)
    const holdingsPromises = parts.map((part) => this.getHoldingsRecord(part.holdingsRecordId));
    return Promise.all(holdingsPromises);
  }
}
