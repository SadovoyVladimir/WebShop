import React, { useEffect, useState } from 'react'
import Modal from '../common/modal'
import LoadFileField from '../common/form/loadFileField'
import { validator } from '../../utils/validator'

export default function AddImageModal({
  id,
  value,
  onChange,
  name,
  isMultiple
}) {
  const [data, setData] = useState({ imagesInfo: value })
  const [errors, setErrors] = useState({})
  const validatorConfig = {
    imagesInfo: {
      isRequired: { message: 'Картинка обязательна!' }
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

  useEffect(() => {
    setData(prevState => ({ ...prevState, imagesInfo: value }))
  }, [value])

  const isValid = !Object.keys(errors).length

  const handleChange = target => {
    setData(prevState => ({ ...prevState, [target.name]: target.value }))
  }

  const deleteImageInfo = i => {
    setData(prevState => ({
      ...prevState,
      imagesInfo: data.imagesInfo.filter((info, index) => index !== i)
    }))
  }

  const handleCancel = () => {
    setData(prevState => ({ ...prevState, imagesInfo: value }))
  }
  const handleSave = () => {
    onChange({ name, value: data.imagesInfo })
  }

  const info = {
    id,
    title: 'Выберите картинку',
    body: (
      <LoadFileField
        label='Ссылка на картинку'
        name='imagesInfo'
        value={data.imagesInfo}
        onChange={handleChange}
        error={errors.imagesInfo}
        onDelete={deleteImageInfo}
        isMultiple={isMultiple}
      />
    ),
    firstBtnText: 'Сохранить',
    secondBtnText: 'Отмена',
    minWidth: '1000px',
    onCancel: handleCancel,
    onSave: handleSave,
    isValid
  }
  return <Modal {...info} />
}
