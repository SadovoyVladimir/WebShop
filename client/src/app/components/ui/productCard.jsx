import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getUserById } from '../../store/usersSlice'
import CartButton from './addToCartButton/cartButton'
import getRandomInt from '../../utils/getRandomInt'

export default function ProductCard({
  name,
  price,
  imagesInfo,
  description,
  _id,
  userId
}) {
  const { name: userName } = useSelector(getUserById(userId))

  return (
    <div className='card mb-3' style={{ maxWidth: 100 + '%' }}>
      <div className='row g-0'>
        <div className='col-md-2'>
          <NavLink to={`/product/${_id}`}>
            <img
              src={imagesInfo[getRandomInt(0, imagesInfo.length - 1)]}
              className='img-fluid rounded-start'
              alt='no images'
              style={{ width: '100%' }}
            />
          </NavLink>
        </div>
        <div className='col-md-7'>
          <div className='card-body'>
            <NavLink
              to={`/product/${_id}`}
              className='text-decoration-none text-reset'
            >
              <h5 className='card-title'>{name}</h5>
            </NavLink>
            <p className='card-text'>{description}</p>
            <p className='card-text'>
              <small className='text-muted'>От: {userName}</small>
            </p>
          </div>
        </div>
        <div className='col-md-3 d-flex flex-column align-self-center pb-3 ps-3 pe-1'>
          <p className='card-text mt-2'>Цена за 1: {price} руб.</p>
          <CartButton id={_id} />
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imagesInfo: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
}
