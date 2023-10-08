import React from 'react'

import { now, roundDecimals } from './utils'
import data from './data.json'

export const computeMetrics = ({ users, cars, insurances }) => {
  return {}
}

export const Metrics = () => {
  const { users, cars, insurances } = data

  const t0 = performance.now()

  const {
    mostOwnedCarOwners,
    nbUsersOutdatedInsurances,
    uniqueUsers,
    usersAverageAge,
    usersWithManyCars,
  } = computeMetrics({
    users,
    cars,
    insurances,
  })

  const t1 = performance.now()

  return (
    <ul>
      <li>
        Total of unique users: <b>{uniqueUsers}</b>
      </li>
      <li>
        Users with at least 1 outdated insurance:{' '}
        <b>{nbUsersOutdatedInsurances}</b>
      </li>
      <li>
        Users with more than 2 cars: <b>{usersWithManyCars}</b>
      </li>
      <li>
        Average age of users: <b>{usersAverageAge}</b>
      </li>
      <li>
        Number of users for the most owned car: <b>{mostOwnedCarOwners}</b>
      </li>
      <li>
        Call to <code>computeMetrics</code> took{' '}
        <b>{roundDecimals(t1 - t0)} milliseconds</b>.
      </li>
    </ul>
  )
}
