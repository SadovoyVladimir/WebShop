import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import TextField from '../common/form/textField'
import AddImageModal from './addImageModal'
import { validator } from '../../utils/validator'
import PreviewImage from '../common/previewImage'

export default function CreateCategory({ value, onChange }) {
  const [data, setData] = useState({
    id: nanoid(),
    name: value.name || '',
    imageInfo: []
  })
  const handleChange = target => {
    const newState = { ...data, [target.name]: target.value }
    onChange({ name: 'category', value: newState })
    setData(newState)
  }
  const [errors, setErrors] = useState({})
  const imageInfo = {
    id: 'addCategoryImage',
    value: data.imageInfo,
    name: 'imageInfo',
    isMultiple: false,
    onChange: handleChange
  }
  const validatorConfig = {
    name: {
      isRequired: { message: 'Категория обязательна для заполнения' },
      startWithCapitalLetter: {
        message: 'Категория должна начинаться с заглавной буквы'
      },
      min: {
        message: 'Категория должна состоять минимум из 3 символов',
        value: 3
      },
      max: {
        message: 'Категория должна не может быть больше чем 25 символов',
        value: 25
      }
    },
    imageInfo: {
      isRequired: { message: 'Картинка обязательна' }
    }
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return !Object.keys(errors).length
  }

  useEffect(() => {
    validate()
  }, [data])

  const deleteImageInfo = i => {
    const newImageInfo = data.imageInfo.filter((info, index) => index !== i)
    setData(prevState => ({
      ...prevState,
      imageInfo: newImageInfo
    }))
    onChange({ name: 'category', value: { ...data, imageInfo: newImageInfo } })
  }

  return (
    <div className='mb-2'>
      <TextField
        label='Введите название категории'
        name='name'
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <AddImageModal {...imageInfo} />
      <button
        type='button'
        className={`btn btn-${errors.imageInfo ? 'danger' : 'primary'}`}
        data-bs-toggle='modal'
        data-bs-target={'#' + imageInfo.id}
      >
        {data.imageInfo.length ? 'Изменить' : 'Выбрать картинку'}
      </button>
      {errors.imageInfo && <div className='no-valid'>{errors.imageInfo}</div>}
      {!!data.imageInfo.length && (
        <PreviewImage onDelete={deleteImageInfo} value={data.imageInfo} />
      )}
    </div>
  )
}
