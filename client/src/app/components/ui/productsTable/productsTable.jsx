import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getCurrentUserId } from '../../../store/usersSlice'
import Table from '../../common/table'
import CountInfo from './countInfo'
import NameInfo from './nameInfo'
import CategoryInfo from './categoryInfo'
import UserInfo from './userInfo'
import ChangeTableButtons from './changeTableButtons'

export default function ProductsTable({
  products,
  onSort,
  selectedSort,
  productsBefore
}) {
  const userId = useSelector(getCurrentUserId())

  const columns = {
    count: {
      name: '№',
      width: 5,
      component: (product, index) => (
        <CountInfo count={productsBefore + index + 1} />
      )
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

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  productsBefore: PropTypes.number.isRequired
}
