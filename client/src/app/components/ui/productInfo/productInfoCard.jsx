import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getCategoryById } from '../../../store/categoriesSlice'
import { getUserById } from '../../../store/usersSlice'
import getRandomInt from '../../../utils/getRandomInt'

export default function ProductInfoCard({
  imagesInfo,
  description,
  category,
  userId
}) {
  const { name: categoryName } = useSelector(getCategoryById(category))
  const { name: userName } = useSelector(getUserById(userId))

  return (
    <>
      <div className='card mb-3'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img
              src={imagesInfo[getRandomInt(0, imagesInfo.length - 1)]}
              className='img-fluid rounded-start'
              alt=''
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>Категория: </h5>
              <p className='card-text'>{categoryName}</p>
              <h5 className='card-title'>Описание:</h5>
              <p className='card-text'>{description}</p>
              <p className='card-text'>
                <small className='text-muted'>От: {userName}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ProductInfoCard.propTypes = {
  imagesInfo: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
}
