import React from 'react'
import bytesToSize from '../../utils/bytesToSize'

export default function PreviewImage({ images, files, onDelete }) {
  const handleDelete = () => {}

  return (
    <div className='d-flex flex-wrap p-2 preview'>
      {files.map((file, index) => (
        <div
          className='preview-image mb-2 me-2'
          key={file.lastModified}
          style={{ position: 'relative' }}
        >
          <div
            onClick={handleDelete}
            className='d-flex align-items-center justify-content-center preview-remove'
          >
            &times;
          </div>
          <img
            src={images[index]}
            alt='Картинка'
            style={{ width: 180 + 'px', height: 'auto' }}
          />
          <div className='d-flex align-items-center justify-content-between preview-info'>
            <span>{file.name}</span>
            {bytesToSize(file.size)}
          </div>
        </div>
      ))}
    </div>
  )
}
