import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CartLayout() {
  return (
    <div>
      <h2>Cart layout</h2>
      <Outlet />
    </div>
  )
}
