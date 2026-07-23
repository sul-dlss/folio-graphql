import DataLoader from "dataloader"
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
  // Per-request DataLoader. CirculationAPI is instantiated fresh per GraphQL
  // request (see server.ts context builder), so this loader batches Item.dueDate
  // lookups within a single request and does not leak state between requests.
  private readonly openLoanByItemIdLoader = this.buildOpenLoanByItemIdLoader()

  private buildOpenLoanByItemIdLoader() {
    return new DataLoader<string, Loan | null>(
      (itemIds) => this.batchOpenLoansByItemId(itemIds as string[]),
      // Cap batch size so the resulting CQL `itemId==(...)` OR clause stays
      // under URL / query-complexity limits imposed by FOLIO's proxy and
      // mod-circulation.
      { maxBatchSize: 50 },
    )
  }

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

  // Returns the open loan for an item, if any. Batched via DataLoader so that
  // N per-item resolver calls in one GraphQL request collapse to a single
  // /circulation/loans query with an itemId==(...) OR clause.
  async getOpenLoanForItem(itemId: string): Promise<Loan | null> {
    if (!itemId) return null
    return this.openLoanByItemIdLoader.load(itemId)
  }

  private async batchOpenLoansByItemId(itemIds: string[]): Promise<(Loan | null)[]> {
    const loans = await this.getLoans({ itemId: itemIds, "status.name": "open" })
    const loanByItemId = new Map<string, Loan>()
    for (const loan of loans) {
      // If an item somehow has more than one open loan, keep the first (matches
      // the pre-batching resolver's `loans[0]` behavior).
      if (!loanByItemId.has(loan.itemId)) loanByItemId.set(loan.itemId, loan)
    }
    return itemIds.map((id) => loanByItemId.get(id) ?? null)
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
