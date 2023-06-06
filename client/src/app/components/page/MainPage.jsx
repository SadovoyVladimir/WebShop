import React from 'react'
import { useSelector } from 'react-redux'
import { getCategories } from '../../store/categoriesSlice'
import CategoriesList from '../ui/categoryInfo/categoriesList'
import EmptyMainPage from '../ui/categoryInfo/emptyMainPage'

export default function MainPage() {
  const categoriesList = useSelector(getCategories())

  return (
    <div className='mt-3'>
      <h1 className='d-flex justify-content-center'>Web Shop</h1>
      {categoriesList?.length ? (
        <CategoriesList categories={categoriesList} />
      ) : (
        <EmptyMainPage />
      )}
    </div>
  )
}
