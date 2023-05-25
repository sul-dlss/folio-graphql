import FolioAPI from "./folio-api.js"

export default class TypeAPI extends FolioAPI {
  async getMapFor<Type>(path: string, { key = undefined, cache }: Partial<{ key: string, cache: Map<string, Map<string, any>> }>): Promise<Map<string, Type>> {
    if (cache.has(path)) return cache.get(path)

    const types = await this.get<Type[]>(`/${path}`, { params: { limit: '2147483647' }})

    const map = types[key || this.camelize(path)].reduce((map, obj) => {
      map.set(obj.id, obj)
      return map
    }, new Map())

    cache.set(path, map)

    return map
  }

  async getValuesFor<Type>(path: string, { key = undefined, cache }: Partial<{ key: string, cache: Map<string, Map<string, any>> }>): Promise<Type[]> {
    return Array.from((await this.getMapFor<Type>(path, { key, cache })).values());
  }

  camelize(str: string) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/[\s_-]+/g, '');
  }
}
