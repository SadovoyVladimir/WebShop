import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CartLayout() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-12 shadow p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
