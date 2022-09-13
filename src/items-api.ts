import FolioAPI from "./folio-api.js"
import { CqlParams, Item } from './schema'
export default class ItemsAPI extends FolioAPI {
  async getItem(id: string): Promise<Item> {
    return await this.get<Item>(`/item-storage/items/${encodeURIComponent(id)}`)
  }

  async getByHoldingsRecordId(holdingsRecordId: string, params: Partial<{ params: CqlParams, [key: string]: Object | Object[] | undefined }>): Promise<Item[]> {
    return await this.getItems({ ...params, 'holdingsRecordId': holdingsRecordId })
  }

  async getByInstanceId(instanceId: string, params: Partial<{ params: CqlParams, [key: string]: Object | Object[] | undefined }>): Promise<Item[]> {
    return await this.getItems({ ...params, 'holdingsRecords.instanceId': instanceId })
  }

  async getItems(params: Partial<{ params: CqlParams, [key: string]: Object | Object[] | undefined }>): Promise<Item[]> {
    let urlParams = this.buildCqlQuery(params)

    let response = await this.get<Item[]>(`/item-storage/items`, { params: urlParams })
    return response['items']
  }
}
