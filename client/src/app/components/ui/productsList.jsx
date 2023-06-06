import React, { useState } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import ProductCard from './productCard'

export default function ProductsList({ products }) {
  const [sortBy, setSortBy] = useState({ path: 'price', order: 'desc' })
  const sortedProducts = _.orderBy(products, [sortBy.path], [sortBy.order])

  const handleSort = item => {
    if (sortBy.path === item) {
      setSortBy({
        ...sortBy,
        order: sortBy.order === 'desc' ? 'asc' : 'desc'
      })
    } else {
      setSortBy({ path: item, order: 'desc' })
    }
  }

  const renderSortArrow = path => {
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
        Сортировать по:{' '}
        <span
          {...{ role: sortBy.path && 'button' }}
          onClick={() => handleSort('price')}
        >
          цене
          {renderSortArrow('price')}
        </span>
      </p>
      {sortedProducts.map(p => (
        <ProductCard key={p._id} {...p} />
      ))}
    </>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}
