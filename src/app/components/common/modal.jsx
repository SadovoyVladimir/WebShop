import React from 'react'

export default function Modal({
  id,
  title,
  body,
  firstBtnText,
  secondBtnText,
  minWidth,
  onCancel,
  onSave,
  isValid = true
}) {
  return (
    <div
      className='modal fade mx-2'
      id={id}
      tabIndex='-1'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      aria-labelledby={id}
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered' style={{ minWidth }}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id={id}>
              {title}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={onCancel}
            ></button>
          </div>
          <div className='modal-body'>{body}</div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-dismiss='modal'
              onClick={onSave}
              disabled={!isValid}
            >
              {firstBtnText}
            </button>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={onCancel}
            >
              {secondBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
