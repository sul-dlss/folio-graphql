import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

// See https://s3.amazonaws.com/foliodocs/api/mod-inventory-storage/p/holdings-storage.html for response data
describe('HoldingsAPI', () => {
    let HoldingsAPI = dataSources.holdings;

    describe('getHoldingsRecord', () => {
        it('queries the expected URL', async () => {
            mockFolioResponse({
                "id": "holdingsId123",
            });

            const result = await HoldingsAPI.getHoldingsRecord('holdingsId123');
            expect(mockFolioRequestUrl()).toContainPath('/holdings-storage/holdings/holdingsId123');
            expect(result.id).toEqual('holdingsId123');
        });
    });

    describe('getByInstanceId', () => {
        it('calls getHoldingsRecords with instanceId', async () => {
            const getHoldingsRecordsSpy = jest.spyOn(HoldingsAPI, 'getHoldingsRecords');
            await HoldingsAPI.getByInstanceId('instanceId789', {});
            expect(getHoldingsRecordsSpy).toHaveBeenCalledWith({ instanceId: ['instanceId789'] });
        });
    });

    describe('getHoldingsRecords', () => {
        it('queries the expected URL with default params and returns holdings records', async () => {
            mockFolioResponse({
                "holdingsRecords": [
                    {
                        "id": "holdings1",
                        "instanceId": "instanceId789",
                    },
                    {
                        "id": "holdings2",
                        "instanceId": "instanceId789",
                    }
                ]
            });
            const result = await HoldingsAPI.getHoldingsRecords({});
            expect(mockFolioRequestUrl()).toContainPath('/holdings-storage/holdings?limit=2147483647');
            expect(result.length).toEqual(2);
            expect(result[0].id).toEqual('holdings1');
        });

        it('handles query params properly when provided', async () => {
            await HoldingsAPI.getHoldingsRecords({ instanceId: ['instanceId789'] });
            expect(mockFolioRequestUrl()).toContainPath('/holdings?query=(instanceId==instanceId789+)');
        });
    });

    // See https://s3.amazonaws.com/foliodocs/api/mod-inventory-storage/p/bound-with-part.html for response data
    describe('getBoundWithPart', () => {
        it('queries the expected URL', async () => {
            mockFolioResponse({
                "boundWithParts": [
                  {
                    "id": "partId1",
                  }]
              });

            const result = await HoldingsAPI.getBoundWithPart('holdingsId1');
            expect(mockFolioRequestUrl()).toContainPath('/inventory-storage/bound-with-parts?query=holdingsRecordId=="holdingsId1"');
            // the method should return the first boundWithPart
            expect(result.id).toEqual('partId1');
        });
    });

    describe('getBoundWithHoldingsPerItem', () => {
        it('queries the expected URL', async () => {
            mockFolioResponse({
                "boundWithParts": [
                  {
                    "id": "partId1",
                    "holdingsRecordId": "holdingsId123"
                  }],
              });

              mockFolioResponse({
                "id": "holdingsId123",
              });

            const result = await HoldingsAPI.getBoundWithHoldingsPerItem('item_id_1');
            expect(mockFolioRequestUrl()).toContainPath('/inventory-storage/bound-with-parts?query=itemId=="item_id_1"');
            expect(result[0].id).toEqual('holdingsId123')
        });
    });
});
