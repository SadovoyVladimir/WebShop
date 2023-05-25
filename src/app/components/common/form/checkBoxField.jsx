import React from 'react'

export default function CheckBoxField({
  name,
  value,
  onChange,
  children,
  error
}) {
  const handleChange = () => {
    onChange({ name, value: !value })
  }

  const getInputClasses = () => {
    return 'form-check-input' + (error ? ' is-invalid' : '')
  }
  return (
    <div className='form-check mb-4'>
      <input
        className={getInputClasses()}
        type='checkbox'
        value=''
        id={name}
        onChange={handleChange}
        checked={value}
        style={{ cursor: 'pointer' }}
      />
      <label
        className='form-check-label unselectable'
        htmlFor={name}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </label>
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}
