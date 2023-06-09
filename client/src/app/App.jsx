import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useRoutes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import routes from './routes'
import { getIsLoggedIn } from './store/usersSlice'
import withRouter from './components/ui/hoc/withRouter'
import withRedux from './components/ui/hoc/withRedux'
import AppLoader from './components/ui/hoc/appLoader'
import NavBar from './components/ui/navigation/NavBar'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn())
  const location = useLocation()
  const elements = useRoutes(routes(isLoggedIn, location))

  return (
    <>
      <AppLoader>
        <NavBar />
        <div className='mx-4 mb-4 bg-light'>{elements}</div>
      </AppLoader>
      <ToastContainer />
    </>
  )
}

const AppWithStoreAndRouter = withRedux(withRouter(App))
export default AppWithStoreAndRouter
