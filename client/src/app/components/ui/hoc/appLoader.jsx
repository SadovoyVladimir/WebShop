import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import {
  getProductsLoadingStatus,
  loadProductsList
} from '../../../store/productsSlice'
import {
  getCategoriesLoadingStatus,
  loadCategoriesList
} from '../../../store/categoriesSlice'
import {
  getIsLoggedIn,
  getUsersLoadingStatus,
  loadUsersList
} from '../../../store/usersSlice'
import SpinnerLoader from '../../common/SpinnerLoader'

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
    dispatch(loadUsersList())
  }, [dispatch, isLoggedIn])

  if (isLoading) return <SpinnerLoader />

  return children
}

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
