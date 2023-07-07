import FolioAPI from "./folio-api.js"
import { CqlParams, ServicePoint } from '../schema.js'

interface ServicePointsResponse {
  servicepoints: ServicePoint[]
}

export default class ServicePointsAPI extends FolioAPI {
  async getByCode(code: string): Promise<ServicePoint> {
    const servicePoints = await this.getServicePoints({ 'code': [code] })
    return servicePoints[0]
  }
  
  async getServicePoints(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<ServicePoint[]> {
    const urlParams = this.buildCqlQuery(params)

    const response = await this.get<ServicePointsResponse>(`/service-points`, { params: urlParams })
    return response.servicepoints
  }
}
