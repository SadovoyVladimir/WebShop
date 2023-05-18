import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AddLayout() {
  return (
    <div>
      <h2>Add layout</h2>
      <Outlet />
    </div>
  )
}
