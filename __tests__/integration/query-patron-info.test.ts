import { dataSources, queryTestServer } from '../setupJest';
import assert from 'assert';

it('resolves patronInfo', async () => {

    // Source: https://github.com/sul-dlss/mylibrary/blob/4be4b3705c734a7743b019a8450626a6324fe45f/app/services/folio_graphql_client.rb#L120C7-L120C18
    const query = `query Query($patronId: UUID!) {
        patron(id: $patronId) {
          user {
            username
            barcode
            active
            personal {
              email
              lastName
              firstName
              preferredFirstName
            }
            proxiesFor {
              userId
            }
            proxiesOf {
              proxyUserId
              proxyUser {
                barcode
                personal {
                  firstName
                  lastName
                }
              }
            }
            expirationDate
            externalSystemId
            patronGroup {
              desc
              group
              limits {
                conditionId
                id
                patronGroupId
                value
                condition {
                  blockBorrowing
                  blockRenewals
                  blockRequests
                  message
                  name
                  valueType
                }
              }
            }
            blocks {
              message
            }
            manualBlocks {
              desc
            }
            patronGroupId
          }
          id
          holds {
            requestDate
            item {
              instanceId
              title
              itemId

              item {
                circulationNotes {
                  id
                  noteType
                  note
                  source {
                    personal {
                      lastName
                    }
                    id
                  }
                  date
                  staffOnly
                }
                effectiveShelvingOrder
                effectiveCallNumberComponents {
                  callNumber
                }
                permanentLocation {
                  code
                }
                effectiveLocation {
                  code
                  details {
                    pageServicePoints {
                      code
                      id
                      discoveryDisplayName
                      pickupLocation
                    }
                  }
                }
                holdingsRecord {
                  effectiveLocation {
                    code
                  }
                }
              }
              author
              instance {
                hrid
              }
              isbn
            }
            requestId
            status
            expirationDate
            details {
              holdShelfExpirationDate
              proxyUserId
              proxy {
                firstName
                lastName
                barcode
              }
            }
            pickupLocationId
            pickupLocation {
              code
            }
            queueTotalLength
            queuePosition
            cancellationReasonId
            canceledByUserId
            cancellationAdditionalInformation
            canceledDate
            patronComments
          }
          accounts {
            id
            userId
            remaining
            amount
            loanId
            loan {
              proxyUserId
            }
            status {
              name
            }
            feeFine {
              feeFineType
            }
            actions {
              dateAction
              typeAction
            }
            paymentStatus {
              name
            }
            item {
              id
              barcode
              effectiveShelvingOrder
              effectiveLocation {
                code
              }
              permanentLocation {
                code
              }
              instance {
                title
                hrid
                contributors {
                  name
                }
              }
              holdingsRecord {
                callNumber
                effectiveLocation {
                  code
                }
              }
            }
          }
          loans {
            id
            item {
              title
              author
              instanceId
              itemId
              isbn
              instance {
                hrid
              }
              item {
                barcode
                id
                status {
                  date
                  name
                }
                effectiveShelvingOrder
                effectiveCallNumberComponents {
                  callNumber
                }
                permanentLoanTypeId
                temporaryLoanTypeId
                materialTypeId
                effectiveLocationId
                effectiveLocation {
                  code
                }
                permanentLocation {
                  code
                }
                holdingsRecord {
                  effectiveLocation {
                    code
                  }
                }
              }
            }
            loanDate
            dueDate
            overdue
            details {
              renewalCount
              dueDateChangedByRecall
              dueDateChangedByHold
              proxyUserId
              userId
              status {
                name
              }
              feesAndFines {
                amountRemainingToPay
              }
            }
          }
          totalCharges {
            isoCurrencyCode
            amount
          }
          totalChargesCount
          totalLoans
          totalHolds
        }
      }`;

    dataSources.types.getMapFor = jest.fn().mockResolvedValue(new Map());
    dataSources.users.getUser = jest.fn().mockResolvedValue([])
    dataSources.users.getBlocks = jest.fn().mockResolvedValue([])
    dataSources.users.getManualBlocks = jest.fn().mockResolvedValue([])
    dataSources.users.getAccounts = jest.fn().mockResolvedValue([])
    dataSources.patrons.getPatron = jest.fn().mockResolvedValue(
        {
            totalCharges: { amount: 0, isoCurrencyCode: 'USD' },
            totalChargesCount: 0,
            totalLoans: 0,
            totalHolds: 0,
            charges: null,
            holds: [],
            loans: [],
            id: 'ec5a4033-fdec-4f0a-8bbf-77e5411709ce'
        });


    const response = await queryTestServer({
        query: query,
        variables: { patronId: 'ec5a4033-fdec-4f0a-8bbf-77e5411709ce' },
    });

    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert` will appropriately narrow the type of `body`
    // and `expect` will not.
    assert(response.body.kind === 'single');
    expect(response.body.singleResult.errors).toBeUndefined();
    const patron = response.body.singleResult.data.patron;
    expect(patron.id).toEqual('ec5a4033-fdec-4f0a-8bbf-77e5411709ce');
});
