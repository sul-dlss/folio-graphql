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

  async getItemQueueLength(id: string): Promise<number> {
    const queue = await this.get<RequestQueueResponse>(`/circulation/requests/queue/item/${encodeURIComponent(id)}`);
    return queue?.totalRecords;
  }

  async getInstanceQueueLength(id: string): Promise<number> {
    const queue = await this.get<RequestQueueResponse>(`/circulation/requests/queue/instance/${encodeURIComponent(id)}`);
    return queue?.totalRecords;
  }

  async getRequestQueueLength(item: PatronItem): Promise<number> {
    if (item.itemId) {
      return this.getItemQueueLength(item.itemId);
    // title-level requests have an instanceId but no itemId
    } else if (item.instanceId) {
      return this.getInstanceQueueLength(item.instanceId);
    }
  }
}
