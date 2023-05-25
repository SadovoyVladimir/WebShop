import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NameInfo({ name, id }) {
  return (
    <div className='name-info'>
      <NavLink to={`/product/${id}`}>
        <p className='name-info__body trim-extra-text'>{name}</p>
      </NavLink>
    </div>
  )
}
