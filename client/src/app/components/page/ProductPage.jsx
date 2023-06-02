import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../store/productsSlice'
import ProductInfoCard from '../ui/productInfo/productInfoCard'
import CartAdditionCard from '../ui/productInfo/cartAdditionCard'

export default function ProductPage() {
  const { productId } = useParams()
  const product = useSelector(getProductById(productId))

  return (
    <div className='container'>
      <h1 className='text-center mb-4'>{product.name}</h1>
      <div
        className='d-flex justify-content-between align-items-stretch'
        style={{ width: 100 + '%' }}
      >
        <div style={{ width: 65 + '%' }}>
          <ProductInfoCard {...product} />
        </div>
        <div style={{ width: 30 + '%' }}>
          <CartAdditionCard {...product} />
        </div>
      </div>
    </div>
  )
}
