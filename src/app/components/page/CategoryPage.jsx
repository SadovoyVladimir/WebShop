import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ProductsList from '../ui/productsList'
import { useSelector } from 'react-redux'
import {
  getProductsByCategoryId,
  getProductsLoadingStatus
} from '../../store/productsSlice'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const isLoading = useSelector(getProductsLoadingStatus())
  const productsList = useSelector(getProductsByCategoryId(categoryId))

  return (
    <div>
      <h2 className='text-center'>Category Page</h2>
      {!isLoading && <ProductsList products={productsList} />}
      <div>
        <NavLink to='/'>Main Page</NavLink>
      </div>

      <NavLink to='/product/product1'>Product 1</NavLink>
    </div>
  )
}
