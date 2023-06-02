import React from 'react'
import PropTypes from 'prop-types'

export default function AddToCartButton({ addHandler }) {
  return (
    <button
      className='btn btn-primary'
      style={{ width: 120 + 'px' }}
      onClick={addHandler}
    >
      В корзину
    </button>
  )
}

AddToCartButton.propTypes = {
  addHandler: PropTypes.func.isRequired
}
