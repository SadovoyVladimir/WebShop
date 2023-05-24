import { createAction, createSlice } from '@reduxjs/toolkit'
import productsService from '../services/products.service'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    productsRequested: state => {
      state.isLoading = true
    },
    productsRecieved: (state, action) => {
      state.entities = action.payload
      state.lastFetch = Date.now()
      state.isLoading = false
    },
    productsRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    productCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = []
      }
      state.entities.push(action.payload)
    },
    productUpdated: (state, action) => {
      const index = state.entities.findIndex(u => u.id === action.payload.id)
      state.entities[index] = { ...state.entities[index], ...action.payload }
    },
    productRemoved: (state, action) => {
      state.entities = state.entities.filter(c => c.id !== action.payload)
    }
  }
})
const { reducer: productsReducer, actions } = productsSlice

const {
  productsRequested,
  productsRecieved,
  productsRequestFailed,
  productCreated,
  productUpdated,
  productRemoved
} = actions

const productCreateRequested = createAction('products/productCreateRequested')
const createProductFailed = createAction('products/createProductFailed')
const productUpdateRequested = createAction('products/productUpdateRequested')
const updateProductFailed = createAction('products/updateProductFailed')
const productRemoveRequested = createAction('products/productRemoveRequested')
const removeProductFailed = createAction('products/removeProductFailed')

function isOutdated(date) {
  if (Date.now() - date > 10 * 60 * 1000) {
    return true
  }
  return false
}

export const loadProductsList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().products

  if (isOutdated(lastFetch)) {
    dispatch(productsRequested())
    try {
      const { content } = await productsService.get()
      dispatch(productsRecieved(content))
    } catch (error) {
      dispatch(productsRequestFailed(error.message))
    }
  }
}

export const createProduct = payload => {
  return async function (dispatch) {
    dispatch(productCreateRequested())
    try {
      await productsService.create(payload)
      dispatch(productCreated(payload))
    } catch (error) {
      dispatch(createProductFailed(error.message))
    }
  }
}

export const updateProduct = payload => {
  return async function (dispatch) {
    dispatch(productUpdateRequested())
    try {
      await productsService.update(payload)
      dispatch(productUpdated(payload))
    } catch (error) {
      dispatch(updateProductFailed())
    }
  }
}

export const removeProduct = productId => async dispatch => {
  dispatch(productRemoveRequested())
  try {
    const { content } = await productsService.removeProduct(productId)
    if (content === null) {
      dispatch(productRemoved(productId))
    }
  } catch (error) {
    dispatch(removeProductFailed(error.message))
  }
}

export const getProducts = () => state => state.products.entities
export const getProductsLoadingStatus = () => state => state.products.isLoading
export const getProductById = productId => state => {
  if (state.products.entities) {
    let product
    for (const prod of state.products.entities) {
      if (prod.id === productId) {
        product = prod
        break
      }
    }
    return product
  }
  return []
}
export const getProductsByIds = productsIds => state => {
  if (state.products.entities) {
    let products = []
    productsIds?.forEach(id => {
      for (const prod of state.products.entities) {
        if (id === prod.id) {
          products.push(prod)
          break
        }
      }
    })
    return products
  }
}
export const getProductsByCategoryId = categoryId => state => {
  if (state.products.entities) {
    let products = []
    for (const prod of state.products.entities) {
      if (prod.category === categoryId) {
        products.push(prod)
      }
    }
    return products
  }
  return []
}

export default productsReducer
