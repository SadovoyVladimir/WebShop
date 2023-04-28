import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignUpPage() {
  return (
    <div>
      <h2>SignUp Page</h2>
      <form>
        <input type='password' />
      </form>
      <NavLink to='/auth/login'>
        <span>Log in</span>
      </NavLink>
    </div>
  )
}
