import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginForm from '../ui/authentication/loginForm'

export default function LoginPage() {
  return (
    <>
      <h3 className='mb-4'>Войти</h3>
      <LoginForm />
      <p className='mt-2'>
        Ещё нет аккаунта?{' '}
        <NavLink to='/auth/signup'>Зарегистрироваться</NavLink>
      </p>
    </>
  )
}
