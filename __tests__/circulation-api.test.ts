import fetchMock from 'jest-fetch-mock';
import { createDataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

// See https://s3.amazonaws.com/foliodocs/api/mod-circulation/p/circulation.html for response data
describe('CirculationAPI', () => {
    let CirculationAPI = createDataSources().circulation;

    beforeEach(() => {
        CirculationAPI = createDataSources().circulation;
    });

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

    describe('getOpenLoanForItem', () => {
        it('returns null when no itemId is passed', async () => {
            const result = await CirculationAPI.getOpenLoanForItem(null);
            expect(result).toEqual(null);
        });

        it('queries /circulation/loans filtered by itemId and open status', async () => {
            mockFolioResponse({
                "loans": [
                    { "id": "loan1", "itemId": "item-a", "dueDate": "2026-01-01T00:00:00Z" }
                ]
            });
            const result = await CirculationAPI.getOpenLoanForItem('item-a');
            const url = mockFolioRequestUrl();
            expect(url).toContainPath('/circulation/loans');
            expect(url).toContainPath('itemId=="item-a"');
            expect(url).toContainPath('status.name=="open"');
            expect(result).toEqual({ id: "loan1", itemId: "item-a", dueDate: "2026-01-01T00:00:00Z" });
        });

        it('returns null when the item has no open loan', async () => {
            mockFolioResponse({ "loans": [] });
            const result = await CirculationAPI.getOpenLoanForItem('item-a');
            expect(result).toBeNull();
        });

        it('batches concurrent lookups into one request with an OR clause', async () => {
            mockFolioResponse({
                "loans": [
                    { "id": "loan1", "itemId": "item-a", "dueDate": "2026-01-01T00:00:00Z" },
                    { "id": "loan2", "itemId": "item-c", "dueDate": "2026-02-02T00:00:00Z" }
                ]
            });
            const [a, b, c] = await Promise.all([
                CirculationAPI.getOpenLoanForItem('item-a'),
                CirculationAPI.getOpenLoanForItem('item-b'),
                CirculationAPI.getOpenLoanForItem('item-c'),
            ]);
            expect(fetchMock.mock.calls.length).toEqual(1);
            const url = mockFolioRequestUrl();
            expect(url).toContainPath('itemId=="item-a"');
            expect(url).toContainPath('itemId=="item-b"');
            expect(url).toContainPath('itemId=="item-c"');
            expect(a?.dueDate).toEqual('2026-01-01T00:00:00Z');
            expect(b).toBeNull();
            expect(c?.dueDate).toEqual('2026-02-02T00:00:00Z');
        });

        it('splits large batches so the CQL OR clause stays within URL limits', async () => {
            // 120 items should produce 3 batches (cap is 50/batch).
            const itemIds = Array.from({ length: 120 }, (_, i) => `item-${i}`);
            for (let i = 0; i < 3; i++) mockFolioResponse({ loans: [] });

            await Promise.all(itemIds.map((id) => CirculationAPI.getOpenLoanForItem(id)));
            expect(fetchMock.mock.calls.length).toEqual(3);
        });

        it('keeps the first open loan when an item has more than one', async () => {
            mockFolioResponse({
                "loans": [
                    { "id": "loan1", "itemId": "item-a", "dueDate": "2026-01-01T00:00:00Z" },
                    { "id": "loan2", "itemId": "item-a", "dueDate": "2026-05-05T00:00:00Z" }
                ]
            });
            const result = await CirculationAPI.getOpenLoanForItem('item-a');
            expect(result?.id).toEqual('loan1');
        });
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
