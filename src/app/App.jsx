import React from 'react'
import withRouter from './components/ui/hoc/withRouter'
import NavBar from './components/ui/NavBar'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
  const elements = useRoutes(routes)

  return (
    <>
      <NavBar />
      <div className='font-bold mx-8 my-4'>{elements}</div>
    </>
  )
}

const AppWithRouter = withRouter(App)
export default AppWithRouter
