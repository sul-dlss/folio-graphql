import FolioAPI from "./folio-api.js"
import { User, Block } from './schema'

export default class UsersAPI extends FolioAPI {
  async getUser(id: string): Promise<User> {
    return this.get<User>(`/users/${encodeURIComponent(id)}`)
  }

  async getBlocks(id: string): Promise<any> {
    const blocks = await this.get<Block[]>(`/automated-patron-blocks/${encodeURIComponent(id)}`)

    return blocks['automatedPatronBlocks']
  }
}
