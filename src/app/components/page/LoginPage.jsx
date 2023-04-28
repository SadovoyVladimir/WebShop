import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <input type='email' />
      </form>
      <NavLink to='/auth/signup'>
        <span>Sign Up</span>
      </NavLink>
    </div>
  )
}
