import assert from 'assert';
import escapeStringRegexp from 'escape-string-regexp';
import { mockResponse, queryTestServer } from './setupJest';

describe('Items API', () => {
  it('returns data from getPatrons', async () => {
    mockResponse(new RegExp(escapeStringRegexp("/item-storage/items/faeb4aef-eb12-56e0-befc-305833eb5129")), {
      "id": "faeb4aef-eb12-56e0-befc-305833eb5129",
      "_version": 4,
      "hrid": "ai14886322_1_1",
      "holdingsRecordId": "42e6cb94-2d4d-5d11-82d8-43a9a1ce764e",
      "formerIds": [

      ],
      "discoverySuppress": false,
      "barcode": "36105236166034",
      "effectiveShelvingOrder": "DG 3975 A553 P48 41990 11",
      "effectiveCallNumberComponents": {
        "callNumber": "DG975 .A553 P48 1990",
        "typeId": "95467209-6d7b-468b-94df-0f5d7ad2747d"
      },
      "yearCaption": [

      ],
      "copyNumber": "1",
      "numberOfPieces": "1",
      "administrativeNotes": [

      ],
      "notes": [

      ],
      "circulationNotes": [
        {
          "id": "74f01191-c419-481b-9eb8-25a78bf484b2",
          "noteType": "Check in",
          "note": "SAL3 Patron Notify: place on tech processor shelf and change location to ‘Green Tech Processor’ ",
          "source": {
            "id": "649b7b6c-24e2-4c00-8889-4daa7fc6cdc3",
            "personal": {
              "lastName": "Mitchell",
              "firstName": "Tyler"
            }
          },
          "date": "2023-08-29T21:50:16.911+0000",
          "staffOnly": false
        }
      ],
      "status": {
        "name": "Awaiting pickup",
        "date": "2023-08-21T22:09:07.923+00:00"
      },
      "materialTypeId": "1a54b431-2e4f-452d-9cae-9cee66c9a892",
      "permanentLoanTypeId": "2b94c631-fca9-4892-a730-03ee529ffe27",
      "effectiveLocationId": "1146c4fa-5798-40e1-9b8e-92ee4c9f2ee2",
      "electronicAccess": [

      ],
      "statisticalCodeIds": [

      ],
      "tags": {
        "tagList": [

        ]
      },
      "metadata": {
        "createdDate": "2023-08-21T22:14:08.622+00:00",
        "createdByUserId": "58d0aaf6-dcda-4d5e-92da-012e6b7dd766",
        "updatedDate": "2023-08-29T21:51:32.607+00:00",
        "updatedByUserId": "649b7b6c-24e2-4c00-8889-4daa7fc6cdc3"
      },
      "lastCheckIn": {
        "dateTime": "2023-08-29T21:51:31.734+00:00",
        "servicePointId": "a5dbb3dc-84f8-4eb3-8bfe-c61f74a9e92d",
        "staffMemberId": "649b7b6c-24e2-4c00-8889-4daa7fc6cdc3"
      }
    })

    const response = await queryTestServer({
      query: `query Query($itemId: UUID!) {
        item(id: $itemId) {
          circulationNotes {
            noteType
            note
          }
        }
      }`,
      variables: { itemId: 'faeb4aef-eb12-56e0-befc-305833eb5129' }
    })

    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert`` will appropriately narrow the type of `body`
    // and `expect` will not.
    assert(response.body.kind === 'single');
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.item.circulationNotes[0].noteType).toBe('Check_in')
  });
})
