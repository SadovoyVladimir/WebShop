import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getProductsByIds } from '../../store/productsSlice'
import cartLocalStorageService from '../../services/cartLocalStorage.service'
import CartList from '../ui/cart/cartList'
import EmptyCartInfo from '../ui/cart/emptyCartInfo'
import CartInfo from '../ui/cart/cartInfo'
import ClearCartButton from '../ui/cart/clearCartButton'

export default function CartPage() {
  const localStorageCart = cartLocalStorageService.getCartInfo()
  const productsIds = localStorageCart?.map(p => p._id)
  const cartProducts = useSelector(getProductsByIds(productsIds))
  const [countCartProducts, setCountCartProducts] = useState([])
  const totalCount = countCartProducts.reduce((acc, p) => acc + p.count, 0)
  const totalPrice = countCartProducts.reduce(
    (acc, p) => acc + p.count * p.price,
    0
  )

  useEffect(() => {
    let newArr = []
    if (cartProducts) {
      newArr = cartProducts.map(product => {
        const findProduct = localStorageCart?.filter(p => p._id === product._id)
        return { ...product, count: findProduct[0].count }
      })
    }
    setCountCartProducts(newArr)
  }, [])

  const addProduct = id => {
    setCountCartProducts(prevState => {
      const index = prevState.findIndex(p => p._id === id)
      prevState[index].count++
      return prevState
    })
  }

  const subProduct = id => {
    setCountCartProducts(prevState => {
      const index = prevState.findIndex(p => p._id === id)
      prevState[index].count--
      if (prevState[index].count === 0) {
        return prevState.filter(p => p._id !== id)
      }
      return prevState
    })
  }

  const deleteProduct = id => {
    setCountCartProducts(prevState => prevState.filter(p => p._id !== id))
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
