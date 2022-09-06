import config from "config"
import { RESTDataSource, WillSendRequestOptions } from "@apollo/datasource-rest"
import { CqlParams } from './schema'

export default class FolioAPI extends RESTDataSource {
  override baseURL = config.get("folio.baseUrl") as string

  // send these headers by default on every request
  override willSendRequest(request: WillSendRequestOptions) {
    if (this.token) request.headers["X-Okapi-Token"] = this.token
    request.headers["X-Okapi-Tenant"] = config.get("folio.tenant")
    request.headers["User-Agent"] = "FolioApiClient"
    request.headers["Accept"] = "application/json, text/plain"
    request.headers["Content-Type"] = "application/json"
  }

  private token: string
  private refreshToken: string

  constructor(options = {}) {
    super(options)

    this.post("authn/login", {
      body: {
        username: config.get("folio.username"),
        password: config.get("folio.password"),
      }
    })
      .then(response => {
        this.token = response.okapiToken
        this.refreshToken = response.refreshToken
      })
      .catch(console.error)
  }

  buildCqlQuery({ params, ...rest }: Partial<{ params: CqlParams, [key: string]: Object | Object[] | undefined }>): URLSearchParams {
    let urlParams = new URLSearchParams()
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
