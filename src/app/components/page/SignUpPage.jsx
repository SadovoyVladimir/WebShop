import React from 'react'
import { NavLink } from 'react-router-dom'
import RegisterForm from '../ui/authentication/registerForm'

export default function SignUpPage() {
  return (
    <>
      <h3 className='mb-4'>Стать продавцом</h3>
      <RegisterForm />
      <p className='mt-2'>
        Уже есть аккаунт? <NavLink to='/auth/login'>Войти</NavLink>
      </p>
    </>
  )
}
