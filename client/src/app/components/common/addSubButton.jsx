import React from 'react'
import PropTypes from 'prop-types'

export default function AddSubButton({ text, subHandler, addHandler }) {
  return (
    <div className='d-flex align-items-center'>
      <button className='left-part-btn' onClick={subHandler} style={{ zIndex: '100' }}>
        -
      </button>
      <span className='middle-part-btn justify-content-center'>{text}</span>
      <button className='right-part-btn' onClick={addHandler} style={{ zIndex: '100' }}>
        +
      </button>
    </div>
  )
}

AddSubButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subHandler: PropTypes.func.isRequired,
  addHandler: PropTypes.func.isRequired
}
