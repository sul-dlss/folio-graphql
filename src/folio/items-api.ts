import FolioAPI from "./folio-api.js"
import { CqlParams, Item } from '../schema'

interface ItemsResponse {
  items: Item[]
}
export default class ItemsAPI extends FolioAPI {
  async getItem(id: string): Promise<Item> {
    return await this.get<Item>(`/item-storage/items/${encodeURIComponent(id)}`)
  }

  async getByHoldingsRecordId(holdingsRecordId: string, params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<Item[]> {
    return await this.getItems({ ...params, 'holdingsRecordId': holdingsRecordId })
  }

  async getByInstanceId(instanceId: string, params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<Item[]> {
    return await this.getItems({ ...params, 'holdingsRecords.instanceId': instanceId })
  }

  async getItems(params: Partial<{ params: CqlParams, [key: string]: unknown}>): Promise<Item[]> {
    const urlParams = this.buildCqlQuery(params)

    const response = await this.get<ItemsResponse>(`/item-storage/items`, { params: urlParams })
    return response.items
  }
}
