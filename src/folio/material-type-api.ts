import FolioAPI from "./folio-api.js"
import { CqlParams, MaterialType } from '../schema.js'

interface MaterialTypesResponse {
  mtypes: MaterialType[]
}

export default class MaterialTypesAPI extends FolioAPI {
  async getMaterialTypes(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<MaterialType[]> {
    const urlParams = this.buildCqlQuery(params)

    const response = await this.get<MaterialTypesResponse>(`/material-types`, { params: urlParams })
    return response.mtypes
  }
}
