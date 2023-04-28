import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CategoryCard({ image, name, id }) {
  return (
    <div className='col'>
      <div className='card h-100'>
        <img src={image} className='card-img-top' alt='' />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
        </div>
        <div className='card-footer footer'>
          <NavLink to={`/category/${id}`} className='btn btn-primary'>
            Go to {name}
          </NavLink>
        </div>
      </div>
    </div>
  )
}
