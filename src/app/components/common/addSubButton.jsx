import React from 'react'

export default function AddSubButton({ text, subHandler, addHandler }) {
  return (
    <div className='d-flex align-items-center'>
      <button className='left-part-btn' onClick={subHandler}>
        -
      </button>
      <span className='middle-part-btn justify-content-center'>{text}</span>
      <button className='right-part-btn' onClick={addHandler}>
        +
      </button>
    </div>
  )
}
