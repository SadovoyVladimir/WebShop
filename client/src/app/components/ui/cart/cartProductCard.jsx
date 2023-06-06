import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import cartLocalStorageService from '../../../services/cartLocalStorage.service'
import AddSubButton from '../../common/addSubButton'
import getRandomInt from '../../../utils/getRandomInt'

export default function CartProductCard({
  name,
  price,
  imagesInfo,
  _id,
  count,
  addProduct,
  subProduct,
  deleteProduct
}) {
  const subFromCart = () => {
    cartLocalStorageService.subProductFromStorage(_id)
    subProduct(_id)
  }
  const addToCart = () => {
    cartLocalStorageService.addProductIdToStorage(_id)
    addProduct(_id)
  }
  const deleteFromCart = () => {
    cartLocalStorageService.deleteProductFromStorage(_id)
    deleteProduct(_id)
  }

  return (
    <div className='card mb-3 border-0' style={{ maxWidth: 100 + '%' }}>
      <div className='row g-0'>
        <div className='col-md-2'>
          <NavLink to={`/product/${_id}`}>
            <img
              src={imagesInfo[getRandomInt(0, imagesInfo.length - 1)]}
              className='img-fluid rounded-start'
              alt='no images'
            />
          </NavLink>
        </div>
        <div className='col-md-7'>
          <div className='card-body py-1 px-2'>
            <NavLink
              to={`/product/${_id}`}
              className='text-decoration-none text-reset'
            >
              <h5 className='card-title'>{name}</h5>
            </NavLink>
          </div>
        </div>
        <div className='col-md-2 '>
          <p className='card-text mt-2'>{price * count} руб.</p>
          <AddSubButton
            text={count}
            subHandler={subFromCart}
            addHandler={addToCart}
          />
        </div>
        <div className='col-md-1 d-flex justify-content-center align-items-center'>
          <div
            className='d-flex justify-content-center align-items-center'
            onClick={deleteFromCart}
            style={{ cursor: 'pointer', width: 30 + 'px', height: 30 + 'px' }}
          >
            <i className='bi bi-x-lg'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

CartProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imagesInfo: PropTypes.array.isRequired,
  _id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  addProduct: PropTypes.func.isRequired,
  subProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
}
