import React from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import withRouter from './components/ui/hoc/withRouter'
import NavBar from './components/ui/NavBar'
import routes from './routes'
import withRedux from './components/ui/hoc/withRedux'
import AppLoader from './components/ui/hoc/appLoader'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from './store/usersSlice'

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn())
  const location = useLocation()
  const elements = useRoutes(routes(isLoggedIn, location))

  return (
    <>
      <div>
        <NavBar />
        <AppLoader>
          <div className='mx-4 mb-4 bg-light'>{elements}</div>
        </AppLoader>
      </div>
      <ToastContainer />
    </>
  )
}

const AppWithStoreAndRouter = withRedux(withRouter(App))
export default AppWithStoreAndRouter
