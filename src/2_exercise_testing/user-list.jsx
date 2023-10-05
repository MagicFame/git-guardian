import React from 'react'

import { users as usersData } from '../data/users'

import './user-list.css'

export const UserList = () => {
  const [users, setUsers] = React.useState(usersData)
  const [selectedUserIndex, setSelectedUserIndex] = React.useState(0)

  const updateUser = (event) => {
    event.preventDefault()
    const { firstName, lastName, login } = event.target.elements
    const updatedUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      login: login.value,
    }
    setUsers(
      users.map((user, index) => {
        if (index === selectedUserIndex) {
          return { ...user, ...updatedUser }
        }
        return user
      })
    )
  }

  return (
    <div className="hstack user-list">
      {users.map((user, index) => {
        return (
          <div key={user.login}>
            <div
              className="user-info"
              onClick={() => {
                setSelectedUserIndex(index)
              }}
              data-testid={`user-info-${index}`}
            >
              {user.firstName} {user.lastName} @{user.login}
            </div>
            {selectedUserIndex === index && (
              <form onSubmit={updateUser} aria-label="User form">
                <div className="hstack form-content">
                  <input
                    defaultValue={users[selectedUserIndex].firstName}
                    placeholder="First name"
                    name="firstName"
                    aria-label="First name"
                  />
                  <input
                    defaultValue={users[selectedUserIndex].lastName}
                    placeholder="Last name"
                    aria-label="Last name"
                    name="lastName"
                  />
                  <label htmlFor="login">Login</label>
                  <input
                    defaultValue={users[selectedUserIndex].login}
                    placeholder="Login"
                    aria-label="Login"
                    name="login"
                  />

                  <button type="submit">Update</button>
                </div>
              </form>
            )}
          </div>
        )
      })}
    </div>
  )
}
