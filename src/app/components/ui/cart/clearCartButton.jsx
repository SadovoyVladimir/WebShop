import React from 'react'
import PropTypes from 'prop-types'
import cartLocalStorageService from '../../../services/cartLocalStorage.service'

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

ClearCartButton.propTypes = {
  clearCart: PropTypes.func.isRequired
}
