import React from 'react'
import './user.css'

/**
 * For this exercise, I assume that the data is not always complete.
 * The URL of repository is always present and is a unique key.
 */

export const User = ({ user }) => {
  const { avatar, login, firstName, lastName, company, bio, top3Repositories } =
    user
  return (
    <div className="container">
      <img src={avatar} className="image" />
      <div className="infos">
        {login && <div>Login: {login}</div>}
        {firstName && <div>First name: {firstName}</div>}
        {lastName && <div>Last name: {lastName}</div>}
        {company && <div>Company: {company}</div>}
        {bio && <div>Bio: {bio}</div>}
      </div>
      <div className="top-repos">
        {top3Repositories.map((repo) => {
          return (
            <div key={repo.url}>
              {repo.name} {repo.stargazers}
            </div>
          )
        })}
      </div>
    </div>
  )
}
