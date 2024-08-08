import { dataSources } from './setupJest';

describe('FolioAPI', () => {
    let FolioAPI = dataSources.folio;
    describe('buildCqlQuery', () => { 
        it('handles single-value objects passed directly as arguments ', async () => {
            const result = FolioAPI.buildCqlQuery({'holdingsRecordId': 'holdingsId789' });
            expect(result).toBeInstanceOf(URLSearchParams);
            expect(result.get('query')).toEqual('holdingsRecordId=="holdingsId789"');
        })
        it('handles array-value objects passed directly as arguments ', async () => {
            const result = FolioAPI.buildCqlQuery({'holdingsRecordId': ['holdingsId789', 'holdingsId456'] });
            expect(result).toBeInstanceOf(URLSearchParams);
            expect(result.get('query')).toEqual('(holdingsRecordId=="holdingsId789" OR holdingsRecordId=="holdingsId456" )');
        });
        it('handles multiple single-value objects passed directly as arguments ', async () => {
            const result = FolioAPI.buildCqlQuery({'holdingsRecordId': 'holdingsId789', 'instanceId': 'instanceId123' });
            expect(result).toBeInstanceOf(URLSearchParams);
            expect(result.get('query')).toEqual('holdingsRecordId=="holdingsId789" AND instanceId=="instanceId123"');
        });
        it('handles limit passed as Cql params ', async () => {
            const result = FolioAPI.buildCqlQuery({ params: {'limit': 5 }});
            expect(result).toBeInstanceOf(URLSearchParams);
            expect(result.get('limit')).toEqual('5');
        });
        it('handles offset passed as Cql params ', async () => {
            const result = FolioAPI.buildCqlQuery({ params: {'offset': 5 }});
            expect(result).toBeInstanceOf(URLSearchParams);
            expect(result.get('offset')).toEqual('5');
        });
        it('handles query passed as Cql params ', async () => {
            const result = FolioAPI.buildCqlQuery({ params: {'query': 'holdingsRecordId=="holdingsId789"' }});
            expect(result).toBeInstanceOf(URLSearchParams);
            expect(result.get('query')).toEqual('holdingsRecordId=="holdingsId789"');
        });
        it('handles sortby passed as Cql params ', async () => {
            const result = FolioAPI.buildCqlQuery({ params: {'sortby': 'holdingsRecordId' }});
            expect(result).toBeInstanceOf(URLSearchParams);
            expect(result.get('query')).toEqual(' sortby holdingsRecordId');
        });
        it('escapes special characters in query values', async () => {
            const result = FolioAPI.buildCqlQuery({'holdingsRecordId': 'hold"ingsId*789?' });
            expect(result).toBeInstanceOf(URLSearchParams);
            expect(result.get('query')).toEqual('holdingsRecordId=="hold\\"ingsId\\*789\\?"');
        })
    });
});
