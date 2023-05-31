import React from 'react'

export default function SpinnerLoader() {
  return (
    <div className='d-flex justify-content-center position-absolute top-50 start-50 translate-middle'>
      <div
        className='spinner-border'
        role='status'
        style={{ width: '5rem', height: '5rem' }}
      >
        <span className='sr-only'></span>
      </div>
    </div>
  )
}
