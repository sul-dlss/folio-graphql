import FolioAPI from "./folio-api.js"
// KeyValueCache is the type of Apollo server's default cache
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';

export default class TypeAPI extends FolioAPI {
  private typeCache: Map<string, Map<string, any>>

  constructor(options: { token: string, cache?: KeyValueCache, typeCache?: Map<string, Map<string, any>>, fetch?: any }) {
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

  async getMapFor<Type>(path: string, { key = undefined }: Partial<{ key: string }>): Promise<Map<string, Type>> {
    if (this.typeCache?.has(path)) return this.typeCache.get(path)

    const types = await this.get<Type[]>(`/${path}`, { params: { limit: '2147483647' }})

    const map = types[key || this.camelize(path)].reduce((map, obj) => {
      map.set(obj.id, obj)
      return map
    }, new Map())

    this.typeCache?.set(path, map)

    return map
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
