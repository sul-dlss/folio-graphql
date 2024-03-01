import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

// See https://s3.amazonaws.com/foliodocs/api/mod-inventory-storage/p/material-type.html for response data
describe('MaterialTypesAPI', () => {
    let MaterialTypesAPI = dataSources.materialtypes;

    describe('getMaterialType', () => {
        it('queries the expected URL and provides default params', async () => {
            mockFolioResponse({
                "mtypes": [
                    {
                        "name": "book"
                    },
                    {
                        "name": "dvd"
                    }
                ]
            });
            const result = await MaterialTypesAPI.getMaterialTypes({});
            expect(mockFolioRequestUrl()).toContainPath('/material-types?limit=2147483647');
            expect(result.length).toEqual(2);
            // the method should return an array of material types, not the object with the mtypes key
            expect(result[0].name).toEqual('book');
        });
    });
});
