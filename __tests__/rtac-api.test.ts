import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

describe('RtacApi', () => {
    let RtacApi = dataSources.rtac;

    beforeEach(() => {
        // structure is nested: { holdings: [ items: { holdings: [ ] } ] }
        // See https://s3.amazonaws.com/foliodocs/api/mod-rtac/r/rtac-batch.html#rtac_batch_post
        mockFolioResponse({
            holdings: [
                {
                    instanceId: 'instanceId1',
                    holdings: [
                        {
                            id: 'holding1',
                        }
                    ]
                }
            ]
        });
    });
    
    describe('getAvailability', () => {
        it('calls getAvailabilityBatch with the right params', async () => {
            let getAvailabilityBatchSpy = jest.spyOn(RtacApi, 'getAvailabilityBatch');
            await RtacApi.getAvailability('instanceId789', true);
            expect(getAvailabilityBatchSpy).toHaveBeenCalledWith(["instanceId789"], true);
        });
    });
    describe('getAvailabilityBatch', () => {
        it('queries the expected URL with default params and returns holdings', async () => {
            const result = await RtacApi.getAvailabilityBatch(["instanceId1"], true);
            expect(mockFolioRequestUrl()).toContainPath('/rtac-batch');
            expect(result).toEqual([{
                "holdings": [{
                    "id": "holding1",
                }],
                "instanceId": "instanceId1"
            }]);
        });
    });
});
