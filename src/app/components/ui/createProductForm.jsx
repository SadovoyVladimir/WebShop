import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'
import TextAreaField from '../common/form/textAreaField'
import SelectField from '../common/form/selectField'
import {
  createCategory,
  getCategories,
  getCategoryById
} from '../../store/categoriesSlice'
import AddImageModal from './addImageModal'
import PreviewImage from '../common/previewImage'
import CreateCategory from './createCategory'
import { createProduct, updateProduct } from '../../store/productsSlice'

export default function CreateProductForm({ product }) {
  const categories = useSelector(getCategories())
  let initialData = {
    id: nanoid(),
    name: '',
    description: '',
    price: '',
    category: '',
    imagesInfo: []
  }
  const category = useSelector(getCategoryById(product?.category))
  if (product) {
    initialData = { ...product }
    initialData.category = category.name
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isCreateCategory, setCreateCategory] = useState(false)
  const [data, setData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const newCategory = { id: nanoid(), name: data.category, imageInfo: [] }
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
        value: 3
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
        message: 'Цена не может быть больше 1 000 000 000 $'
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

  const handleSubmit = e => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    const categoriesNames = categories?.map(category => category.name)
    const newData = { ...data }
    if (data.category.name) {
      if (!categories || !categoriesNames.includes(data.category.name)) {
        const newCategory = {
          id: data.category.id,
          name: data.category.name,
          image: Array.from(data.category.imageInfo)[0]
        }
        newData.category = newCategory.id
        // console.log(newCategory)
        dispatch(createCategory(newCategory))
      }
    } else {
      const catIndex = categoriesNames.findIndex(
        catName => catName === data.category
      )
      newData.category = categories[catIndex].id
      newData.price = +newData.price
    }
    // console.log(newData)
    if (product) {
      dispatch(updateProduct(newData)).then(navigate('addition'))
    } else {
      dispatch(createProduct(newData)).then(navigate('addition'))
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
        label='Цена, $'
        name='price'
        value={data.price}
        type='number'
        onChange={handleChange}
        error={errors.price}
      />
      <div className='mb-3'>
        <h3>Категория</h3>
        {!isCreateCategory && categories ? (
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
        <button
          type='button'
          className='btn btn-primary'
          onClick={changeCreateCategoryType}
        >
          {isCreateCategory ? 'Выбрать категорию' : 'Создать'}
        </button>
      </div>
      <div>
        <h3>Добавить картинку(и)</h3>
        <AddImageModal {...imageInfo} />
        <button
          type='button'
          className={`btn btn-${errors.imagesInfo ? 'danger' : 'primary'}`}
          data-bs-toggle='modal'
          data-bs-target={'#' + imageInfo.id}
        >
          {data.imagesInfo.length ? 'Изменить' : 'Выбрать'}
        </button>
        {errors.imagesInfo && (
          <div className='no-valid'>{errors.imagesInfo}</div>
        )}
        {!!data.imagesInfo.length && (
          <PreviewImage onDelete={deleteImageInfo} value={data.imagesInfo} />
        )}
      </div>
      <div className='d-flex justify-content-center'>
        <button disabled={!isValid} className='btn btn-primary'>
          {product ? 'Сохранить' : 'Создать'}
        </button>
      </div>
    </form>
  )
}
