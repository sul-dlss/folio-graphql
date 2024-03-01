import config from 'config';
import { dataSources, mockFolioResponse } from './setupJest';

describe('OkapiAPI', () => {
  it('should fetch the correct version', async () => {
    const OkapiAPI = dataSources.okapi;
    const configBaseURL = config.get('folio.baseUrl') as string;
    mockFolioResponse({ version: '1.0.0' });

    const result = await OkapiAPI.getVersion();
    expect(OkapiAPI.baseURL).toBe(configBaseURL);
    expect(result).toEqual({ version: '1.0.0' });
  });
});
