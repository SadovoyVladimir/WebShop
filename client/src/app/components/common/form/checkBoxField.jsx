import React from 'react'
import PropTypes from 'prop-types'

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

CheckBoxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
