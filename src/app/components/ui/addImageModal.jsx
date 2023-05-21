import React from 'react'
import Modal from '../common/modal'
import LoadFileField from '../common/form/loadFileField'

export default function AddImageModal({ id, image, errImage, onChange }) {
  const info = {
    id,
    title: 'Выберите картинку',
    body: (
      <LoadFileField
        label='Ссылка на картинку'
        name='image'
        value={image}
        onChange={onChange}
        error={errImage}
      />
    ),
    firstBtnText: 'Открыть',
    secondBtnText: 'Закрыть',
    minWidth: '1000px'
  }
  return <Modal {...info} />
}
