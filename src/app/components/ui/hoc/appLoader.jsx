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
import SpinnerLoader from '../../common/SpinnerLoader'
import {
  getIsLoggedIn,
  getUsersLoadingStatus,
  loadUsersList
} from '../../../store/usersSlice'

export default function AppLoader({ children }) {
  const dispatch = useDispatch()
  const isLoadProducts = useSelector(getProductsLoadingStatus())
  const isLoadCategories = useSelector(getCategoriesLoadingStatus())
  const isLoadUsers = useSelector(getUsersLoadingStatus())
  const isLoggedIn = useSelector(getIsLoggedIn())

  const isLoading = isLoadCategories || isLoadProducts || isLoadUsers

  useEffect(() => {
    dispatch(loadProductsList())
    dispatch(loadCategoriesList())
    if (isLoggedIn) {
      dispatch(loadUsersList())
    }
  }, [dispatch, isLoggedIn])

  if (isLoading) return <SpinnerLoader />

  return children
}
