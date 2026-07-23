import fetchMock from 'jest-fetch-mock';
import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

// See https://s3.amazonaws.com/foliodocs/api/mod-inventory-storage/p/holdings-storage.html for response data
describe('HoldingsAPI', () => {
    let HoldingsAPI = dataSources.holdings;

    describe('getHoldingsRecord', () => {
        beforeEach(() => HoldingsAPI.clearLoaders());

        it('returns null when no id is passed', async () => {
            const result = await HoldingsAPI.getHoldingsRecord(null as unknown as string);
            expect(result).toBeNull();
        });

        it('queries the batch endpoint filtered by id', async () => {
            mockFolioResponse({
                "holdingsRecords": [{ "id": "holdingsId123" }]
            });
            const result = await HoldingsAPI.getHoldingsRecord('holdingsId123');
            const url = mockFolioRequestUrl();
            expect(url).toContainPath('/holdings-storage/holdings');
            expect(url).toContainPath('id=="holdingsId123"');
            expect(result?.id).toEqual('holdingsId123');
        });

        it('returns null for ids missing from the batch response', async () => {
            mockFolioResponse({ "holdingsRecords": [] });
            const result = await HoldingsAPI.getHoldingsRecord('missing');
            expect(result).toBeNull();
        });

        it('batches concurrent lookups into one request with an OR clause', async () => {
            mockFolioResponse({
                "holdingsRecords": [
                    { "id": "holdings-a" },
                    { "id": "holdings-c" }
                ]
            });
            const [a, b, c] = await Promise.all([
                HoldingsAPI.getHoldingsRecord('holdings-a'),
                HoldingsAPI.getHoldingsRecord('holdings-b'),
                HoldingsAPI.getHoldingsRecord('holdings-c'),
            ]);
            expect(fetchMock.mock.calls.length).toEqual(1);
            const url = mockFolioRequestUrl();
            expect(url).toContainPath('id=="holdings-a"');
            expect(url).toContainPath('id=="holdings-b"');
            expect(url).toContainPath('id=="holdings-c"');
            expect(a?.id).toEqual('holdings-a');
            expect(b).toBeNull();
            expect(c?.id).toEqual('holdings-c');
        });

        it('splits large batches so the CQL OR clause stays within URL limits', async () => {
            const ids = Array.from({ length: 120 }, (_, i) => `h-${i}`);
            for (let i = 0; i < 3; i++) mockFolioResponse({ holdingsRecords: [] });
            await Promise.all(ids.map((id) => HoldingsAPI.getHoldingsRecord(id)));
            expect(fetchMock.mock.calls.length).toEqual(3);
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

    describe('getBoundWithHoldingsPerItem', () => {
        beforeEach(() => HoldingsAPI.clearLoaders());

        it('queries the expected URL', async () => {
            mockFolioResponse({
                "boundWithParts": [
                  {
                    "id": "partId1",
                    "holdingsRecordId": "holdingsId123"
                  }],
              });

              mockFolioResponse({
                "holdingsRecords": [{ "id": "holdingsId123" }]
              });

            const result = await HoldingsAPI.getBoundWithHoldingsPerItem('item_id_1');
            expect(mockFolioRequestUrl()).toContainPath('/inventory-storage/bound-with-parts?query=itemId=="item_id_1"');
            expect(result[0].id).toEqual('holdingsId123')
        });
    });
});
