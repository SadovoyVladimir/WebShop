import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function NameInfo({ name, _id }) {
  return (
    <div className='name-info'>
      <NavLink to={`/product/${_id}`}>
        <p className='name-info__body trim-extra-text'>{name}</p>
      </NavLink>
    </div>
  )
}

NameInfo.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
}
