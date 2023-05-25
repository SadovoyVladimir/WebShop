import React from 'react'
import Table from '../common/table'
import CountInfo from '../common/countInfo'
import NameInfo from '../common/nameInfo'
import CategoryInfo from '../common/categoryInfo'
import ChangeTableButtons from './changeTableButtons'
import { useSelector } from 'react-redux'
import { getCurrentUserId } from '../../store/usersSlice'
import UserInfo from '../common/userInfo'

export default function ProductsTable({ products, onSort, selectedSort }) {
  const userId = useSelector(getCurrentUserId())

  const columns = {
    count: {
      name: '№',
      width: 5,
      component: (product, index) => <CountInfo count={index + 1} />
    },
    name: {
      path: 'name',
      name: 'Наименование',
      width: 25,
      component: product => <NameInfo {...product} />
    },
    category: {
      name: 'Категория',
      width: 25,
      component: product => <CategoryInfo categoryId={product.category} />
    },
    price: {
      path: 'price',
      name: 'Цена, руб.',
      width: 15,
      component: product => <p>{product.price}</p>
    },
    creator: {
      name: 'Создатель',
      width: 15,
      component: product => <UserInfo {...product} />
    },
    edit: {
      name: 'Действия',
      width: 15,
      component: product => (
        <ChangeTableButtons product={product} userId={userId} />
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
