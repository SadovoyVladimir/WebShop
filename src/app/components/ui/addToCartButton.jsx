import React from 'react'
import cartLocalStorageService from '../../services/cartLocalStorage.service'

export default function AddToCartButton({ id }) {
  const addToCart = () => {
    cartLocalStorageService.addProductIdToStorage(id)
  }

  return (
    <button className='btn btn-primary' onClick={addToCart}>
      В корзину
    </button>
  )
}
