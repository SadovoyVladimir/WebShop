import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EditProductPage() {
  return (
    <div>
      <h2>Edit Product Page</h2>
      <div>
        <NavLink to='/addition'>Add Page</NavLink>
      </div>

      <NavLink to='/addition/create'>Create Page</NavLink>
    </div>
  )
}
