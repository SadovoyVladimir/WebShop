import React from 'react'
import withRouter from './components/ui/hoc/withRouter'
import NavBar from './components/ui/NavBar'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import withRedux from './components/ui/hoc/withRedux'
import AppLoader from './components/ui/hoc/appLoader'
import { ToastContainer } from 'react-toastify'

function App() {
  const elements = useRoutes(routes)

  return (
    <>
      <div>
        <NavBar />
        <AppLoader>
          <div className='mx-4 mb-4'>{elements}</div>
        </AppLoader>
      </div>
      <ToastContainer />
    </>
  )
}

const AppWithStoreAndRouter = withRedux(withRouter(App))
export default AppWithStoreAndRouter
