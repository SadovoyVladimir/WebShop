import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../../store/usersSlice'

export default function EmptyCategoryInfo() {
  const isLoggedIn = useSelector(getIsLoggedIn())

  return (
    <div className='container'>
      <p>
        На данный момент в нашем магазине пока нет ни одного товара! Станьте
        продавцом и сможете добавить товар в наш магазин!
      </p>
      <div className='d-flex justify-content-center'>
        {isLoggedIn ? (
          <NavLink to='/products/create'>
            <button className='btn btn-primary'>Добавить</button>
          </NavLink>
        ) : (
          <NavLink to='/auth/signup'>
            <button className='btn btn-primary'>Стать продавцом</button>
          </NavLink>
        )}
      </div>
    </div>
  )
}
