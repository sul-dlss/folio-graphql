import { RESTDataSource } from '@apollo/datasource-rest';
import { Patron } from './schema';

export class PatronsAPI extends RESTDataSource {
  override baseURL = 'https://app_mylibrary:MyAccount_1n_foli0@okapi-test.stanford.edu/patron/account/';

  async getPatron(id: string): Promise<Patron> {
    return this.get<Patron>(encodeURIComponent(id));
  }
}
