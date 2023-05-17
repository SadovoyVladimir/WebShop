import React from 'react'
import cartLocalStorageService from '../../services/cartLocalStorage.service'

export default function ClearCartButton({ clearCart }) {
  const handleDelete = () => {
    cartLocalStorageService.clearCart()
    clearCart()
  }

  return (
    <button className='btn btn-primary d-inline-flex' onClick={handleDelete}>
      Удалить все
    </button>
  )
}
