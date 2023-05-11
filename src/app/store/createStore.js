import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import categoriesReducer from './categoriesSlice'

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
