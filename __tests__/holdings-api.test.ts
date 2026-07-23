import fetchMock from 'jest-fetch-mock';
import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

// See https://s3.amazonaws.com/foliodocs/api/mod-inventory-storage/p/holdings-storage.html for response data
describe('HoldingsAPI', () => {
    let HoldingsAPI = dataSources.holdings;
    beforeEach(() => HoldingsAPI.clearLoaders());

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
            expect(mockFolioRequestUrl()).toContainPath('/holdings?query=(instanceId=="instanceId789"+)');
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

    describe('getBoundWithPartsByItemId', () => {
        it('returns an empty array when no itemId is passed', async () => {
            const result = await HoldingsAPI.getBoundWithPartsByItemId(null as unknown as string);
            expect(result).toEqual([]);
        });

        it('queries the bound-with-parts endpoint filtered by itemId', async () => {
            mockFolioResponse({
                "boundWithParts": [
                    { "id": "partId1", "itemId": "item-a", "holdingsRecordId": "hold-1" }
                ]
            });
            const result = await HoldingsAPI.getBoundWithPartsByItemId('item-a');
            const url = mockFolioRequestUrl();
            expect(url).toContainPath('/inventory-storage/bound-with-parts');
            expect(url).toContainPath('itemId=="item-a"');
            expect(result).toEqual([{ id: 'partId1', itemId: 'item-a', holdingsRecordId: 'hold-1' }]);
        });

        it('returns an empty array for items with no bound-with parts', async () => {
            mockFolioResponse({ "boundWithParts": [] });
            const result = await HoldingsAPI.getBoundWithPartsByItemId('item-a');
            expect(result).toEqual([]);
        });

        it('batches concurrent lookups into one request and groups by itemId', async () => {
            mockFolioResponse({
                "boundWithParts": [
                    { "id": "p1", "itemId": "item-a", "holdingsRecordId": "hold-1" },
                    { "id": "p2", "itemId": "item-a", "holdingsRecordId": "hold-2" },
                    { "id": "p3", "itemId": "item-c", "holdingsRecordId": "hold-3" }
                ]
            });
            const [a, b, c] = await Promise.all([
                HoldingsAPI.getBoundWithPartsByItemId('item-a'),
                HoldingsAPI.getBoundWithPartsByItemId('item-b'),
                HoldingsAPI.getBoundWithPartsByItemId('item-c'),
            ]);
            expect(fetchMock.mock.calls.length).toEqual(1);
            const url = mockFolioRequestUrl();
            expect(url).toContainPath('itemId=="item-a"');
            expect(url).toContainPath('itemId=="item-b"');
            expect(url).toContainPath('itemId=="item-c"');
            expect(a.map((p) => p.id)).toEqual(['p1', 'p2']);
            expect(b).toEqual([]);
            expect(c.map((p) => p.id)).toEqual(['p3']);
        });

        it('splits large batches so the CQL OR clause stays within URL limits', async () => {
            const ids = Array.from({ length: 120 }, (_, i) => `item-${i}`);
            for (let i = 0; i < 3; i++) mockFolioResponse({ boundWithParts: [] });
            await Promise.all(ids.map((id) => HoldingsAPI.getBoundWithPartsByItemId(id)));
            expect(fetchMock.mock.calls.length).toEqual(3);
        });
    });

    describe('getBoundWithHoldingsPerItem', () => {
        it('resolves parts to holdings records', async () => {
            mockFolioResponse({
                "boundWithParts": [
                    { "id": "partId1", "itemId": "item_id_1", "holdingsRecordId": "holdingsId123" }
                ]
            });
            mockFolioResponse({ "id": "holdingsId123" });

            const result = await HoldingsAPI.getBoundWithHoldingsPerItem('item_id_1');
            expect(result[0].id).toEqual('holdingsId123');
        });
    });
});
