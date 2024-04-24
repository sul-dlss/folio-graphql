import FolioAPI from "./folio-api.js"
import { Loan, PatronItem, Request, CqlParams } from '../schema'
interface LoansResponse {
  loans: Loan[]
}

export interface RequestQueueResponse {
  requests: Request[]
  totalRecords: number
}

export default class CirculationAPI extends FolioAPI {
  async getLoan(id: string): Promise<Loan> {
    if (!id) { return null }
    return await this.get<Loan>(`/circulation/loans/${encodeURIComponent(id)}`)
  }
  async getLoans(params: Partial<{ params: CqlParams, [key: string]: object | object[] | string | undefined }>): Promise<Loan[]> {
    const urlParams = this.buildCqlQuery(params)
    if (!urlParams.has('limit')) urlParams.set('limit', '2147483647');

    const response = await this.get<LoansResponse>(`/circulation/loans`, { params: urlParams })
    return response.loans;
  }
  async getRequest(id: string): Promise<Request> {
    return await this.get<Request>(`/circulation/requests/${encodeURIComponent(id)}`)
  }
  async getRequestQueueLength(item: PatronItem): Promise<number> {
    let queue;
    if (item.itemId) {
      queue = await this.get<RequestQueueResponse>(`/circulation/requests/queue/item/${encodeURIComponent(item.itemId)}`)
    // title-level requests have an instanceId but no itemId
    } else if (item.instanceId) {
      queue = await this.get<RequestQueueResponse>(`/circulation/requests/queue/instance/${encodeURIComponent(item.instanceId)}`)
    }
    return queue?.totalRecords;
  }
}
