import FolioAPI from "./folio-api.js"
import { ServicePoint } from '../schema.js'

export default class ServicePointsAPI extends FolioAPI {
  async getServicePoint(id: string): Promise<ServicePoint> {
    return this.get<ServicePoint>(`/service-points/${encodeURIComponent(id)}`)
  }
}
