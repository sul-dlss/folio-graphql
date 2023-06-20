import FolioAPI from "./folio-api.js"
import { ServicePoint, ServicePointDetails } from '../schema.js'

export default class ServicePointsAPI extends FolioAPI {
  async getServicePoint(id: string): Promise<ServicePoint> {
    const servicePoint = await this.get<ServicePoint>(`/service-points/${encodeURIComponent(id)}`)
    return {
      details: parseServicePointDetails(servicePoint),
      ...servicePoint
    }
  }
}

// Parse JSON in the description field into a typed ServicePointDetails object.
// FOLIO stores this field as a string; we use it to store extra metadata about
// the service point for requests configuration.
function parseServicePointDetails(servicePoint: ServicePoint): ServicePointDetails {
  return JSON.parse(servicePoint.description) as ServicePointDetails
}
