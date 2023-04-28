import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CartPage() {
  return (
    <div>
      <h2>Cart Page</h2>
      <div>
        <NavLink to='/'>Main Page</NavLink>
      </div>

      <NavLink to='/product/product1'>Product 1</NavLink>
    </div>
  )
}
