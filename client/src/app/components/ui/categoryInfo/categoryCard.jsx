import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function CategoryCard({ image, name, _id }) {
  return (
    <div className='col'>
      <div className='card h-100'>
        <img
          src={image}
          className='card-img-top'
          style={{ height: '100%' }}
          alt=''
        />
        <div className='card-body d-flex justify-content-center'>
          <h5 className='card-title'>{name}</h5>
        </div>
        <div className='card-footer footer d-flex justify-content-center'>
          <NavLink to={`/category/${_id}`} className='btn btn-primary'>
            Перейти
          </NavLink>
        </div>
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
}
