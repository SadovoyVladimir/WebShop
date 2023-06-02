import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import categoriesReducer from './categoriesSlice'
import usersReducer from './usersSlice'

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  users: usersReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
