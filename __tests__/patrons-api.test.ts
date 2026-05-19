import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

// See https://s3.amazonaws.com/foliodocs/api/mod-patron/p/patron.html for response data
describe('PatronsAPI', () => {
  let PatronsAPI = dataSources.patrons;
  
  describe('getPatron', () => {
    it('queries the expected URL and defaults params to false if fields param array is empty', async () => {
      mockFolioResponse({
        "id": "patronId123",
      });
      const result = await PatronsAPI.getPatron('patronId123', []);
      expect(mockFolioRequestUrl()).toContainPath('/patron/account/patronId123?includeLoans=false&includeHolds=false&includeCharges=false');
      expect(result.id).toEqual('patronId123');
    });

    it('sets params to true when needed', async () => {
      mockFolioResponse({
        "id": "patronId123",
      });
      const result = await PatronsAPI.getPatron('patronId123', ['loans', 'holds']);
      expect(mockFolioRequestUrl()).toContainPath('/patron/account/patronId123?includeLoans=true&includeHolds=true&includeCharges=false');
      expect(result.id).toEqual('patronId123');
    });
  });
})
