import React from 'react'
import CartProductCard from './cartProductCard'

export default function CartList({ products, functions }) {
  return (
    <>
      {products.map((product) => (
        <CartProductCard key={product.id} {...product} {...functions} />
      ))}
    </>
  )
}
