import React from 'react'
import ProductCard from './productCard'

export default function ProductsList({ products }) {
  console.log(products)

  return (
    <>
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </>
  )
}
