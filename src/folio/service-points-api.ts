import FolioAPI from "./folio-api.js"
import { ServicePoint, ServicePointDetails, CqlParams, Location, Library } from '../schema.js'

interface ServicePointsResponse {
  servicepoints: ServicePoint[]
}

export default class ServicePointsAPI extends FolioAPI {
  // Removing the individual getServicePoint by id method, since not used anywhere
  // And will be updated with upcoming pull requests
  // Parse the description string and add the resulting JSON object in the details filed
  addDetails(servicePoint: ServicePoint) {
    return {
      details: parseServicePointDetails(servicePoint),
      ...servicePoint
    }
  }

  // Add libraries and locations where this service point is the primary service point
  addLibraryLocationDetails(servicePoints: ServicePoint[], locationsHash: {}): ServicePoint[] {
    return servicePoints.map(servicePoint => {
      let servicePointId = servicePoint.id
      if(servicePointId in locationsHash) {
        let libraries = locationsHash[servicePointId]["libraries"]
        let locations = locationsHash[servicePointId]["locations"]
        servicePoint = this.addLibraryLocationDetailsForServicePoint(servicePoint, libraries, locations)
      }
      return servicePoint
    })
  }
  
  // Get a list of all service points along with the details information required for paging
  async getServicePoints(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<ServicePoint[]> {
    const urlParams = this.buildCqlQuery(params)
    const response = await this.get<ServicePointsResponse>(`/service-points`, { params: urlParams })
    //Trying out location info retrieval
    const locationsHash = await this.getLibrariesForServicePoints()
    return this.addLibraryLocationDetails(response.servicepoints.map(this.addDetails), locationsHash)
  }

  async getLibrariesForServicePoints() {
    const locations = await this.getAllLocations()
    const libraries = await this.getAllLibraries()

    // Retrieve a hash using library ids to point to library objects
    const libraryHash = this.parseLibraries(libraries)
    let locationsHash = this.parseLocations(locations)
    Object.entries(locationsHash).forEach(
      ([servicePointId, info]) => {
        let libraryIds:string[] = Array.from(info["libraryIds"].values())
        libraryIds.forEach(lId => {
          locationsHash[servicePointId]["libraries"].push(libraryHash[lId])
        })
      }
    )
    return locationsHash
  }

  // Add libraries and locations for an individual service point
  addLibraryLocationDetailsForServicePoint(servicePoint: ServicePoint, libraries:Library[], locations:Location[]): ServicePoint {
    servicePoint["details"] = {
      locations: locations,
      libraries: libraries, 
      ...servicePoint.details
    }
    return servicePoint
  }

  async getAllLocations(): Promise<Location[]> {
    const urlParams = this.buildCqlQuery({ params: { limit:500 } })
    const response =  await this.get<Location>(`/locations`, { params: urlParams })
    return response["locations"]
  }

  // Parse Locations to return hash by primary service point id with locations and libraries
  parseLocations(locations: Location[]) {
    let locationsHash = {}
    locations.forEach( loc => {
      if(! (loc.primaryServicePoint in locationsHash) ) {
        locationsHash[loc.primaryServicePoint] = {locations: [], libraryIds:new Set<String>, libraries:[]}
      }
      locationsHash[loc.primaryServicePoint].locations.push(loc)
      locationsHash[loc.primaryServicePoint].libraryIds.add(loc["libraryId"])
    })
    return locationsHash
  }

  async getAllLibraries(): Promise<Library[]> {
    const urlParams = this.buildCqlQuery({ params: { limit:500 } })
    const response =  await this.get<Library>(`/location-units/libraries`, { params: urlParams })
    return response["loclibs"]
  }

  parseLibraries(libraries: Library[]) {
    let libraryHash = {}
    libraries.forEach( lib => {
      libraryHash[lib.id] = lib
    })
    return libraryHash
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