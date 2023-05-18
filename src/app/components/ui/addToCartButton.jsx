import React from 'react'

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
