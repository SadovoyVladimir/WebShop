import React from 'react'
import PropTypes from 'prop-types'

export default function SelectField({
  label,
  value,
  onChange,
  defaultOption,
  options,
  name,
  error
}) {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }

  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.values(options)
      : options

  return (
    <div className='mb-4'>
      <label htmlFor={name} className='form-label mb-0'>
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {defaultOption && (
          <option disabled value=''>
            {defaultOption}
          </option>
        )}
        {optionsArray.length > 0 &&
          optionsArray.map(
            option =>
              option._id && (
                <option key={option._id} value={option.name}>
                  {option.name}
                </option>
              )
          )}
      </select>
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string.isRequired,
  error: PropTypes.string
}
