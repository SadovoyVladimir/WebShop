import React, { useEffect, useState } from 'react'
import CartList from '../ui/cartList'
import cartLocalStorageService from '../../services/cartLocalStorage.service'
import EmptyCartInfo from '../ui/emptyCartInfo'
import CartInfo from '../ui/cartInfo'
import ClearCartButton from '../ui/clearCartButton'
import { useSelector } from 'react-redux'
import { getProductsByIds } from '../../store/productsSlice'

export default function CartPage() {
  const localStorageCart = cartLocalStorageService.getCartInfo()
  const productsIds = localStorageCart?.map(p => p.id)
  const cartProducts = useSelector(getProductsByIds(productsIds))
  const [countCartProducts, setCountCartProducts] = useState([])
  const totalCount = countCartProducts.reduce((acc, p) => acc + p.count, 0)
  const totalPrice = countCartProducts.reduce(
    (acc, p) => acc + p.count * p.price,
    0
  )

  useEffect(() => {
    const newArr = cartProducts.map(product => {
      const findProduct = localStorageCart?.filter(p => p.id === product.id)
      return { ...product, count: findProduct[0].count }
    })
    setCountCartProducts(newArr)
  }, [])

  const addProduct = id => {
    setCountCartProducts(prevState => {
      const index = prevState.findIndex(p => p.id === id)
      prevState[index].count++
      return prevState
    })
  }

  const subProduct = id => {
    setCountCartProducts(prevState => {
      const index = prevState.findIndex(p => p.id === id)
      prevState[index].count--
      if (prevState[index].count === 0) {
        return prevState.filter(p => p.id !== id)
      }
      return prevState
    })
  }

  const deleteProduct = id => {
    setCountCartProducts(prevState => prevState.filter(p => p.id !== id))
  }

  const clearCart = () => {
    setCountCartProducts([])
  }

  const functions = {
    addProduct,
    subProduct,
    deleteProduct
  }

  const condition = !localStorageCart || !countCartProducts.length

  return (
    <div>
      <div className='d-flex mb-4'>
        <h2 className='me-5'>Корзина</h2>
        {!condition && <ClearCartButton clearCart={clearCart} />}
      </div>
      {condition ? (
        <EmptyCartInfo />
      ) : (
        <div className='d-flex justify-content-between mt-3'>
          <div style={{ width: 60 + '%' }}>
            <CartList products={countCartProducts} functions={functions} />
          </div>
          <div style={{ width: 35 + '%' }}>
            <CartInfo totalCount={totalCount} totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </div>
  )
}
