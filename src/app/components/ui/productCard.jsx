import React from 'react'

export default function ProductCard({ title, price, images, description }) {
  return (
    <div className='card mb-3' style={{ maxWidth: 100 + '%' }}>
      <div className='row g-0'>
        <div className='col-md-2'>
          <img
            src={images[0]}
            className='img-fluid rounded-start'
            alt='no images'
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
          </div>
        </div>
        <div className='col-md-2 text-center'>
          <p className='card-text mt-2'>
            <small className='text-muted'>Price: {price}$</small>
          </p>
          <button className='btn btn-primary'>В корзину</button>
        </div>
      </div>
    </div>
  )
}
