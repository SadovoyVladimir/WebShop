import React from 'react'
import ChangeButtons from '../common/changeButtons'

export default function ChangeTableButtons({ product, userId }) {
  const isEdit = userId === product.userId

  return (
    <div>
      <ChangeButtons data={product} isEdit={isEdit} />
    </div>
  )
}
