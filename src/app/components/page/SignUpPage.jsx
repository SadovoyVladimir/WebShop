import React from 'react'
import { NavLink } from 'react-router-dom'
import RegisterForm from '../ui/registerForm'

export default function SignUpPage() {
  return (
    <>
      <h3 className='mb-4'>Register</h3>
      <RegisterForm />
      <p>
        Already have an account? <NavLink to='/auth/login'>Log in</NavLink>
      </p>
    </>
  )
}
