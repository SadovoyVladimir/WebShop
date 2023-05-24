import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Table from '../common/table'
import { removeProduct } from '../../store/productsSlice'

export default function ProductsTable({ products, onSort, selectedSort }) {
  const dispatch = useDispatch()
  const style = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
  const handleDelete = id => {
    dispatch(removeProduct(id))
  }
  const columns = {
    id: { path: 'id', name: 'ID', width: 7 },
    name: {
      path: 'name',
      name: 'Название',
      width: 30,
      component: product => (
        <NavLink to={`/product/${product.id}`}>{product.name}</NavLink>
      )
    },
    category: {
      name: 'Категория',
      width: 20,
      component: product => <p>{product.category}</p>
    },
    price: {
      path: 'price',
      name: 'Цена, $',
      width: 13,
      component: product => <p>{product.price}</p>
    },
    // url: {
    //   name: 'Адрес картинки',
    //   width: 20,
    //   component: product => <p style={style}>{product.imagesInfo[0]}</p>
    // },
    edit: {
      name: 'Редакт.',
      width: 5,
      component: product => (
        <div className='d-flex align-items-center justify-content-center'>
          <NavLink to={`/addition/edit/${product.id}`}>
            <i className='bi bi-pencil' style={{ fontSize: 25 + 'px' }}></i>
          </NavLink>
        </div>
      )
    },
    delete: {
      name: 'Удал.',
      width: 5,
      component: product => (
        <div className='d-flex align-items-center justify-content-center'>
          <div
            className=''
            style={{ cursor: 'pointer' }}
            onClick={() => handleDelete(product.id)}
          >
            <i
              className='bi bi-x-square-fill'
              style={{ fontSize: 25 + 'px', color: 'red' }}
            ></i>
          </div>
        </div>
      )
    }
  }

  return (
    <Table
      onSort={onSort}
      columns={columns}
      selectedSort={selectedSort}
      data={products}
    />
  )
}
