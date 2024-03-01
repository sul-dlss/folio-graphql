import { mock } from 'node:test';
import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

describe('TypeAPI', () => {
    let TypeAPI = dataSources.types;

    // See https://s3.amazonaws.com/foliodocs/api/mod-inventory-storage/p/instance-format.html#instance_formats_get
    beforeEach(() => {
        mockFolioResponse({
            "instanceFormats": [
                {
                    "id": "format1",
                },
                {
                    "id": "format2",
                }
            ]
        })
    });

    describe('getMapFor', () => {
        it('should return a map of types', async () => {
            const result = await TypeAPI.getMapFor('instance-formats', { key: 'instanceFormats' });
            expect(mockFolioRequestUrl()).toContainPath('/instance-formats?limit=2147483647');
            expect(result.get('format1')).toEqual({
                "id": "format1",
            });
        });
        it('succeed if a key is not provided as params', async () => {
            const result = await TypeAPI.getMapFor('instance-formats', {});
            expect(result.get('format1')).toEqual({
                "id": "format1",
            });
        });
    });
    describe('getById', () => {
        it('should return a type by id', async () => {
            const result = await TypeAPI.getById('instance-formats', { key: 'instanceFormats' }, 'format1');
            expect(result).toEqual({
                "id": "format1",
            });
        });
    });
    describe('getByIds', () => {
        it('should return types by ids', async () => {
            const result = await TypeAPI.getByIds('instance-formats', { key: 'instanceFormats' }, ['format1', 'format2']);
            expect(result).toEqual([
                {
                    "id": "format1",
                },
                {
                    "id": "format2",
                }
            ]);
        });
    });
    describe('getValuesFor', () => {
        it('should return an array of types', async () => {
            const result = await TypeAPI.getValuesFor('instance-formats', { key: 'instanceFormats' });
            expect(result).toEqual([
                {
                    "id": "format1",
                },
                {
                    "id": "format2",
                }
            ]);
        });
    });
});