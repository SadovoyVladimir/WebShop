import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  getProducts,
  getProductsLoadingStatus
} from '../../store/productsSlice'
import ProductsList from '../ui/productsList'
import EmptySearchInfo from '../ui/emptySearchInfo'

export default function SearchPage() {
  const { state } = useLocation()
  const productsList = useSelector(getProducts())
  const isLoading = useSelector(getProductsLoadingStatus())

  if (isLoading) return 'Loading...'
  if (!productsList.length) {
    toast.error('В магазине пока нет ни одного товара!')
    return <Navigate to='/' />
  }

  const filteredProducts = productsList.filter(p =>
    p.name.toLowerCase().includes(state.toLowerCase())
  )
  if (!filteredProducts.length) return <EmptySearchInfo />

  return (
    <div>
      <h2 className='text-center'>Найденные товары:</h2>
      <ProductsList products={filteredProducts} />
    </div>
  )
}
