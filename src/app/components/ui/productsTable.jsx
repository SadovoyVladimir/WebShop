import React from 'react'
import Table from '../common/table'
import { NavLink } from 'react-router-dom'

export default function ProductsTable({ products, onSort, selectedSort }) {
  const style = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
  const columns = {
    id: { path: 'id', name: 'ID', width: 7 },
    title: {
      path: 'title',
      name: 'Название',
      width: 30,
      component: product => (
        <NavLink to={`/product/${product.id}`}>{product.title}</NavLink>
      )
    },
    category: {
      name: 'Категория',
      width: 20,
      component: product => <p>{product.category.name}</p>
    },
    price: {
      path: 'price',
      name: 'Цена, $',
      width: 13,
      component: product => <p>{product.price}</p>
    },
    url: {
      name: 'Адрес картинки',
      width: 20,
      component: product => <p style={style}>{product.images[0]}</p>
    },
    edit: {
      name: 'Редакт.',
      width: 10,
      component: () => (
        <div className='d-flex align-items-center justify-content-center'>
          <NavLink to='/addition/edit'>
            <i className='bi bi-pencil' style={{ fontSize: 25 + 'px' }}></i>
          </NavLink>
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
