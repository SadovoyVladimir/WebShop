import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getProductsByCategoryId } from '../../store/productsSlice'
import { getCategoryById } from '../../store/categoriesSlice'
import ProductsList from '../ui/productsList'
import EmptyCategoryPage from '../ui/emptyCategoryPage'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const category = useSelector(getCategoryById(categoryId))
  const productsList = useSelector(getProductsByCategoryId(categoryId))

  return (
    <div>
      <h2 className='text-center'>{category.name}</h2>
      {productsList?.length ? (
        <ProductsList products={productsList} />
      ) : (
        <EmptyCategoryPage />
      )}
    </div>
  )
}
