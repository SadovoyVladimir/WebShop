import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProductLayout() {
  return (
    <div className='mt-4'>
      <Outlet />
    </div>
  )
}
