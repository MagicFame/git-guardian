import React from 'react'

import { Exercise } from '../components/Exercise'

import { Metrics } from './Metrics'

export const ExerciseAlgo = () => {
  return (
    <Exercise
      index={4}
      instructions={
        <>
          <p>
            We have a lot of data that we want to extract meaningful metrics
            from. The data is composed of users, cars and insurances which is an
            associative table between users and cars.
            <br />
            Our data has been corrupted and some users have been duplicated. The
            user unique identifier is the email. In order to deduplicate them,
            keep the user object which has been created first but keep the
            insurances of the duplicate users.
            <br />A basic test is already written, you can add test cases to
            help you.
            <br />
            You should implement the <code>computeMetrics</code> function
            without modifying the rest of the code.
            <br />
            The fixtures in data.json have a fixed date. Use the provided{' '}
            <code>now</code> variable as the current date (instead of the real
            current date).
            <br />
            Keep in mind this exercice is testing algorithmic, so the time
            complexity of your code will be evaluated.
          </p>
          <p style={{ marginTop: '2rem' }}>
            Metrics you should compute on <b>deduplicated users</b>:
          </p>
          <ul style={{ padding: 2 }}>
            <li>The total number of users.</li>
            <li>
              The number of users with at least one outdated insurance (their
              insurance expires before the fixed <code>now</code> date defined
              in the code).
            </li>
            <li>The number of users with more than 2 cars.</li>
            <li>
              The average age of the users (using the user createdAt field) in
              days.
            </li>
            <li>The number of users for the car owned by the most users.</li>
          </ul>
        </>
      }
    >
      <Metrics />
    </Exercise>
  )
}
