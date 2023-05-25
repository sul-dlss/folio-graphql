import FolioAPI from "./folio-api.js"
import { User, Block, CqlParams, ManualBlock, Account, ProxyFor } from './schema'

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

  async getProxiesFor(id: string): Promise<ProxyFor[]> {
    return this.getProxyFor({ 'proxyUserId': [id] })
  }

  async getProxiesOf(id: string): Promise<ProxyFor[]> {
    return this.getProxyFor({ 'userId': [id] })
  }

  async getProxyFor(params: Partial<{ params: CqlParams, [key: string]: object | object[] | undefined }>): Promise<ProxyFor[]> {
    const urlParams = this.buildCqlQuery(params)

    const response = await this.get<ProxyFor[]>(`/proxiesfor`, { params: urlParams })
    return response['proxiesFor']
  }
}
