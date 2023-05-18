import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CreateProductPage() {
  return (
    <div>
      <h2>Create Product Page</h2>
      <div>
        <NavLink to='/addition'>Add Page</NavLink>
      </div>

      <NavLink to='/addition/edit'>Edit page</NavLink>
    </div>
  )
}
