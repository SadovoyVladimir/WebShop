import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EditUserPage() {
  return (
    <div>
      <h2>Edit user Page</h2>
      <div>
        <NavLink to='/'>Main Page</NavLink>
      </div>

      <NavLink to='/user'>User</NavLink>
    </div>
  )
}
