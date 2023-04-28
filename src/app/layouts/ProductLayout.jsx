import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProductLayout() {
  return (
    <div>
      <h2>Product layout</h2>
      <Outlet />
    </div>
  )
}
