import React from 'react'
import PropTypes from 'prop-types'
import CartButton from '../addToCartButton/cartButton'

export default function CartAdditionCard({ price, id }) {
  return (
    <>
      <div className='card border-light'>
        <div className='card-body'>
          <h5 className='card-title'>Цена: {price} руб.</h5>
          <CartButton id={id} />
        </div>
      </div>
    </>
  )
}

CartAdditionCard.propTypes = {
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}
