import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CategoriesList from '../ui/categoriesList'

export default function MainPage() {
  const [categories, setCategories] = useState(null)
  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const response = await axios.get(
      'https://api.escuelajs.co/api/v1/categories'
    )
    setCategories(response.data)
    console.log(response.data)
  }

  return (
    <div>
      <h1>Main Page</h1>
      {categories && <CategoriesList categories={categories} />}

      {/* <NavLink to='/category/category1'>Category 1</NavLink> */}
    </div>
  )
}
