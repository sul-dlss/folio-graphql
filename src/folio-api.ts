import config from "config"
import { RESTDataSource, WillSendRequestOptions } from "@apollo/datasource-rest"

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
}
