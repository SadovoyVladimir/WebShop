import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AddLayout() {
  return (
    <div className='container bg-white'>
      <Outlet />
    </div>
  )
}
