import React from 'react'

export default function CountInfo({ count }) {
  return (
    <div className='d-flex align-items-center ps-1'>
      <span>{count}</span>
    </div>
  )
}
