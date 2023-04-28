import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CategoryLayout() {
  return (
    <div>
      <h2>Category layout</h2>
      <Outlet />
    </div>
  )
}
