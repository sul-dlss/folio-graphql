import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

describe('AuthnAPI', () => {
    let AuthnAPI = dataSources.authn;

    describe('login', () => {
        it('queries the expected URL with credentials', async () => {
            mockFolioResponse({"ok": true});
            const result = await AuthnAPI.login('username', 'password');
            expect(mockFolioRequestUrl()).toContainPath('/authn/login');
            expect(result).toEqual({ ok: true });
        });
    });

});
