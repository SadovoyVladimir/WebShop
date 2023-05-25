import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginForm from '../ui/loginForm'

export default function LoginPage() {
  return (
    <>
      <h3 className='mb-4'>Login</h3>
      <LoginForm />
      <p>
        Don't have an account? <NavLink to='/auth/signup'>Sign Up</NavLink>
      </p>
    </>
  )
}
