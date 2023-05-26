import { WillSendRequestOptions } from '@apollo/datasource-rest';
import config from 'config';
import OkapiAPI from "./okapi-api.js"

export default class AuthnAPI extends OkapiAPI {
  // send these headers by default on every request
  override willSendRequest(request: WillSendRequestOptions) {
    request.headers["X-Okapi-Tenant"] = config.get("folio.tenant")
    request.headers["User-Agent"] = "FolioApiClient"
    request.headers["Accept"] = "application/json, text/plain"
    request.headers["Content-Type"] = "application/json"
  }

  async login(username: string, password: string) {
    return this.post("authn/login", {
      body: {
        username,
        password,
      }
    })
  }
}
