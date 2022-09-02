import FolioAPI from "./folio-api.js"
import { User } from './schema'

export default class UsersAPI extends FolioAPI {
  async getUser(id: string): Promise<User> {
    return this.get<User>(`/users/${encodeURIComponent(id)}`)
  }
}
