import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

describe('ServicePointsAPI', () => {
  let ServicePointsAPI = dataSources.servicepoints;

  describe('getServicePoints', () => {
    beforeEach(() => {
      mockFolioResponse({
        "servicepoints": [
          {
            "name": "Circ Desk 1",
            "code": "cd1",
            "description": '{"key1": "value1"}'
          },
          {
            "name": "Circ Desk 2",
            "code": "cd2",
            "description": "A regular string note"
          }
        ]
      });
    });
    it('queries the expected URL and returns servicepoints', async () => {
      const result = await ServicePointsAPI.getServicePoints({});
      expect(mockFolioRequestUrl()).toContainPath('/service-points?limit=2147483647');
      // the method returns the array within servicepoints key
      expect(result[0].name).toEqual('Circ Desk 1');
    });
    it('returns the expected values for description', async () => {
      const result = await ServicePointsAPI.getServicePoints({});
      expect(result[0].details).toEqual({ key1: "value1" });
      expect(result[1].details).toEqual({ notes: "A regular string note" });
    });
  });
  describe('getByCode', () => {
    it('queries the expected URL and returns servicepoint', async () => {
      mockFolioResponse({
        "servicepoints": [
          {
            "code": "cd1",
          }
        ]
      });
      const result = await ServicePointsAPI.getByCode('cd1');
      expect(mockFolioRequestUrl()).toContainPath('/service-points?query=(code=="cd1"+)&limit=2147483647');
      // the method returns the array within servicepoints key
      expect(result.code).toEqual('cd1');
    });
  });
});
