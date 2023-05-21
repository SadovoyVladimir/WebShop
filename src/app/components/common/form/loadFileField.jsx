import React, { useRef, useState } from 'react'
import PreviewImage from '../previewImage'

export default function LoadFileField({ value, name, onChange, error }) {
  const accept = ['.png', '.jpg', '.jpeg', '.gif']

  const [images, setImages] = useState(null)
  const [files, setFiles] = useState(null)
  const inputRef = useRef(null)

  const handleChange = ({ target }) => {
    setImages(null)
    setFiles(null)
    const files = Array.from(target.files)
    onChange({ name: target.name, value: target.value })
    if (!files) return
    setFiles(files)
    const imageArr = []
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (ev) => {
        imageArr.push(ev.target.result)
        setImages(imageArr)
      }
      reader.readAsDataURL(file)
    })
  }

  const handleDelete = (i) => {
    setImages((prevState, index) => {
      console.log(prevState, index)
      return prevState
    })
  }

  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }

  return (
    <div className='mb-4'>
      <div className='input-group has-validation'>
        <input
          ref={inputRef}
          type='file'
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
          multiple={true}
          accept={accept?.join(',')}
        />
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
      {!images ? <></> : <PreviewImage images={images} files={files} />}
    </div>
  )
}
