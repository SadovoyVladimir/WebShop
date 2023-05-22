import { createSlice } from '@reduxjs/toolkit'
import categoriesService from '../services/categories.service'

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    categoriesRequested: state => {
      state.isLoading = true
    },
    categoriesRecieved: (state, action) => {
      state.entities = action.payload
      state.lastFetch = Date.now()
      state.isLoading = false
    },
    categoriesRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})
const { reducer: categoriesReducer, actions } = categoriesSlice

const { categoriesRequested, categoriesRecieved, categoriesRequestFailed } =
  actions

function isOutdated(date) {
  if (Date.now() - date > 10 * 60 * 1000) {
    return true
  }
  return false
}

export const loadCategoriesList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().categories

  if (isOutdated(lastFetch)) {
    dispatch(categoriesRequested())
    try {
      const { content } = await categoriesService.get()
      dispatch(categoriesRecieved(content))
    } catch (error) {
      dispatch(categoriesRequestFailed(error.message))
    }
  }
}

export const getCategories = () => state => state.categories.entities
export const getCategoriesLoadingStatus = () => state =>
  state.categories.isLoading
export const getCategoryById = categoryId => state => {
  if (state.categories.entities) {
    let category
    for (const cat of state.categories.entities) {
      if (cat.id === +categoryId) {
        category = cat
        break
      }
    }
    return category
  }
  return []
}

export default categoriesReducer
