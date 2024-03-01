import { dataSources, queryTestServer } from '../setupJest';
import assert from 'assert';

it('resolves serivePoints', async () => {

    // Source: https://github.com/sul-dlss/mylibrary/blob/4be4b3705c734a7743b019a8450626a6324fe45f/app/services/folio_graphql_client.rb#L55
    const query = `query ServicePoints {
        servicePoints {
          discoveryDisplayName
          id
          code
          pickupLocation
          details {
            isDefaultForCampus
            isDefaultPickup
          }
        }
      }`;

    // mock the internals of  service-points-api
    dataSources.servicepoints.getServicePoints = jest.fn().mockResolvedValue([{
        "discoveryDisplayName": "Green Library",
        "id": "a5dbb3dc-84f8-4eb3-8bfe-c61f74a9e92d",
        "code": "GREEN-LOAN",
        "pickupLocation": true,
        "details": {
          "isDefaultForCampus": "SUL",
          "isDefaultPickup": true
        }
      },
      {
        "discoveryDisplayName": "Business Library",
        "id": "958cc062-591c-45de-85c1-0e8672fbbfc5",
        "code": "BUS-IDESK",
        "pickupLocation": true,
        "details": {
          "isDefaultForCampus": "GSB",
          "isDefaultPickup": true
        }
      }]);

    const response = await queryTestServer({
        query: query,
        variables: {},
    });

    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert`` will appropriately narrow the type of `body`
    // and `expect` will not.
    assert(response.body.kind === 'single');
    expect(response.body.singleResult.errors).toBeUndefined();
    const servicePoints = response.body.singleResult.data.servicePoints;
    expect(servicePoints).toBeInstanceOf(Array);
    expect(servicePoints).toHaveLength(2);
    expect(servicePoints[0].id).toEqual('a5dbb3dc-84f8-4eb3-8bfe-c61f74a9e92d');
});

