import FolioAPI from "./folio-api.js"
import { ServicePoint } from './schema'

export default class LocationsAPI extends FolioAPI {
  async getLocation(id: string): Promise<ServicePoint> {
    return this.get<ServicePoint>(`/service-points/${encodeURIComponent(id)}`)
  }
}
