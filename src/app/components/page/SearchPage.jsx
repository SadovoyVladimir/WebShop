import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ProductsList from '../ui/productsList'
import { useSelector } from 'react-redux'
import {
  getProducts,
  getProductsLoadingStatus
} from '../../store/productsSlice'

export default function SearchPage() {
  const { state } = useLocation()
  const productsList = useSelector(getProducts())
  const isLoading = useSelector(getProductsLoadingStatus())

  if (isLoading) return 'Loading...'

  const filteredProducts = productsList.filter(p =>
    p.name.toLowerCase().includes(state.toLowerCase())
  )

  return (
    <div>
      <h1>Search elements:</h1>
      <ProductsList products={filteredProducts} />
    </div>
  )
}
