import FolioAPI from "./folio-api.js"
import { Location } from './schema'

export default class LocationsAPI extends FolioAPI {
  async getLocation(id: string): Promise<Location> {
    return this.get<Location>(`/service-points/${encodeURIComponent(id)}`)
  }
}
