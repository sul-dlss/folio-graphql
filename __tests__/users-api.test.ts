import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

describe('UsersAPI', () => {
    let UsersAPI = dataSources.users;

    describe('getManualBlocks', () => {
        it('queries the expected URL and returns manualblocks', async () => {
            mockFolioResponse({
                "manualblocks": [
                    {
                        "id": "manualblock1",
                    }
                ]
            });
            const result = await UsersAPI.getManualBlocks('userId1');
            expect(mockFolioRequestUrl()).toContainPath('/manualblocks?query=userId=="userId1"&limit=2147483647');
            // the method returns the array within manualblocks key
            expect(result[0].id).toEqual('manualblock1');
        });
    });
    describe('getFeeFineActions', () => {
        it('queries the expected URL and returns expected feefineactions data', async () => {
            mockFolioResponse({
                "feefineactions": [
                    {
                        "amountAction": 20.00,
                        "source": "Doe,Jane",
                        "id": "feefineaction1"
                    }
                ],
            });
            const result = await UsersAPI.getFeeFineActions('accountId1');
            expect(mockFolioRequestUrl()).toContainPath('/feefineactions?query=accountId=="accountId1"&limit=2147483647');
            // the method returns the array within feefineactions key
            expect(result[0].id).toEqual('feefineaction1');
            // do not return the private data stored in the source field
            expect(result[0].source).toBeUndefined();
        });
    });
    describe('proxy methods', () => {
        beforeEach(() => {
            // See https://s3.amazonaws.com/foliodocs/api/mod-users/p/proxiesFor.html#proxiesfor_get
            mockFolioResponse({
                "proxiesFor": [
                    {
                        // A UUID identifying this proxy relationship
                        "id": "proxyrelationship1",
                        // The id of the user for whom this proxy pertains
                        "userId": "user1",
                        // The id of the user acting as the proxy
                        "proxyUserId": "proxy1"
                    }
                ]
            });
        });
        it('getProxiesFor makes expected method call', async () => {
            const getProxyForSpy = jest.spyOn(UsersAPI, 'getProxyFor');
            await UsersAPI.getProxiesFor('proxy1');
            expect(getProxyForSpy).toHaveBeenCalledWith({ 'proxyUserId': ['proxy1'] });
        });
        it('getProxiesOf makes expeted method call', async () => {
            const getProxyForSpy = jest.spyOn(UsersAPI, 'getProxyFor');
            await UsersAPI.getProxiesOf('user1');
            expect(getProxyForSpy).toHaveBeenCalledWith({ 'userId': ['user1'] });
        });
        it('getProxyFor queries the expected URL and returns expected data', async () => {
            const result = await UsersAPI.getProxyFor({ 'proxyUserId': ['userId1'] });
            expect(mockFolioRequestUrl()).toContainPath('/proxiesfor?query=(proxyUserId=="userId1"+)&limit=2147483647');
            expect(result[0].id).toEqual('proxyrelationship1');
        });
    });
});
