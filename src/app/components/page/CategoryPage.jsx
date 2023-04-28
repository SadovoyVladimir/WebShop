import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CategoryPage() {
  return (
    <div>
      <h2>Category Page</h2>
      <div>
        <NavLink to='/'>Main Page</NavLink>
      </div>

      <NavLink to='/product/product1'>Product 1</NavLink>
    </div>
  )
}
