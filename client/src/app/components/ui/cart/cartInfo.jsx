import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function CartInfo({ totalCount, totalPrice }) {
  return (
    <div className='card'>
      <div className='card-body'>
        <p className='card-text'>Всего товаров в корзине: {totalCount}</p>
        <div className='d-flex justify-content-between mb-3'>
          <h2 className='card-title'>Итого</h2>
          <h2 className='card-title'>{totalPrice} руб.</h2>
        </div>
        <NavLink to={`/`} className='btn btn-primary'>
          Оформить
        </NavLink>
      </div>
    </div>
  )
}

CartInfo.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired
}
