import { computeMetrics } from './Metrics'

describe('computeMetrics', () => {
  test('it should return 0 when no users', () => {
    expect(computeMetrics({ users: [], cars: [], insurances: [] })).toEqual({
      nbUsersOutdatedInsurances: 0,
      usersWithManyCars: 0,
      mostOwnedCarOwners: 0,
      uniqueUsers: 0,
      usersAverageAge: 0,
    })
  })
})
