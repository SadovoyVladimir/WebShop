import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeProduct } from '../../store/productsSlice'

export default function ChangeButtons({ data, isEdit = false }) {
  const dispatch = useDispatch()
  const handleDelete = id => {
    dispatch(removeProduct(id))
  }
  if (!isEdit) return <></>
  return (
    <div className='d-flex align-items-center'>
      <div className='d-flex align-items-center justify-content-center pe-3'>
        <NavLink to={`/products/edit/${data.id}`}>
          <i className='bi bi-pencil' style={{ fontSize: 25 + 'px' }}></i>
        </NavLink>
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        <div
          className=''
          style={{ cursor: 'pointer' }}
          onClick={() => handleDelete(data.id)}
        >
          <i
            className='bi bi-x-square-fill'
            style={{ fontSize: 25 + 'px', color: 'red' }}
          ></i>
        </div>
      </div>
    </div>
  )
}
