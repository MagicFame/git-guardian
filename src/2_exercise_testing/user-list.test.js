import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { UserList } from './user-list'

test('updates a user when form is submitted', () => {
  const { getByLabelText, getByTestId } = render(<UserList />)
  const firstNameInput = getByLabelText('First name')
  const lastNameInput = getByLabelText('Last name')
  const loginInput = getByLabelText('Login')
  fireEvent.change(firstNameInput, { target: { value: 'Janet' } })
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } })
  fireEvent.change(loginInput, { target: { value: 'janetdoe' } })
  const formElement = getByLabelText('User form')
  fireEvent.submit(formElement)
  const expectedText = getByTestId('user-info-0')
  expect(expectedText.textContent).toBe('Janet Doe @janetdoe')
})
