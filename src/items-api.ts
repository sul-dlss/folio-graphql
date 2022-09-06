import FolioAPI from "./folio-api.js"
import { Item } from './schema'

export default class ItemsAPI extends FolioAPI {
  async getItem(id: string): Promise<Item> {
    return await this.get<Item>(`/item-storage/items/${encodeURIComponent(id)}`)
  }

  async getByHoldingsRecordId(holdingsRecordId: string): Promise<Item[]> {
    var items = await this.get<Item>(`/item-storage/items?query=holdingsRecordId==${encodeURIComponent(holdingsRecordId)}`)
    return items['items']
  }

  async getByInstanceId(instanceId: string): Promise<Item[]> {
    var items = await this.get<Item>(`/item-storage/items?query=holdingsRecords.instanceId==${encodeURIComponent(instanceId)}`)
    return items['items']
  }
}
