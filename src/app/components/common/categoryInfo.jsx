import React from 'react'
import { useSelector } from 'react-redux'
import { getCategoryById } from '../../store/categoriesSlice'

export default function CategoryInfo({ categoryId }) {
  const { name } = useSelector(getCategoryById(categoryId))

  return <p className='trim-extra-text'>{name || 'Нет названия'}</p>
}
