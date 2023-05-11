import React, { useState } from 'react'
import ProductCard from './productCard'
import _ from 'lodash'

export default function ProductsList({ products }) {
  const [sortBy, setSortBy] = useState({ path: 'price', order: 'asc' })
  const sortedProducts = _.orderBy(products, [sortBy.path], [sortBy.order])

  const handleSort = (item) => {
    if (sortBy.path === item) {
      setSortBy({
        ...sortBy,
        order: sortBy.order === 'asc' ? 'desc' : 'asc'
      })
    } else {
      setSortBy({ path: item, order: 'asc' })
    }
  }

  const renderSortArrow = (path) => {
    if (path === sortBy.path) {
      return (
        <i
          className={
            'bi bi-caret-' + (sortBy.order === 'asc' ? 'up' : 'down') + '-fill'
          }
        ></i>
      )
    }
    return null
  }

  return (
    <>
      <p>
        Sort by:{' '}
        <span
          {...{ role: sortBy.path && 'button' }}
          onClick={() => handleSort('price')}
        >
          price
          {renderSortArrow('price')}
        </span>
      </p>
      {sortedProducts.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </>
  )
}
