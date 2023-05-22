import { createSlice } from '@reduxjs/toolkit'
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
    }
  }
})
const { reducer: productsReducer, actions } = productsSlice

const { productsRequested, productsRecieved, productsRequestFailed } = actions

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

export const getProducts = () => state => state.products.entities
export const getProductsLoadingStatus = () => state => state.products.isLoading
export const getProductById = productId => state => {
  if (state.products.entities) {
    let product
    for (const prod of state.products.entities) {
      if (prod.id === +productId) {
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
      if (prod.category.id === +categoryId) {
        products.push(prod)
      }
    }
    return products
  }
  return []
}

export default productsReducer
