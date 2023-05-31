import React from 'react'
import PropTypes from 'prop-types'

export default function CountInfo({ count }) {
  return (
    <div className='d-flex align-items-center ps-1'>
      <span>{count}</span>
    </div>
  )
}

CountInfo.propTypes = {
  count: PropTypes.number.isRequired
}
