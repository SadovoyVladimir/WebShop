import React from 'react'

export default function PreviewImage({ onDelete, value }) {
  const handleDelete = i => {
    onDelete(i)
  }

  return (
    <div className='d-flex flex-wrap p-2 preview'>
      {value?.map((image, index) => (
        <div
          className='preview-image mb-2 me-2'
          key={index}
          style={{ position: 'relative' }}
        >
          <div
            onClick={() => handleDelete(index)}
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
