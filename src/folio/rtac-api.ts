import FolioAPI from "./folio-api.js"
import { RtacHoldingsBatch, RtacHoldings, RtacHolding } from "../schema"

export default class RtacApi extends FolioAPI {
  // Request real-time availability info for all of the items for a given instance ID
  async getAvailability(
    instanceId: string,
    fullPeriodicals: boolean = true
  ): Promise<Array<RtacHolding>> {
    const response = await this.getAvailabilityBatch([instanceId], fullPeriodicals)
    return response[0].holdings
  }

  // Request real-time availability info for all of the items for each of the provided instance IDs
  async getAvailabilityBatch(
    instanceIds: string[],
    fullPeriodicals: boolean = true
  ): Promise<RtacHoldings[]> {
    const response = await this.post<RtacHoldingsBatch>(`/rtac-batch`, {
      body: {
        instanceIds,
        fullPeriodicals,
      },
    })
    // structure is nested: { holdings: [ items: { holdings: [ ] } ] }
    return response.holdings
  }
}
