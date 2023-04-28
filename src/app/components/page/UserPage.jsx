import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserPage() {
  return (
    <div>
      <h2>User Page</h2>
      <div>
        <NavLink to='/'>Main Page</NavLink>
      </div>

      <NavLink to='/user/edit'>Edit</NavLink>
    </div>
  )
}
