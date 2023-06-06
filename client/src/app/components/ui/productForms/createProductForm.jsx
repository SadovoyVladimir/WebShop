import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { createProduct, updateProduct } from '../../../store/productsSlice'
import { getCurrentUserId } from '../../../store/usersSlice'
import {
  createCategory,
  getCategories,
  getCategoryById
} from '../../../store/categoriesSlice'
import TextField from '../../common/form/textField'
import TextAreaField from '../../common/form/textAreaField'
import SelectField from '../../common/form/selectField'
import PreviewImage from '../../common/previewImage'
import AddImageModal from './addImageModal'
import CreateCategory from './createCategory'
import { validator } from '../../../utils/validator'

export default function CreateProductForm({ product }) {
  const userId = useSelector(getCurrentUserId())
  const categories = useSelector(getCategories())
  let initialData = {
    name: '',
    description: '',
    price: '',
    category: '',
    imagesInfo: []
  }
  const category = useSelector(getCategoryById(product?.category))
  if (!categories.length) {
    initialData.category = { name: '' }
  }
  if (product) {
    initialData = { ...product }
    initialData.category = category.name
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isCreateCategory, setCreateCategory] = useState(!categories.length)
  const [data, setData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const newCategory = { name: data.category, imageInfo: [] }

  const handleChange = target => {
    setData(prevState => ({ ...prevState, [target.name]: target.value }))
  }

  const imageInfo = {
    id: 'addProductImage',
    value: data.imagesInfo,
    name: 'imagesInfo',
    onChange: handleChange
  }

  const validatorConfig = {
    name: {
      isRequired: { message: 'Название обязательно для заполнения' },
      startWithLetter: {
        message: 'Название должно начинаться с буквы'
      }
    },
    description: {
      isRequired: { message: 'Описание обязательно для заполнения' },
      startWithLetter: {
        message: 'Описание должно начинаться с буквы'
      },
      min: {
        message: 'Описание должно состоять минимум из 3 символов',
        value: 5
      }
    },
    category: {
      isRequired: { message: 'Категория обязательна для заполнения' },
      isCategory: { message: 'Категория обязательна для заполнения' }
    },
    price: {
      isRequired: { message: 'Цена обязательна для заполнения' },
      minPrice: {
        message: 'Цена не может быть меньше 0'
      },
      maxPrice: {
        message: 'Цена не может быть больше 1 000 000 000 руб.'
      }
    },
    imagesInfo: {
      isRequired: { message: 'Картинка обязательна!' }
    }
  }

  const changeCreateCategoryType = () => {
    isCreateCategory
      ? setData(prevState => ({ ...prevState, category: '' }))
      : setData(prevState => ({ ...prevState, category: newCategory }))
    setCreateCategory(prevState => !prevState)
  }

  const deleteImageInfo = i => {
    setData(prevState => ({
      ...prevState,
      imagesInfo: data.imagesInfo.filter((info, index) => index !== i)
    }))
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

  const handleSubmit = async e => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    const categoriesNames = categories?.map(category => category.name)
    const newData = { ...data, userId, price: +data.price }
    if (data.category.name) {
      if (!categories.length || !categoriesNames.includes(data.category.name)) {
        const newCategory = {
          name: data.category.name,
          image: Array.from(data.category.imageInfo)[0]
        }
        const categoryId = await dispatch(createCategory(newCategory))
        newData.category = categoryId
      } else {
        const findCategory = categories.find(
          cat => cat.name === data.category.name
        )
        newData.category = findCategory._id
      }
    } else {
      const catIndex = categoriesNames.findIndex(
        catName => catName === data.category
      )
      newData.category = categories[catIndex]._id
    }
    if (product) {
      dispatch(updateProduct(newData)).then(() => navigate('/products'))
    } else {
      dispatch(createProduct(newData)).then(() => navigate('/products'))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Название'
        name='name'
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextAreaField
        label='Описание'
        name='description'
        value={data.description}
        onChange={handleChange}
        error={errors.description}
      />
      <TextField
        label='Цена, руб.'
        name='price'
        value={data.price}
        type='number'
        onChange={handleChange}
        error={errors.price}
      />
      <div className='mb-3'>
        <div className='d-flex justify-content-between'>
          <h3 className='me-3'>Категория</h3>
          {!!categories.length && (
            <button
              type='button'
              className='btn btn-primary'
              onClick={changeCreateCategoryType}
            >
              {isCreateCategory ? 'Выбрать категорию' : 'Создать'}
            </button>
          )}
        </div>
        {!isCreateCategory && categories.length ? (
          <SelectField
            label='Выберите категорию'
            defaultOption={data.category ? null : 'Choose...'}
            name='category'
            options={categories}
            onChange={handleChange}
            value={data.category}
            error={errors.category}
          />
        ) : (
          <CreateCategory value={data.category} onChange={handleChange} />
        )}
      </div>
      <div>
        <h3 className='me-3 mb-3'>Добавить картинку(и) товара</h3>
        {!!data.imagesInfo.length && (
          <PreviewImage onDelete={deleteImageInfo} value={data.imagesInfo} />
        )}
        <button
          type='button'
          className={`btn btn-${errors.imagesInfo ? 'danger' : 'primary'} me-2`}
          data-bs-toggle='modal'
          data-bs-target={'#' + imageInfo.id}
        >
          {data.imagesInfo.length ? 'Изменить' : 'Выбрать'}
        </button>
        {errors.imagesInfo && (
          <div className='no-valid d-flex align-items-center'>
            {errors.imagesInfo}
          </div>
        )}
        <AddImageModal {...imageInfo} />
      </div>
      <div className='d-flex justify-content-center'>
        <button disabled={!isValid} className='btn btn-primary'>
          {product ? 'Сохранить' : 'Создать'}
        </button>
      </div>
    </form>
  )
}

CreateProductForm.propTypes = {
  product: PropTypes.object
}
