import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIsLoggedIn, logOut } from '../../store/usersSlice'

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
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  )
}
