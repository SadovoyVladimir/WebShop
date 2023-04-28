import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SearchLayout() {
  return (
    <div>
      <h2>Search layout</h2>
      <Outlet />
    </div>
  )
}
