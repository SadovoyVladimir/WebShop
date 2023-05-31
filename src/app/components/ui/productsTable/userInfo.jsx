import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getUserById } from '../../../store/usersSlice'

export default function UserInfo({ userId }) {
  const { name } = useSelector(getUserById(userId))
  return <p className='trim-extra-text'>{name || 'Нет имени'}</p>
}

UserInfo.propTypes = {
  userId: PropTypes.string.isRequired
}
