import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SearchPage() {
  // const { state } = useLocation()
  // const { products } = useProducts()
  // const filteredProducts = products.filter((p) =>
  //   p.name.toLowerCase().includes(state.toLowerCase())
  // )

  return (
    <div>
      <h2>Search Page</h2>
      {/* <h1>Search elements:</h1>
      <ProductsList products={filteredProducts} /> */}
      <div>
        <NavLink to='/category/category1'>Category 1</NavLink>
      </div>
      <NavLink to='/cart/user1'>
        <span>Cart</span>
      </NavLink>
    </div>
  )
}