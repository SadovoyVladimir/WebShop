import React, { useEffect, useRef } from 'react'
import PreviewImage from '../previewImage'

export default function LoadFileField({
  value,
  name,
  onChange,
  error,
  onDelete,
  isMultiple = true
}) {
  const accept = ['.png', '.jpg', '.jpeg', '.gif']

  const inputRef = useRef(null)

  const handleChange = ({ target }) => {
    const files = Array.from(target.files)
    if (!files.length) return onChange({ name: target.name, value: [] })
    const imageInfo = []
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = ev => {
        imageInfo.push(ev.target.result)
        onChange({ name: target.name, value: imageInfo })
      }
      reader.readAsDataURL(file)
    })
  }

  const handleDelete = i => {
    onDelete(i)
  }
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }
  const handleClick = () => {
    inputRef.current.click()
  }

  useEffect(() => {
    const dt = new DataTransfer()
    inputRef.current.files = dt.files
  }, [value])

  return (
    <div className='mb-4'>
      <div className='input-group has-validation'>
        <input
          ref={inputRef}
          type='file'
          id={name}
          name={name}
          onChange={handleChange}
          className={getInputClasses()}
          multiple={isMultiple}
          accept={accept?.join(',')}
        />
        <button
          className={`btn btn-${error ? 'danger' : 'primary'}`}
          onClick={handleClick}
          type='button'
        >
          {error ? 'Выбрать' : 'Изменить'}
        </button>
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
      {value && <PreviewImage onDelete={handleDelete} value={value} />}
    </div>
  )
}
