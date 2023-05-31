import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getIsLoggedIn, logOut } from '../../../store/usersSlice'

export default function LogButton() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn())

  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/')
  }
  const handleClick = () => {
    isLoggedIn ? handleLogOut() : navigate('auth/login')
  }

  return (
    <button type='button' className='btn btn-dark' onClick={handleClick}>
      <i
        className={`bi bi-box-arrow-${isLoggedIn ? 'left' : 'right'} pe-2`}
      ></i>
      {isLoggedIn ? 'Выйти' : 'Войти'}
    </button>
  )
}
