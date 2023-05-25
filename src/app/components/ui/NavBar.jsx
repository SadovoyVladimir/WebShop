import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getIsLoggedIn } from '../../store/usersSlice'
import LogButton from '../common/logButton'

export default function NavBar() {
  const navigate = useNavigate()
  const isLoggedIn = useSelector(getIsLoggedIn())
  const [value, setValue] = useState('')
  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  const handleSearch = event => {
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
            <div className='d-flex justify-content-center flex-grow-1'>
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
            <ul className='navbar-nav me-3 mb-2 mb-lg-0'>
              {isLoggedIn && (
                <li className='nav-item'>
                  <NavLink to='/products' className='nav-link'>
                    Products
                  </NavLink>
                </li>
              )}
              <li className='nav-item'>
                <NavLink
                  to='/cart'
                  className='nav-link'
                  style={{ paddingTop: '4px' }}
                >
                  <i className='bi bi-cart' style={{ fontSize: 22 + 'px' }}></i>
                </NavLink>
              </li>
            </ul>
            <div>
              <LogButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
