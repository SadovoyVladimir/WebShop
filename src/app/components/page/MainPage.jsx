import React from 'react'
import CategoriesList from '../ui/categoriesList'
// import useMockData from '../../utils/mockData'
import { useSelector } from 'react-redux'
import { getCategories } from '../../store/categoriesSlice'

export default function MainPage() {
  const categoriesList = useSelector(getCategories())

  return (
    <div>
      <h1>Main Page</h1>
      {categoriesList && <CategoriesList categories={categoriesList} />}
    </div>
  )
}
