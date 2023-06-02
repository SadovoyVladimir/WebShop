import React from 'react'
import PropTypes from 'prop-types'
import ChangeButtons from './changeButtons'

export default function ChangeTableButtons({ product, userId }) {
  const isEdit = userId === product.userId

  return (
    <div>
      <ChangeButtons data={product} isEdit={isEdit} />
    </div>
  )
}

ChangeTableButtons.propTypes = {
  product: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired
}
