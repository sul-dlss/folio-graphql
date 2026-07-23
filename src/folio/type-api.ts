import FolioAPI from "./folio-api.js"
// KeyValueCache is the type of Apollo server's default cache
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';

export default class TypeAPI extends FolioAPI {
  private typeCache: Map<string, Promise<Map<string, any>>>

  constructor(options: { token: string, cache?: KeyValueCache, typeCache?: Map<string, Promise<Map<string, any>>>, fetch?: any }) {
    super(options)
    this.typeCache = options.typeCache;
  }

  async getById<Type>(path: string, { key = undefined }: Partial<{ key: string }>, id: string): Promise<Type> {
    const map = await this.getMapFor<Type>(path, { key });

    return map.get(id);
  }

  async getByIds<Type>(path: string, { key = undefined }: Partial<{ key: string }>, ids: string[]): Promise<Type[]> {
    const map = await this.getMapFor<Type>(path, { key });

    return ids.map(id => map.get(id));
  }

  // For tests: reset the per-request cache on the shared test instance.
  clearCache(): void {
    this.typeCache?.clear()
  }

  async getMapFor<Type>(path: string, { key = undefined }: Partial<{ key: string }>): Promise<Map<string, Type>> {
    const cached = this.typeCache?.get(path)
    if (cached) return cached

    const pending = this.fetchMapFor<Type>(path, { key })
    this.typeCache?.set(path, pending)
    // If the fetch rejects, drop the poisoned entry so subsequent lookups can
    // retry rather than replaying the same failure for the rest of the request.
    pending.catch(() => this.typeCache?.delete(path))

    return pending
  }

  private async fetchMapFor<Type>(path: string, { key = undefined }: Partial<{ key: string }>): Promise<Map<string, Type>> {
    const types = await this.get<Type[]>(`/${path}`, { params: { limit: '2147483647' }})

    return types[key || this.camelize(path)].reduce((map, obj) => {
      map.set(obj.id, obj)
      return map
    }, new Map())
  }

  async getValuesFor<Type>(path: string, { key = undefined }: Partial<{ key: string }>): Promise<Type[]> {
    return Array.from((await this.getMapFor<Type>(path, { key })).values());
  }

  camelize(str: string) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/[\s_-]+/g, '');
  }
}
