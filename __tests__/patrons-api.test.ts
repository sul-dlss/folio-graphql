
import assert from 'assert';
import escapeStringRegexp from 'escape-string-regexp';
import { mockResponse, queryTestServer } from './setupJest';

describe('Patrons API', () => {
  it('returns data from getPatrons', async () => {
    mockResponse(new RegExp(escapeStringRegexp("/patron/account/d7b67ab1-a3f2-45a9-87cc-d867bca8315f?includeLoans=true&includeHolds=true&includeCharges=true")), {
      "totalCharges": {
        "amount": 50.0,
        "isoCurrencyCode": "USD"
      },
      "totalChargesCount": 1,
      "totalLoans": 1,
      "totalHolds": 1,
      "charges": [
        {
          "item": {
            "instanceId": "6e024cd5-c19a-4fe0-a2cd-64ce5814c694",
            "itemId": "7d9dfe70-0158-489d-a7ed-2789eac277b3",
            "title": "Some Book About Something",
            "author": "Some Guy; Another Guy"
          },
          "chargeAmount": {
            "amount": 50.0,
            "isoCurrencyCode": "USD"
          },
          "accrualDate": "2018-01-31T00:00:01Z",
          "state": "Paid Partially",
          "reason": "damage - rebinding",
          "feeFineId": "881c628b-e1c4-4711-b9d7-090af40f6a8f"
        }
      ],
      "holds": [
        {
          "requestId": "8bbac557-d66f-4571-bbbf-47a107cc1589",
          "item": {
            "instanceId": "255f82f3-5b1b-4239-93e4-ec6acf03ad9d",
            "itemId": "26670295-716a-4f84-8f65-2ef31707c017",
            "title": "I Want to Hold Your Hand",
            "author": "John Lennon; Paul McCartney"
          },
          "queuePosition": 1,
          "requestDate": "2018-06-02T08:16:30Z",
          "pickupLocationId": "ebab9ccc-4ece-4f35-bc82-01f3325abed8",
          "status": "Open - Not yet filled"
        }
      ],
      "loans": [
        {
          "id": "9a171a89-baca-4f1a-b2c4-d7253854864e",
          "item": {
            "instanceId": "6e024cd5-c19a-4fe0-a2cd-64ce5814c694",
            "itemId": "7d9dfe70-0158-489d-a7ed-2789eac277b3",
            "title": "Some Book About Something",
            "author": "Some Guy; Another Guy"
          },
          "loanDate": "2018-06-01T11:12:00Z",
          "dueDate": "2525-01-01T11:12:00Z",
          "overdue": false
        }
      ]
    })

    const response = await queryTestServer({
      query: 'query Query($patronId: UUID!) {patron(id: $patronId) {loans {dueDate}}}',
      variables: { patronId: 'd7b67ab1-a3f2-45a9-87cc-d867bca8315f' }
    })

    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert`` will appropriately narrow the type of `body`
    // and `expect` will not.
    assert(response.body.kind === 'single');
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.patron.loans[0].dueDate).toBe('2525-01-01T11:12:00Z')
  });
})
