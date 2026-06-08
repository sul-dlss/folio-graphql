import FolioAPI from "./folio-api.js"
import { CqlParams, Item } from '../schema'
import { RequestQueueResponse } from './circulation-api'

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
    if (!urlParams.has('limit')) urlParams.set('limit', '2147483647');
    urlParams.set('totalRecords', 'exact');

    const response = await this.get<ItemsResponse>(`/item-storage/items`, { params: urlParams });
    globalThis.itemNumber = response['totalRecords']; // no error
    return response.items
  }

  async getRequestQueueLength(id: string): Promise<number> {
    const queue = await this.get<RequestQueueResponse>(`/circulation/requests/queue/item/${encodeURIComponent(id)}`)
    return queue?.totalRecords;
  }
}
