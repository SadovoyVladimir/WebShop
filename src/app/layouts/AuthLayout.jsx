import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div>
      <h2>Auth layout</h2>
      <Outlet />
    </div>
  )
}
