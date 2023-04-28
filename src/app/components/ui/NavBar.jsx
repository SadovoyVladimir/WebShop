import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setValue('')
    navigate(`/search`, { state: value })
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-4'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand'>
          WebShop
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/auth/login' className='nav-link'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/cart' className='nav-link'>
                Cart
              </NavLink>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              value={value}
              onChange={handleChange}
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button
              className='btn btn-dark'
              onClick={handleSearch}
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
  return (
    <>
      <nav>
        <h1>
          <NavLink to='/'>
            <span>Main</span>
          </NavLink>
          <span> | </span>
          <NavLink to='/auth/login'>
            <span>Log in</span>
          </NavLink>
          <span> | </span>
          <NavLink to='/cart/user1'>
            <span>Cart</span>
          </NavLink>
          <span> | </span>
          <NavLink to='/user'>
            <span>User</span>
          </NavLink>
          <span> | </span>
          <NavLink to='/user/addition'>
            <span>Add product</span>
          </NavLink>
        </h1>
      </nav>
    </>
  )
}
