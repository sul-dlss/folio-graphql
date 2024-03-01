import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

// See https://s3.amazonaws.com/foliodocs/api/mod-inventory-storage/p/item-storage.html for response data
describe('ItemsAPI', () => {
  let ItemsAPI = dataSources.items;

  describe('getItem', () => {
    it('queries the expected URL', async () => {
      mockFolioResponse({
        "id": "itemId123",
      });
      const result = await ItemsAPI.getItem('itemId123');
      expect(mockFolioRequestUrl()).toContainPath('/item-storage/items/itemId123');
      expect(result.id).toEqual('itemId123');
    });
  });

  describe('getByHoldingsRecordId', () => {
    it('calls getItems with holdingsRecordId', async () => {
      const getItemsSpy = jest.spyOn(ItemsAPI, 'getItems');
      await ItemsAPI.getByHoldingsRecordId('holdingsId456', {});
      expect(getItemsSpy).toHaveBeenCalledWith({ holdingsRecordId: 'holdingsId456' });
    });
  });

  describe('getByInstanceId', () => {
    it('calls getItems with holdingsRecordId', async () => {
      const getItemsSpy = jest.spyOn(ItemsAPI, 'getItems');
      await ItemsAPI.getByInstanceId('instanceId789', {});
      expect(getItemsSpy).toHaveBeenCalledWith({ 'holdingsRecords.instanceId': 'instanceId789' });
    });
  });

  describe('getItems', () => {
    beforeEach(() => {
      mockFolioResponse({
        "items": [
          {
            "id": "item1",
            "holdingsRecordId": "holdingsId456",
          },
          {
            "id": "item2",
            "holdingsRecordId": "holdingsId456",
          }
        ]
      });
    });
    it('queries the expected URL with default params and returns items', async () => {
      const result = await ItemsAPI.getItems({});
      expect(mockFolioRequestUrl()).toContainPath('/item-storage/items?limit=2147483647');
      expect(result.length).toEqual(2);
      expect(result[0].id).toEqual('item1');
    });

    it('handles query params properly when provided', async () => {
      await ItemsAPI.getItems({ 'holdingsRecords.instanceId': 'instanceId789' });
      expect(mockFolioRequestUrl()).toContainPath('item-storage/items?query=holdingsRecords.instanceId=="instanceId789"');
    })
  });
})
