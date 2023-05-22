import React, { useState } from 'react'
import AddSubButton from '../common/addSubButton'
import AddToCartButton from './addToCartButton'
import cartLocalStorageService from '../../services/cartLocalStorage.service'

export default function CartButton({ id }) {
  const cartProducts = cartLocalStorageService.getCartInfo()
  const [quantity, setQuantity] = useState(
    cartProducts?.filter(p => p.id === id)[0]?.count
  )

  const handleAdd = () => {
    setQuantity(prevState => {
      if (!prevState) return 1
      return ++prevState
    })
    cartLocalStorageService.addProductIdToStorage(id)
  }

  const handleSub = () => {
    setQuantity(prevState => --prevState)
    cartLocalStorageService.subProductFromStorage(id)
  }

  return (
    <>
      {quantity ? (
        <AddSubButton
          text={quantity}
          subHandler={handleSub}
          addHandler={handleAdd}
        />
      ) : (
        <AddToCartButton addHandler={handleAdd} />
      )}
    </>
  )
}
