import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

describe('FeefinesAPI', () => {
    let FeefinesAPI = dataSources.feefines;

    describe('getFeeFine', () => {
        it('queries the expected URL', async () => {
            mockFolioResponse({
                "id": "feefineId123",
            });
            const result = await FeefinesAPI.getFeeFine('feefineId123');
            expect(mockFolioRequestUrl()).toContainPath('/feefines/feefineId123');
            expect(result.id).toEqual('feefineId123');
        });
    });
    describe('getFeeFineTypes', () => {
        it('queries the expected URL with params', async () => {
            mockFolioResponse({
                "feefines": [
                    {
                        "id": "type1",
                    }
                ]
            });
            const result = await FeefinesAPI.getFeeFineTypes({ params: { limit: 1 } });
            expect(mockFolioRequestUrl()).toContainPath('/feefines?limit=1');
            // the method should return an array of feefines, not the object with the feefine key
            expect(result).toEqual([{ "id": "type1" }]);
        });
        it('provides default limit if none is set', async () => {
            await FeefinesAPI.getFeeFineTypes({});
            expect(mockFolioRequestUrl()).toContainPath('/feefines?limit=2147483647');
        })
    });        
});
