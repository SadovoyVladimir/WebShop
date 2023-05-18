import React from 'react'
import CartButton from './cartButton'

export default function CartAdditionCard({ price, id }) {
  return (
    <>
      <div className='card border-light'>
        <div className='card-body'>
          <h5 className='card-title'>Price: {price}$</h5>
          <CartButton id={id} />
        </div>
      </div>
    </>
  )
}
