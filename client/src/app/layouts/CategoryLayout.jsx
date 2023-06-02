import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CategoryLayout() {
  return (
    <div className='mt-4'>
      <Outlet />
    </div>
  )
}
