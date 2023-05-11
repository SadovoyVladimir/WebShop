import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ProductsList from '../ui/productsList'
import { useSelector } from 'react-redux'
import { getProducts } from '../../store/productsSlice'

export default function SearchPage() {
  const { state } = useLocation()
  const productsList = useSelector(getProducts())
  const filteredProducts = productsList?.filter((p) =>
    p.title?.toLowerCase().includes(state.toLowerCase())
  )

  if (!productsList) return 'Loading...'

  return (
    <div>
      <h2>Search Page</h2>
      <h1>Search elements:</h1>
      <ProductsList products={filteredProducts} />
      <div>
        <NavLink to='/category/category1'>Category 1</NavLink>
      </div>
      <NavLink to='/cart/user1'>
        <span>Cart</span>
      </NavLink>
    </div>
  )
}
