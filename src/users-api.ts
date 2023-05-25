import FolioAPI from "./folio-api.js"
import { User, Block, CqlParams, ManualBlock, Account } from './schema'

export default class UsersAPI extends FolioAPI {
  async getUser(id: string): Promise<User> {
    return this.get<User>(`/users/${encodeURIComponent(id)}`)
  }

  async getBlocks(id: string): Promise<any> {
    const blocks = await this.get<Block[]>(`/automated-patron-blocks/${encodeURIComponent(id)}`)

    return blocks['automatedPatronBlocks']
  }

  async getManualBlocks(id: string): Promise<any> {
    const urlParams = this.buildCqlQuery({ userId: id })
    const blocks = await this.get<ManualBlock[]>(`/manualblocks`, { params: urlParams })

    return blocks['manualblocks']
  }

  async getAccounts(userId: string): Promise<any> {
    const urlParams = this.buildCqlQuery({ userId: userId })
    const blocks = await this.get<Account[]>(`/accounts`, { params: urlParams })

    return blocks['accounts']
  }
}
