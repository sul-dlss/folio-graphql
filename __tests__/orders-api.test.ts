import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

// See https://s3.amazonaws.com/foliodocs/api/mod-orders/p/order-lines.html for response data
describe('OrdersAPI', () => {
    let OrdersAPI = dataSources.orders;

    describe('getPoLine', () => {
        it('queries the expected URL', async () => {
            mockFolioResponse({
                "id": "poLineId123",
            });
            const result = await OrdersAPI.getPoLine('poLineId123');
            expect(mockFolioRequestUrl()).toContainPath('/orders/order-lines/poLineId123');
            expect(result.id).toEqual('poLineId123');
        });
    });
    describe('getPoLines', () => {
        it('queries the expected URL and returns poLines', async () => {
            mockFolioResponse({
                "poLines": [
                    {
                        "id": "poLine1",
                        "instanceId": "instance1"
                    },
                    {
                        "id": "poLine2",
                        "instanceId": "instance2"
                    }
                ]
            });
            const result = await OrdersAPI.getPoLines({ 'instanceId': ['instanceId456'] })
            expect(mockFolioRequestUrl()).toContainPath('/orders/order-lines?query=(instanceId=="instanceId456"+)&limit=2147483647');
            expect(result.length).toEqual(2);
            expect(result[0].id).toEqual('poLine1');
        });
        it('returns an empty array if no poLines are found', async () => {
            mockFolioResponse({});
            const result = await OrdersAPI.getPoLines({ 'instanceId': ['instanceId456'] })
            expect(result).toBeInstanceOf(Array);
            expect(result.length).toEqual(0);
        });
    });
    // See https://s3.amazonaws.com/foliodocs/api/mod-orders/p/pieces.html
    describe('getPieces', () => {
        it('queries the expected URL and returns pieces', async () => {
            mockFolioResponse({
                "pieces":
                  [
                   {
                      "id": "piece1"
                   }]
                });
            const result = await OrdersAPI.getPieces({ 'poLineId': ['poLine1'] })
            expect(mockFolioRequestUrl()).toContainPath('/orders/pieces?query=(poLineId=="poLine1"+)&limit=2147483647');
            expect(result[0].id).toEqual('piece1');
        });
    });
    // See https://s3.amazonaws.com/foliodocs/api/mod-orders/p/holding-summary.html#orders_holding_summary__id__get
    describe('getHoldingSummaries', () => {
        it('queries the expected URL and returns holdingSummaries', async () => {
            mockFolioResponse({
                "holdingSummaries": [
                  {
                    "poLineId": "poLine1"
                  }
                ]
              });
            const result = await OrdersAPI.getHoldingSummaries('holdingId1')
            expect(mockFolioRequestUrl()).toContainPath('/orders/holding-summary/holdingId1');
            expect(result[0].poLineId).toEqual('poLine1');
        });
    });
});
