import { Navigate } from 'react-router-dom'
import CategoryLayout from './layouts/CategoryLayout'
import ProductLayout from './layouts/ProductLayout'
import AuthLayout from './layouts/AuthLayout'
import CartLayout from './layouts/CartLayout'
import UserLayout from './layouts/UserLayout'
import SearchLayout from './layouts/SearchLayout'
import MainPage from './components/page/MainPage'
import CategoryPage from './components/page/CategoryPage'
import ProductPage from './components/page/ProductPage'
import LoginPage from './components/page/LoginPage'
import SignUpPage from './components/page/SignUpPage'
import UserPage from './components/page/UserPage'
import EditUserPage from './components/page/EditUserPage'
import AddProductPage from './components/page/AddProductPage'
import CartPage from './components/page/CartPage'
import SearchPage from './components/page/SearchPage'

const routes = [
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
    path: 'user',
    element: <UserLayout />,
    children: [
      { path: '', element: <UserPage /> },
      { path: 'edit', element: <EditUserPage /> },
      { path: 'addition', element: <AddProductPage /> },
      { path: '*', element: <Navigate to='' /> }
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
