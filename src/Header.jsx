import { Link } from 'react-router-dom'
import React from 'react'

export const Header = ({ title, children }) => (
  <div style={{ padding: '1rem' }}>
    <Link to="/">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/gitguardian-owl.png"
          style={{ display: 'inline-block', height: '60px' }}
        />
        <h1 style={{ marginLeft: '1rem' }}>Home page</h1>
      </div>
    </Link>
    <h2 style={{ margin: '2.5rem' }}>{title}</h2>
    <div>{children}</div>
  </div>
)
