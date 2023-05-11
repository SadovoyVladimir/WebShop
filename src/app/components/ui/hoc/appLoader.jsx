import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadProductsList } from '../../../store/productsSlice'
import { loadCategoriesList } from '../../../store/categoriesSlice'

export default function AppLoader({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProductsList())
    dispatch(loadCategoriesList())
  }, [])

  return children
}
