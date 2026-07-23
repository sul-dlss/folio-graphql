import { createDataSources, queryTestServer } from '../setupJest';
import assert from 'assert';

it('resolves items', async () => {
    const dataSources = createDataSources();

    // Source: https://github.com/sul-dlss/sul-requests/blob/35ad5eb23429c838289520eae7a1e91614cf33ae/app/services/folio_graphql_client.rb#L48
    // in sul-requests `barcode` is passed in directly as a string; replicating that here by hardcoding it below
    const query = `query CircCheckByBarcode {
        items(barcode: "10050402-3001") {
            status {
                name
            }
            barcode
            dueDate
            effectiveCallNumberComponents {
                callNumber
            }
            instance {
                title
            }
        }
    }`;

    // mock the check on loans for this item
    dataSources.circulation.getLoans = jest.fn().mockResolvedValue([]);

    // mock the resovler for the instance
    dataSources.instances.getByHoldingsRecordId = jest.fn().mockResolvedValue(
        {
            id: '1dd708e8-2a1f-5a18-878d-7c9ff82dae9f',
            hrid: 'a10050402',
            source: 'MARC',
            title: 'Annual report.',
            instanceTypeId: '30fffe0e-e985-4144-b2e2-1e8179bdb41f',
            physicalDescriptions: ['v. : ill. ; 28 cm.'],
            languages: ['eng'],
        }
    );

    // mock the internals of items-api
    dataSources.items.getItems = jest.fn().mockResolvedValue(
        [{
            id: '0a03c40c-bd4d-56d6-a59a-15da369fa51f',
            hrid: 'ai10050402_1_1',
            holdingsRecordId: '829b8bce-549a-5f11-9376-a558811b34ed',
            barcode: '10050402-3001',
            effectiveShelvingOrder: "DREYER'S GRAND ICE CREAM, INC. 1",
            status: { name: 'Available', date: '2023-08-21T14:31:57.681+00:00' },
        }]
    );

    const response = await queryTestServer({
        query: query,
        variables: {},
    }, dataSources);

    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert`` will appropriately narrow the type of `body`
    // and `expect` will not.
    assert(response.body.kind === 'single');
    expect(response.body.singleResult.errors).toBeUndefined();
    const items = response.body.singleResult.data.items;
    expect(items).toBeInstanceOf(Array);
    expect(items).toHaveLength(1);
    expect(items[0].status).toEqual({ name: 'Available' });
});

it('batches due date lookups for multiple items', async () => {
    const dataSources = createDataSources();
    const query = `query ItemsWithDueDates {
        items {
            id
            dueDate
        }
    }`;

    dataSources.items.getItems = jest.fn().mockResolvedValue([
        { id: 'item-a' },
        { id: 'item-b' },
        { id: 'item-c' },
    ]);
    dataSources.circulation.getLoans = jest.fn().mockResolvedValue([
        { id: 'loan-a', itemId: 'item-a', dueDate: '2026-01-01T00:00:00Z' },
        { id: 'loan-c', itemId: 'item-c', dueDate: '2026-03-03T00:00:00Z' },
    ]);

    const response = await queryTestServer({
        query,
        variables: {},
    }, dataSources);

    assert(response.body.kind === 'single');
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data.items).toEqual([
        { id: 'item-a', dueDate: '2026-01-01T00:00:00Z' },
        { id: 'item-b', dueDate: null },
        { id: 'item-c', dueDate: '2026-03-03T00:00:00Z' },
    ]);
    expect(dataSources.circulation.getLoans).toHaveBeenCalledTimes(1);
    expect(dataSources.circulation.getLoans).toHaveBeenCalledWith({
        itemId: ['item-a', 'item-b', 'item-c'],
        'status.name': 'open',
    });
});
