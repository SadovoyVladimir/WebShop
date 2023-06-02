import React from 'react'
import PropTypes from 'prop-types'

export default function PreviewImage({ onDelete, value }) {
  return (
    <div className='d-flex flex-wrap py-2 preview'>
      {value?.map((image, index) => (
        <div
          className='preview-image mb-2 me-2'
          key={index}
          style={{ position: 'relative' }}
        >
          <div
            onClick={() => onDelete(index)}
            className='d-flex align-items-center justify-content-center preview-remove'
          >
            &times;
          </div>
          <img
            src={image}
            alt='Картинка'
            style={{ width: 180 + 'px', height: 'auto' }}
          />
        </div>
      ))}
    </div>
  )
}

PreviewImage.propTypes = {
  onDelete: PropTypes.func.isRequired,
  value: PropTypes.array
}
