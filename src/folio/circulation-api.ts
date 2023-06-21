import FolioAPI from "./folio-api.js"
import { Loan, PatronItem, Request } from '../schema'
export default class CirculationAPI extends FolioAPI {
  async getLoan(id: string): Promise<Loan> {
    return await this.get<Loan>(`/circulation/loans/${encodeURIComponent(id)}`)
  }
  async getRequest(id: string): Promise<Request> {
    return await this.get<Request>(`/circulation/requests/${encodeURIComponent(id)}`)
  }
  async getRequestQueueLength(item: PatronItem): Promise<number> {
    let queue;
    if (item.itemId) {
      queue = await this.get<Request>(`/circulation/requests/queue/item/${encodeURIComponent(item.itemId)}`)
    // title-level requests have an instanceId but no itemId
    } else if (item.instanceId) {
      queue = await this.get<Request>(`/circulation/requests/queue/instance/${encodeURIComponent(item.instanceId)}`)
    }
    return queue?.totalRecords;
  }
}
