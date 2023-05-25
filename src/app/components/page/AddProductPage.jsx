import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'
import { getProducts } from '../../store/productsSlice'
import { paginate } from '../../utils/paginate'
import ProductsTable from '../ui/productsTable'
import Pagination from '../common/pagination'

export default function AddProductPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const products = useSelector(getProducts())
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
  const pageSize = 7

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  const handlePageChange = pageIndex => {
    setCurrentPage(pageIndex)
  }
  const handleSort = item => {
    setSortBy(item)
  }

  if (products) {
    const count = products.length
    if (currentPage > Math.ceil(count / pageSize) && currentPage !== 1) {
      setCurrentPage(prevState => --prevState)
    }
    const sortedProducts = _.orderBy(products, [sortBy.path], [sortBy.order])
    const prodCrop = paginate(sortedProducts, currentPage, pageSize)

    return (
      <div className='pt-2'>
        <h1 className='p-2 mb-3'>Таблица всех товаров</h1>
        <div className='d-flex flex-column'>
          {count > 0 && (
            <ProductsTable
              products={prodCrop}
              onSort={handleSort}
              selectedSort={sortBy}
            />
          )}
          <NavLink to='/products/create'>
            <button className='btn btn-primary'>+</button>
          </NavLink>
          <div className='d-flex justify-content-center'>
            <Pagination
              itemsCount={count}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='pt-2'>
      <h1 className='p-2 mb-3'>Таблица всех товаров</h1>
      <div className='d-flex flex-column'>
        <div>
          <h2>Пока что нет ни одного товара!</h2>
        </div>
        <NavLink to='/products/create'>
          <button className='btn btn-primary'>+</button>
        </NavLink>
      </div>
    </div>
  )
}
