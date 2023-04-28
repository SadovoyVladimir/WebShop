import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductPage() {
  return (
    <div>
      <h2>Product Page</h2>
      <div>
        <NavLink to='/category/category1'>Category 1</NavLink>
      </div>
      <NavLink to='/cart/user1'>
        <span>Cart</span>
      </NavLink>
    </div>
  )
}
