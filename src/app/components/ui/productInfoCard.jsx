import React from 'react'

export default function ProductInfoCard({ images, id, description, category }) {
  return (
    <>
      <div className='card mb-3'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={images[0]} className='img-fluid rounded-start' alt='' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>Описание</h5>
              <p className='card-text'>{description}</p>
              <h5>Категория: </h5>
              <p>{category.name}</p>
              <p className='card-text'>
                <small className='text-muted'>id: {id}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}