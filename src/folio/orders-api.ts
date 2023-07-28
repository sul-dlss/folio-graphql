import FolioAPI from "./folio-api.js"
import { CqlParams, PoLine, PoLineCollection, Piece, PieceCollection, HoldingSummary, HoldingSummaryCollection } from '../schema'

export default class OrdersAPI extends FolioAPI {
  async getPoLine(id: string): Promise<PoLine> {
    const instance = await this.get<PoLine>(`/orders/order-lines/${encodeURIComponent(id)}`)
    return instance
  }

  async getPoLines(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<PoLine[]> {
    const urlParams = this.buildCqlQuery(params)
    if (!urlParams.has('limit')) urlParams.set('limit', '2147483647');

    const response = await this.get<PoLineCollection>(`/orders/order-lines`, { params: urlParams })
    return response.poLines || []
  }

  async getPieces(params: Partial<{ params: CqlParams, [key: string]: object | object[] | string | undefined }>): Promise<Piece[]> {
    const urlParams = this.buildCqlQuery(params)
    if (!urlParams.has('limit')) urlParams.set('limit', '2147483647');

    const response = await this.get<PieceCollection>(`/orders/pieces`, { params: urlParams })
    return response.pieces
  }

  async getHoldingSummaries(id: string): Promise<HoldingSummary[]> {
    const collection = await this.get<HoldingSummaryCollection>(`/orders/holding-summary/${encodeURIComponent(id)}`)

    return collection.holdingSummaries;
  }
}
