import { dataSources, queryTestServer } from '../setupJest';
import assert from 'assert';

it('resolves instances', async () => {

    // Source: https://github.com/sul-dlss/sul-requests/blob/35ad5eb23429c838289520eae7a1e91614cf33ae/app/services/folio_graphql_client.rb#L71
    // in sul-requests `hrid` is passed in directly as a string; replicating that here by hardcoding it below
    const query = `query InstanceByHrid {
      instances(hrid: "a8585559") {
        id
        hrid
        title
        identifiers {
          value
          identifierTypeObject {
            name
          }
        }
        instanceType {
          name
        }
        contributors {
          name
          primary
        }
        publication {
          dateOfPublication
          place
          publisher
        }
        editions
        electronicAccess {
          materialsSpecification
          uri
        }
        items {
          id
          barcode
          discoverySuppress
          volume
          status {
            name
          }
          dueDate
          materialType {
            id
            name
          }
          chronology
          enumeration
          effectiveCallNumberComponents {
            callNumber
          }
          notes {
            note
            itemNoteType {
              name
            }
          }
          effectiveLocation {
            id
            campusId
            libraryId
            institutionId
            code
            discoveryDisplayName
            name
            servicePoints {
              id
              code
              pickupLocation
            }
            library {
              id
              code
            }
            campus {
              id
              code
            }
            details {
              pageAeonSite
              pageMediationGroupKey
              pageServicePoints {
                id
                code
                name
              }
              scanServicePointCode
              availabilityClass
              searchworksTreatTemporaryLocationAsPermanentLocation
            }
          }
          permanentLocation {
            id
            code
            details {
              pageAeonSite
              pageMediationGroupKey
              pageServicePoints {
                id
                code
                name
              }
              pagingSchedule
              scanServicePointCode
            }
          }
          temporaryLocation {
            id
            code
            discoveryDisplayName
          }
          permanentLoanTypeId
          temporaryLoanTypeId
          holdingsRecord {
            id
            effectiveLocation {
              id
              code
              details {
                pageAeonSite
                pageMediationGroupKey
                pageServicePoints {
                  id
                  code
                  name
                }
                pagingSchedule
                scanServicePointCode
              }
            }
          }
        }
      }
    }`;
      
    // called in the resolver for instanceType
    dataSources.types.getMapFor = jest.fn().mockResolvedValue(new Map());
    // mock the internals of instances-api
    dataSources.instances.getInstances = jest.fn().mockResolvedValue(
        [{
          id: '8efc5d53-9c29-5cb8-b0e2-f801fb5dd00c',
          hrid: 'a8585559',
          source: 'MARC',
          title: 'Gelato a mezzanotte : romanzo / Laura Tangorra.',
          indexTitle: 'Gelato a mezzanotte : romanzo',
          instanceTypeId: '30fffe0e-e985-4144-b2e2-1e8179bdb41f',
          statusId: '9634a5ab-9228-4703-baf2-4d12ebc77d56',
          statusUpdatedDate: '2023-08-21T12:28:20.895+0000'
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
    const instances = response.body.singleResult.data.instances;
    expect(instances).toBeInstanceOf(Array);
    expect(instances).toHaveLength(1);
    expect(instances[0].id).toEqual('8efc5d53-9c29-5cb8-b0e2-f801fb5dd00c');
});
