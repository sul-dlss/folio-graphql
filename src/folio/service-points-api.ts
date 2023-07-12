import FolioAPI from "./folio-api.js"
import { ServicePoint, ServicePointDetails, CqlParams, Location, Library } from '../schema.js'

interface ServicePointsResponse {
  servicepoints: ServicePoint[]
}

export default class ServicePointsAPI extends FolioAPI {
  // This is the maximum also used in type-apis
  static maxQueryLimit = 2147483647
  // Removing the individual getServicePoint by id method, since not used anywhere
  // And will be updated with upcoming pull requests
  // Parse the description string and add the resulting JSON object in the details filed
  addDetails(servicePoint: ServicePoint) {
    return {
      details: parseServicePointDetails(servicePoint),
      ...servicePoint
    }
  }

  // In our data model, code should uniquely identify service point
  async getByCode(code: string): Promise<ServicePoint> {
    const servicePoints = await this.getServicePoints({ 'code': [code] })
    return servicePoints[0]
  }
  
  // Get a list of all service points along with the details information required for paging
  async getServicePoints(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<ServicePoint[]> {
    if(! ("params" in params) ) {
      params["params"] = {}
    }
    // Set limit to max number to all the parameters back
    params["params"]["limit"] = ServicePointsAPI.maxQueryLimit
    const urlParams = this.buildCqlQuery(params)
    const response = await this.get<ServicePointsResponse>(`/service-points`, { params: urlParams })
    return response.servicepoints.map(this.addDetails)
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