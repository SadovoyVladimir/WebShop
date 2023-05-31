import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EmptyCartInfo() {
  return (
    <div className='container-fluid d-flex flex-column align-items-center mt-4'>
      <h5>В вашей корзине ещё нет товаров!</h5>
      <NavLink to='/'>
        <button className='btn btn-primary'>Вернуться на главную</button>
      </NavLink>
    </div>
  )
}
