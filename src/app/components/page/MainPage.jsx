import React from 'react'
import CategoriesList from '../ui/categoriesList'
// import useMockData from '../../utils/mockData'
import { useSelector } from 'react-redux'
import {
  getCategories,
  getCategoriesLoadingStatus
} from '../../store/categoriesSlice'

export default function MainPage() {
  // const { error, initialize, progress, status } = useMockData()
  const isLoading = useSelector(getCategoriesLoadingStatus())
  const categoriesList = useSelector(getCategories())

  // const handleClick = () => {
  // initialize()
  // }

  if (isLoading) return 'Loading...'

  // return (
  //   <>
  //     <div>
  //       <h1>Main Page</h1>
  //       <h3>Initialize data in firebase</h3>
  //       <ul>
  //         <li>Status: {status}</li>
  //         <li>Progress: {progress}%</li>
  //         {error && <li>error: {error}</li>}
  //       </ul>
  //       <button className='btn btn-primary' onClick={handleClick}>
  //         Initialize
  //       </button>
  //     </div>
  //   </>
  // )

  return (
    <div>
      <h1>Main Page</h1>
      <CategoriesList categories={categoriesList} />
      {/* <NavLink to='/category/category1'>Category 1</NavLink> */}
    </div>
  )
}
