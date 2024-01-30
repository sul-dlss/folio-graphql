import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

describe('InstancesAPI', () => {
    let InstancesAPI = dataSources.instances;

    beforeEach(() => {
        // See https://s3.amazonaws.com/foliodocs/api/mod-inventory-storage/p/instance-storage.html for response data
        mockFolioResponse({
            "instances": [
                {
                    "id": "instance1",
                    "holdingsRecords": [{ "id": "holdingsRecord1" }]
                }
            ]
        });
    });
    
    describe('getByHoldingsRecordId', () => {
        it('calls getInstances with holdingsRecords.id', async () => {
            const getInstancesSpy = jest.spyOn(InstancesAPI, 'getInstances');
            await InstancesAPI.getByHoldingsRecordId('holdingsRecord1');
            expect(getInstancesSpy).toHaveBeenCalledWith({ 'holdingsRecords.id': ['holdingsRecord1'] });
        });
    });
    describe('getInstances', () => {
        it('queries the expected URL with default params and returns instances', async () => {
            const result = await InstancesAPI.getInstances({});
            expect(mockFolioRequestUrl()).toContainPath('/instance-storage/instances?limit=2147483647');
            expect(result[0].id).toEqual('instance1');
        });
        it('handles query params properly when provided', async () => {
            await InstancesAPI.getInstances({ 'holdingsRecords.id': ['holdingsRecord1'] });
            expect(mockFolioRequestUrl()).toContainPath('/instances?query=(holdingsRecords.id==holdingsRecord1+)');
        });
    });
    describe('getInstance', () => {
        it('queries the expected URL', async () => {
            // here we want to mock a different FOLIO response for getInstance
            fetchMock.resetMocks();
            mockFolioResponse({
                "id": "instance2",
            });
            const result = await InstancesAPI.getInstance('instance2');
            expect(mockFolioRequestUrl()).toContainPath('/instance-storage/instances/instance2');
            expect(result.id).toEqual('instance2');
        });
    });
});
