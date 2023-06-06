import React from 'react'
import PropTypes from 'prop-types'
import CartButton from '../addToCartButton/cartButton'

export default function CartAdditionCard({ price, _id }) {
  return (
    <>
      <div className='card border-light'>
        <div className='card-body'>
          <h5 className='card-title'>Цена: {price} руб.</h5>
          <CartButton id={_id} />
        </div>
      </div>
    </>
  )
}

CartAdditionCard.propTypes = {
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired
}
