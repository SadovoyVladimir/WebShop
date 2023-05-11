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
    navigate(`/search/${value}`, { state: value })
    setValue('')
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-2'>
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
            {/* <div class='dropdown'>
              <button
                class='btn btn-primary'
                type='button'
                id='dropdownMenu2'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
              <span className='navbar-toggler-icon'></span>
              </button>
              <ul class='dropdown-menu' aria-labelledby='dropdownMenu2'>
                <li>
                  <button class='dropdown-item' type='button'>
                    Action
                  </button>
                </li>
                <li>
                  <button class='dropdown-item' type='button'>
                    Another action
                  </button>
                </li>
                <li>
                  <button class='dropdown-item' type='button'>
                    Something else here
                  </button>
                </li>
              </ul>
            </div> */}
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {/* <li className='nav-item'>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            </li> */}
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
              <li className='nav-item'>
                <NavLink to='/user' className='nav-link'>
                  User
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/user/addition' className='nav-link'>
                  Add product
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
    </>
  )
}
