import React from 'react'
import { NavLink } from 'react-router-dom'
import AddToCartButton from './addToCartButton'

export default function ProductCard({ title, price, images, description, id }) {
  return (
    <div className='card mb-3' style={{ maxWidth: 100 + '%' }}>
      <div className='row g-0'>
        <div className='col-md-2'>
          <NavLink to={`/product/${id}`}>
            <img
              src={images[0]}
              className='img-fluid rounded-start'
              alt='no images'
            />
          </NavLink>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <NavLink
              to={`/product/${id}`}
              className='text-decoration-none text-reset'
            >
              <h5 className='card-title'>{title}</h5>
            </NavLink>
            <p className='card-text'>{description}</p>
            <p className='card-text'>{id}</p>
          </div>
        </div>
        <div className='col-md-2 text-center'>
          <p className='card-text mt-2'>
            <small className='text-muted'>Price: {price}$</small>
          </p>
          <AddToCartButton id={id} />
        </div>
      </div>
    </div>
  )
}
