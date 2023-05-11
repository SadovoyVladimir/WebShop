import React from 'react'

export default function CartAdditionCard({ price }) {
  return (
    <>
      <div className='card border-light'>
        <div className='card-body'>
          <h5 className='card-title'>Price: {price}$</h5>
          <button className='btn btn-primary'>В корзину</button>
        </div>
      </div>
    </>
  )
}
