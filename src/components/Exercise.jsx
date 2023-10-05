import React from 'react'

import { Header } from '../Header'

export const Exercise = ({ index, title, children, instructions }) => {
  return (
    <div>
      <Header
        title={
          <span>
            Exercise {index} {title && <b>{title}</b>}
          </span>
        }
      >
        {instructions}
      </Header>
      {children}
    </div>
  )
}

Exercise.displayName = 'Exercise'
