import { dataSources, queryTestServer } from '../setupJest';
import assert from 'assert';

it('resolves loanPolicies', async () => {
    
    // Source: https://github.com/sul-dlss/mylibrary/blob/4be4b3705c734a7743b019a8450626a6324fe45f/app/services/folio_graphql_client.rb#L75
    const query = `query LoanPolicies {
        loanPolicies {
        id
        name
        description
        renewable
        renewalsPolicy {
            numberAllowed
            alternateFixedDueDateSchedule {
            schedules {
                due
                from
                to
            }
            }
            period {
            duration
            intervalId
            }
            renewFromId
            unlimited
        }
        loanable
        loansPolicy {
            period {
            duration
            intervalId
            }
            fixedDueDateSchedule {
            schedules {
                due
                from
                to
            }
            }
        }
        }
    }`

    // mock the internals of  type-api
    dataSources.types.getMapFor = jest.fn().mockResolvedValue(new Map());
    dataSources.types.getValuesFor = jest.fn().mockResolvedValue([
        {
            "id": "a8911fae-9a65-4890-bbf5-ebcd82a8d349",
            "name": "28day-2renew-1daygrace-2item",
            "description": "28-day course reserves loan for Lane with 2-item limit",
            "renewable": true,
            "renewalsPolicy": {
                "numberAllowed": 2,
                "alternateFixedDueDateSchedule": null,
                "period": null,
                "renewFromId": "SYSTEM_DATE",
                "unlimited": null
            },
            "loanable": true,
            "loansPolicy": {
                "period": {
                    "duration": 28,
                    "intervalId": "Days"
                },
                "fixedDueDateSchedule": null
            }
        },
        {
            "id": "26c44ee7-5a7d-4832-aa84-febe49a8d2f8",
            "name": "14day-norenew-1daygrace",
            "description": "Loan policy for periodicals ",
            "renewable": false,
            "renewalsPolicy": null,
            "loanable": true,
            "loansPolicy": {
                "period": {
                    "duration": 14,
                    "intervalId": "Days"
                },
                "fixedDueDateSchedule": null
            }
        }
    ]);


    const response = await queryTestServer({
        query: query,
        variables: {},
    });

    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert`` will appropriately narrow the type of `body`
    // and `expect` will not.
    assert(response.body.kind === 'single');
    expect(response.body.singleResult.errors).toBeUndefined();
    const loanPolicies = response.body.singleResult.data.loanPolicies;
    expect(loanPolicies).toBeInstanceOf(Array);
    expect(loanPolicies).toHaveLength(2);
    expect(loanPolicies[0].id).toEqual('a8911fae-9a65-4890-bbf5-ebcd82a8d349');
});