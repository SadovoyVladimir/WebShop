import { createAction, createSlice } from '@reduxjs/toolkit'
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
    },
    categoryCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = []
      }
      state.entities.push(action.payload)
    }
  }
})
const { reducer: categoriesReducer, actions } = categoriesSlice

const {
  categoriesRequested,
  categoriesRecieved,
  categoriesRequestFailed,
  categoryCreated
} = actions

const categoryCreateRequested = createAction(
  'categories/categoryCreateRequested'
)
const createCategoryFailed = createAction('categories/createCategoryFailed')

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

export const createCategory = payload => {
  return async function (dispatch) {
    dispatch(categoryCreateRequested())
    try {
      const { content } = await categoriesService.create(payload)
      dispatch(categoryCreated({ ...payload, _id: content._id }))
      return content._id
    } catch (error) {
      dispatch(createCategoryFailed(error.message))
    }
  }
}

export const getCategories = () => state => state.categories.entities
export const getCategoriesLoadingStatus = () => state =>
  state.categories.isLoading
export const getCategoryById = categoryId => state => {
  if (state.categories.entities) {
    let category = {}
    for (const cat of state.categories.entities) {
      if (cat._id === categoryId) {
        category = cat
        break
      }
    }
    return category
  }
  return []
}

export default categoriesReducer
