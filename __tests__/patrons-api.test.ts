import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

// See https://s3.amazonaws.com/foliodocs/api/mod-patron/p/patron.html for response data
describe('PatronsAPI', () => {
  let PatronsAPI = dataSources.patrons;
  
  describe('getPatron', () => {
    it('queries the expected URL', async () => {
      mockFolioResponse({
        "id": "patronId123",
      });
      const result = await PatronsAPI.getPatron('patronId123');
      expect(mockFolioRequestUrl()).toContainPath('/patron/account/patronId123?includeLoans=true&includeHolds=true&includeCharges=true');
      expect(result.id).toEqual('patronId123');
    });
  });
})
