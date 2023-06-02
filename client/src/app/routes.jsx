import React, { Navigate } from 'react-router-dom'
import CategoryLayout from './layouts/CategoryLayout'
import ProductLayout from './layouts/ProductLayout'
import AuthLayout from './layouts/AuthLayout'
import CartLayout from './layouts/CartLayout'
import AddLayout from './layouts/AddLayout'
import SearchLayout from './layouts/SearchLayout'
import MainPage from './components/page/MainPage'
import CategoryPage from './components/page/CategoryPage'
import ProductPage from './components/page/ProductPage'
import LoginPage from './components/page/LoginPage'
import SignUpPage from './components/page/SignUpPage'
import CreateProductPage from './components/page/CreateProductPage'
import EditProductPage from './components/page/EditProductPage'
import AddProductPage from './components/page/AddProductPage'
import CartPage from './components/page/CartPage'
import SearchPage from './components/page/SearchPage'

const routes = (isLoggedIn, location) => [
  { path: '/', element: <MainPage /> },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { path: '', element: <Navigate to='/auth/signup' /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: '*', element: <Navigate to='/auth/signup' /> }
    ]
  },
  {
    path: 'category',
    element: <CategoryLayout />,
    children: [
      { path: '', element: <Navigate to='/' /> },
      { path: ':categoryId', element: <CategoryPage /> }
    ]
  },
  {
    path: 'product',
    element: <ProductLayout />,
    children: [
      { path: '', element: <Navigate to='/' /> },
      { path: ':productId', element: <ProductPage /> }
    ]
  },
  {
    path: 'cart',
    element: <CartLayout />,
    children: [
      { path: '', element: <CartPage /> },
      { path: '*', element: <Navigate to='/cart' /> }
    ]
  },
  {
    path: 'products',
    element: isLoggedIn ? (
      <AddLayout />
    ) : (
      <Navigate to='/auth/login' state={{ referrer: location }} />
    ),
    children: [
      { path: '', element: <AddProductPage /> },
      {
        path: 'edit',
        children: [
          { path: '', element: <Navigate to='/products' /> },
          { path: ':productId', element: <EditProductPage /> }
        ]
      },
      { path: 'create', element: <CreateProductPage /> },
      { path: '*', element: <Navigate to='/products' /> }
    ]
  },
  {
    path: 'search',
    element: <SearchLayout />,
    children: [
      { path: '', element: <Navigate to='/' /> },
      { path: ':search', element: <SearchPage /> }
    ]
  },
  { path: '*', element: <Navigate to='/' /> }
]

export default routes
