import React from 'react'

import { users } from '../data/users'
import { Exercise } from '../components/Exercise'

import { User } from './user'

export const ExerciseLayout = () => {
  return (
    <Exercise
      index={1}
      instructions={
        <>
          <u>Please fix the 2 problems below:</u>
          <ul style={{ paddingLeft: '0.5rem' }}>
            <li>The 3 GitHub profiles below do not display any information.</li>
            <li>
              They should be displayed on 3 rows, each containing 3 colums: the
              first for the avatar, the 2nd contains the profile informations
              and the 3rd contains the top 3 repositories. The middle column
              should take the maximum space.
            </li>
          </ul>
        </>
      }
    >
      {users.map((user) => (
        <User key={user.login} user={user} />
      ))}
    </Exercise>
  )
}
