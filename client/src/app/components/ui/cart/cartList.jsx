import React from 'react'
import PropTypes from 'prop-types'
import CartProductCard from './cartProductCard'

export default function CartList({ products, functions }) {
  return (
    <>
      {products.map(product => (
        <CartProductCard key={product._id} {...product} {...functions} />
      ))}
    </>
  )
}

CartList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  functions: PropTypes.object.isRequired
}
