import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearAuthError,
  getAuthErrors,
  signIn
} from '../../../store/usersSlice'
import TextField from '../../common/form/textField'
import { validator } from '../../../utils/validator'

export default function LoginForm() {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const loginError = useSelector(getAuthErrors())
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [errors, setErrors] = useState({})

  const handleChange = target => {
    if (loginError) dispatch(clearAuthError())
    setData(prevState => ({ ...prevState, [target.name]: target.value }))
  }

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Email введен некорректно' }
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' }
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return !Object.keys(errors).length
  }

  const isValid = !Object.keys(errors).length

  const handleSubmit = e => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    const redirect = location.state?.referrer.pathname || '/products'
    dispatch(signIn({ payload: data })).then(() =>
      navigate(redirect, { replace: true })
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Электронная почта'
        name='email'
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label='Пароль'
        type='password'
        name='password'
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      {loginError && <p className='text-danger'>{loginError}</p>}
      <button disabled={!isValid} className='btn btn-primary w-100 mx-auto'>
        Войти
      </button>
    </form>
  )
}
