import React, { useState } from 'react'

export default function TextField({
  label,
  type = 'text',
  value,
  name,
  onChange,
  error
}) {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = ({ target }) => {
    let { value } = target
    if (type === 'number' && value !== '') value = +value
    onChange({ name: target.name, value })
  }
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }
  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <div className='mb-4'>
      <label htmlFor={name}>{label}</label>
      <div className='input-group has-validation'>
        <input
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        />
        {type === 'password' && (
          <button
            className='btn btn-outline-secondary'
            type='button'
            onClick={toggleShowPassword}
          >
            <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}></i>
          </button>
        )}
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  )
}
