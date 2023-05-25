import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { getProductById } from '../../store/productsSlice'
import CreateProductForm from '../ui/createProductForm'
import { getCurrentUserId } from '../../store/usersSlice'

export default function EditProductPage() {
  const { productId } = useParams()
  const product = useSelector(getProductById(productId))
  const userId = useSelector(getCurrentUserId())
  if (!product || userId !== product.userId) return <Navigate to='/products' />
  return (
    <div className='row'>
      <div className='col-md-10 offset-md-1 shadow p-4'>
        <h2>Edit Product Page</h2>
        <CreateProductForm product={product} />
      </div>
    </div>
  )
}
