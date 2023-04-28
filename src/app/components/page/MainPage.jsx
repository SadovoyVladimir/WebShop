import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <NavLink to='/category/category1'>Category 1</NavLink>
    </div>
  )
}
