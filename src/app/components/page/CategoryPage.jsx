import React from 'react'
import { useParams } from 'react-router-dom'
import ProductsList from '../ui/productsList'
import { useSelector } from 'react-redux'
import {
  getProductsByCategoryId
} from '../../store/productsSlice'
import { getCategoryById } from '../../store/categoriesSlice'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const category = useSelector(getCategoryById(categoryId))
  const productsList = useSelector(getProductsByCategoryId(categoryId))

  return (
    <div>
      <h2 className='text-center'>{category.name}</h2>
      <ProductsList products={productsList} />
    </div>
  )
}
