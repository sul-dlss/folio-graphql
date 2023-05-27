import config from "config"
import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest"
// KeyValueCache is the type of Apollo server's default cache
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';
import { CqlParams } from '../schema'

export default class FolioAPI extends RESTDataSource {
  override baseURL = config.get("folio.baseUrl") as string

  // send these headers by default on every request
  override willSendRequest(path, request: AugmentedRequest) {
    if (this.token) request.headers["X-Okapi-Token"] = this.token
    request.headers["X-Okapi-Tenant"] = config.get("folio.tenant")
    request.headers["User-Agent"] = "FolioApiClient"
    request.headers["Accept"] = "application/json, text/plain"
    request.headers["Content-Type"] = "application/json"
  }

  private token: string
  private refreshToken: string

  constructor(options: { token: string, cache: KeyValueCache }) {
    super(options)
    this.token = options.token
  }

  buildCqlQuery({ params, ...rest }: Partial<{ params: CqlParams, [key: string]: unknown}>): URLSearchParams {
    const urlParams = new URLSearchParams()
    let cqlQuery = ""

    for (const [key, value] of Object.entries(rest)) {
      if (cqlQuery.length > 0) {
        cqlQuery += " AND "
      }

      if (Array.isArray(value)) {
        cqlQuery += `(${value.map((v: string) => `${key}==${v}`).join(" OR ")} )`
      } else {
        cqlQuery += `${key}=="${value}"`
      }
    }

    if (params?.query) {
      if (cqlQuery.length > 0) {
        cqlQuery = `(${cqlQuery}) AND ${params.query}`
      } else {
        cqlQuery = params.query
      }
    }

    if (params?.sortby) cqlQuery += ` sortby ${params.sortby}`

    if (cqlQuery.length > 0) { urlParams.set('query', cqlQuery) }
    if (params?.limit) urlParams.set('limit', params.limit.toString())
    if (params?.offset) urlParams.set('offset', params.offset.toString())

    return urlParams
  }
}
