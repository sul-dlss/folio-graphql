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

  // Get a list of all service points along with the details information required for paging
  async getServicePoints(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<ServicePoint[]> {
    // Unless the limit is being sent in as a parameter, pass in the max limit
    // We also want to retain any other parameters being sent through the query
    if(! ("params" in params && "limit" in params["params"])) {
      if(! ("params" in params)) {
        params["params"] = {"limit": ServicePointsAPI.maxQueryLimit}
      } else {
        params["params"]["limit"] = ServicePointsAPI.maxQueryLimit
      }
    }
    const urlParams = this.buildCqlQuery(params)
    const response = await this.get<ServicePointsResponse>(`/service-points`, { params: urlParams })
    return response.servicepoints.map(this.addDetails)
  }

  // Get the location associated with the service point
  async getLocationsForPrimaryServicePoint(servicePointId: string): Promise<Location[]> {
    const locationQuery = this.buildLocationQuery(servicePointId)
    const urlParams = this.buildCqlQuery({ params: { limit:ServicePointsAPI.maxQueryLimit, query: locationQuery} })
    const response =  await this.get<Location>(`/locations`, { params: urlParams })
    return response["locations"]
  }

  // Retrieve all locations which have this service point id associated
  // This does not single out primary service points, but will return any locations
  // with these associated service point ids in the servicePointIds field
  buildLocationQuery(servicePointId:string): string {
    return "servicePointIds==*\"" + servicePointId + "\"*"
  }

  // Get the library associated with the service point
  async getLibrariesForServicePoint(servicePointId: string): Promise<Library[]> {
    const locations = await this.getLocationsForPrimaryServicePoint(servicePointId)
    // if there are no locations, please return null
    if(locations.length < 1) return null
    // First, retrieve all the libraries with the ids from this set
    // Multiple locations may belong to the same library
    // Adding to a set will remove duplicates
    const libraryIds = new Set<string>(locations.map(location => {
      return location.libraryId
    }))
    // if there are no library ids, the following query would return all libraries
    if(libraryIds.size < 1) return null
    const libraryIdQuery = this.buildMultiLibraryQuery(libraryIds)
    const urlParams = this.buildCqlQuery({ params: { limit:ServicePointsAPI.maxQueryLimit, query:libraryIdQuery } })
    const response =  await this.get<Location>(`/location-units/libraries`, { params: urlParams })
    return response["loclibs"]
  }

  buildMultiLibraryQuery(locationIds:Set<string>): string {
    return "id=\"" + Array.from(locationIds.values()).join("\" OR id=\"") + "\""
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