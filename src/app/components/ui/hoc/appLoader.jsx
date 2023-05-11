import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getProductsLoadingStatus,
  loadProductsList
} from '../../../store/productsSlice'
import {
  getCategoriesLoadingStatus,
  loadCategoriesList
} from '../../../store/categoriesSlice'

export default function AppLoader({ children }) {
  const dispatch = useDispatch()
  const isLoadProducts = useSelector(getProductsLoadingStatus())
  const isLoadCategories = useSelector(getCategoriesLoadingStatus())

  const isLoading = isLoadCategories || isLoadProducts

  useEffect(() => {
    dispatch(loadProductsList())
    dispatch(loadCategoriesList())
  }, [])

  if (isLoading) return 'Loading...'

  return children
}
