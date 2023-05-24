import config from "config"
import { RESTDataSource } from "@apollo/datasource-rest"

export default class OkapiAPI extends RESTDataSource {
  override baseURL = config.get("folio.baseUrl") as string
}
