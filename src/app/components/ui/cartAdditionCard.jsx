import React from 'react'
import AddToCartButton from './addToCartButton'

export default function CartAdditionCard({ price, id }) {
  return (
    <>
      <div className='card border-light'>
        <div className='card-body'>
          <h5 className='card-title'>Price: {price}$</h5>
          <AddToCartButton id={id} />
        </div>
      </div>
    </>
  )
}
