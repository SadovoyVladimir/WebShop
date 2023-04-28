import React from 'react'
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
  return (
    <div>
      <h2>User layout</h2>
      <Outlet />
    </div>
  )
}
