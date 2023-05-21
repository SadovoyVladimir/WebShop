import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'
import TextAreaField from '../common/form/textAreaField'
import SelectField from '../common/form/selectField'
import { useSelector } from 'react-redux'
import { getCategories } from '../../store/categoriesSlice'
import AddImageModal from './addImageModal'

export default function CreateProductForm() {
  const initialData = {
    id: nanoid(),
    title: '',
    description: '',
    price: '',
    category: '',
    image: ''
  }
  const categories = useSelector(getCategories())
  const [isCreateCategory, setCreateCategory] = useState(false)
  const [data, setData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const imageInfo = {
    id: 'addImage',
    image: data.image,
    errImage: errors.image,
    onChange: handleChange
  }
  const validatorConfig = {
    title: {
      isRequired: { message: 'Название обязательно для заполнения' },
      min: {
        message: 'Название должно состоять минимум из 3 символов',
        value: 3
      },
      startWithLetter: {
        message: 'Название должно начинаться с буквы'
      }
    },
    description: {
      isRequired: { message: 'Описание обязательно для заполнения' },
      min: {
        message: 'Описание должно состоять минимум из 3 символов',
        value: 3
      },
      startWithLetter: {
        message: 'Описание должно начинаться с буквы'
      }
    },
    category: {
      isRequired: { message: 'Категория обязательна для заполнения' },
      startWithCapitalLetter: {
        message: 'Категория должна начинаться с заглавной буквы'
      },
      min: {
        message: 'Категория должна состоять минимум из 5 символов',
        value: 5
      }
    },
    price: {
      isRequired: { message: 'Цена обязательна для заполнения' },
      minPrice: {
        message: 'Цена не может быть меньше 0'
      },
      maxPrice: {
        message: 'Цена не может быть больше 1 000 000 000 $'
      }
    },
    image: {
      isRequired: { message: 'Картинка обязательна!' }
    }
  }

  const changeCreateCategoryType = () => {
    if (isCreateCategory)
      setData((prevState) => ({ ...prevState, category: '' }))
    setCreateCategory((prevState) => !prevState)
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return !Object.keys(errors).length
  }

  const isValid = !Object.keys(errors).length

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
    // const newData = { ...data, qualities: data.qualities.map((q) => q.value) }
    // dispatch(signUp(newData))
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Название'
        name='title'
        value={data.title}
        onChange={handleChange}
        error={errors.title}
      />
      <TextAreaField
        label='Описание'
        name='description'
        value={data.description}
        onChange={handleChange}
        error={errors.description}
      />
      <TextField
        label='Цена, $'
        name='price'
        value={data.price}
        type='number'
        onChange={handleChange}
        error={errors.price}
      />
      <div className='mb-3'>
        <h3>Категория</h3>
        {isCreateCategory ? (
          <TextField
            label='Введите название категории'
            name='category'
            value={data.category}
            onChange={handleChange}
            error={errors.category}
          />
        ) : (
          <SelectField
            label='Выберите категорию'
            defaultOption={data.category ? null : 'Choose...'}
            name='category'
            options={categories}
            onChange={handleChange}
            value={data.category}
            error={errors.category}
          />
        )}
        <button
          type='button'
          className='btn btn-primary'
          onClick={changeCreateCategoryType}
        >
          {isCreateCategory ? 'Выбрать' : 'Создать'}
        </button>
      </div>
      <h3>Прикрепить картинку</h3>
      <AddImageModal {...imageInfo} />
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target={'#' + imageInfo.id}
      >
        Выбрать
      </button>
      {/* <TextField
        label='Ссылка на картинку'
        name='image'
        value={data.image}
        onChange={handleChange}
      /> */}
      <div className='d-flex justify-content-center'>
        <button disabled={!isValid} className='btn btn-primary'>
          Create
        </button>
      </div>
    </form>
  )
}
