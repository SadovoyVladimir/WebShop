import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getProductById } from '../../store/productsSlice'
import { getCurrentUserId } from '../../store/usersSlice'
import CreateProductForm from '../ui/productForms/createProductForm'

export default function EditProductPage() {
  const { productId } = useParams()
  const product = useSelector(getProductById(productId))
  const userId = useSelector(getCurrentUserId())

  if (!product || userId !== product.userId) return <Navigate to='/products' />

  return (
    <div className='row'>
      <div className='col-md-10 offset-md-1 shadow p-4'>
        <h2>Редактирование</h2>
        <CreateProductForm product={product} />
      </div>
    </div>
  )
}
