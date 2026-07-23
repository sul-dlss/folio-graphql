import { mock } from 'node:test';
import fetchMock from 'jest-fetch-mock';
import { dataSources, mockFolioResponse, mockFolioRequestUrl } from './setupJest';

describe('TypeAPI', () => {
    let TypeAPI = dataSources.types;

    // The per-request cache would otherwise carry results between tests and
    // skip the mocked HTTP responses each test sets up.
    beforeEach(() => TypeAPI.clearCache());

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
    describe('concurrent lookups', () => {
        it('deduplicates in-flight fetches for the same path', async () => {
            // Only one HTTP response queued; if the cache-check-then-fetch
            // were racy, later callers would fire additional requests and the
            // mock would return undefined for them.
            const [a, b, c] = await Promise.all([
                TypeAPI.getById('instance-formats', { key: 'instanceFormats' }, 'format1'),
                TypeAPI.getById('instance-formats', { key: 'instanceFormats' }, 'format2'),
                TypeAPI.getMapFor('instance-formats', { key: 'instanceFormats' }),
            ]);
            expect(fetchMock.mock.calls.length).toEqual(1);
            expect(a).toEqual({ id: 'format1' });
            expect(b).toEqual({ id: 'format2' });
            expect(c.get('format1')).toEqual({ id: 'format1' });
        });

        it('drops the cache entry when the fetch rejects so retries can proceed', async () => {
            // Discard the queued mock, replace with one that fails then one that succeeds.
            fetchMock.resetMocks();
            fetchMock.mockRejectOnce(new Error('boom'));
            await expect(
                TypeAPI.getMapFor('instance-formats', { key: 'instanceFormats' })
            ).rejects.toThrow();

            mockFolioResponse({ instanceFormats: [{ id: 'format1' }] });
            const retry = await TypeAPI.getMapFor('instance-formats', { key: 'instanceFormats' });
            expect(retry.get('format1')).toEqual({ id: 'format1' });
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