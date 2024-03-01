import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

// See https://s3.amazonaws.com/foliodocs/api/mod-circulation/p/circulation.html for response data
describe('CirculationAPI', () => {
    let CirculationAPI = dataSources.circulation;

    describe('getLoan', () => {
        it('queries the expected URL', async () => {
            mockFolioResponse({ 
                "id": "123" 
            });
            const result = await CirculationAPI.getLoan('123');
            expect(mockFolioRequestUrl()).toContainPath('/circulation/loans/123');
            expect(result.id).toEqual('123');
        });

        it('returns null when no id is passed', async () => {
            const result = await CirculationAPI.getLoan(null);
            expect(result).toEqual(null);
        })
    });

    describe('getLoans', () => {
        it('queries the expected URL with params if passed', async () => {
            mockFolioResponse({
                "loans": [
                    {
                        "id": "loandId1",
                    }
                ]
            });
            const result = await CirculationAPI.getLoans({ params: { limit: 1 } });
            expect(mockFolioRequestUrl()).toContainPath('circulation/loans?limit=1');
            // the method should return an array of loans, not the object with the loan key
            expect(result).toEqual([{ "id": "loandId1" }]);
        });

        it('provides default limit if none is set', async () => {
            await CirculationAPI.getLoans({});
            expect(mockFolioRequestUrl()).toContainPath('circulation/loans?limit=2147483647');
        })
    });

    describe('getRequest', () => {
        it('queries the expected URL', async () => {
            mockFolioResponse({
                "id": "123"
            });
            const result = await CirculationAPI.getRequest('123');
            expect(mockFolioRequestUrl()).toContainPath('/circulation/requests/123');
            expect(result.id).toEqual('123');
        })
    });

    describe('getRequestQueueLength', () => {
        it('handles item-level requests', async () => {
            mockFolioResponse({
                "totalRecords": 1
            });
            const result = await CirculationAPI.getRequestQueueLength({ itemId: '123', instanceId: '456' });
            expect(mockFolioRequestUrl()).toContainPath('/circulation/requests/queue/item/123');
            expect(result).toEqual(1);
        })

        it('handles title-level requests', async () => {
            mockFolioResponse({
                "totalRecords": 1
            });
            const result = await CirculationAPI.getRequestQueueLength({ itemId: null, instanceId: '456' });
            expect(mockFolioRequestUrl()).toContainPath('/circulation/requests/queue/instance/456');
            expect(result).toEqual(1);
        });
    })
});
