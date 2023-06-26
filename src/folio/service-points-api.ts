import FolioAPI from "./folio-api.js"
import { ServicePoint, ServicePointDetails, CqlParams } from '../schema.js'

interface ServicePointsResponse {
  servicepoints: ServicePoint[]
}

export default class ServicePointsAPI extends FolioAPI {
  // Get an individual service point using the id
  async getServicePoint(id: string): Promise<ServicePoint> {
    const servicePoint = await this.get<ServicePoint>(`/service-points/${encodeURIComponent(id)}`)
    return this.addDetails(servicePoint)
  }

  // Parse the description string and add the resulting JSON object in the details filed
  addDetails(servicePoint: ServicePoint) {
    return {
      details: parseServicePointDetails(servicePoint),
      ...servicePoint
    }
  }

  // Get a list of all service points along with the details information required for paging
  async getServicePoints(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<ServicePoint[]> {
    const urlParams = this.buildCqlQuery(params)
    const response = await this.get<ServicePointsResponse>(`/service-points`, { params: urlParams })
    return  response.servicepoints.map(this.addDetails)
  }
}

// Parse JSON in the description field into a typed ServicePointDetails object.
// FOLIO stores this field as a string; we use it to store extra metadata about
// the service point for requests configuration.
// If the description field is not empty and can be parsed as JSON, we wish to return the JSON object
// In case a regular string is added to the description field, we also wish to return it in the "notes" key
function parseServicePointDetails(servicePoint: ServicePoint): ServicePointDetails {
  const description = servicePoint.description
  try {
    return description ? JSON.parse(description) as ServicePointDetails : null
  } catch(e) {
    return description ? {"notes": description} as ServicePointDetails : null
  }
}