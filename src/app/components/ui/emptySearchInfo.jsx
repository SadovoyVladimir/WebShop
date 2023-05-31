import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EmptySearchInfo() {
  return (
    <div className='container-fluid d-flex flex-column align-items-center mt-4'>
      <h3>В магазине нет товаров соответствующих поиску!</h3>
      <NavLink to='/'>
        <button className='btn btn-primary'>Вернуться на главную</button>
      </NavLink>
    </div>
  )
}
