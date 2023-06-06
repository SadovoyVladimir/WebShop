import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import { getProducts } from '../../store/productsSlice'
import Pagination from '../common/pagination'
import ProductsTable from '../ui/productsTable'
import { paginate } from '../../utils/paginate'

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

  if (products.length) {
    const count = products.length
    if (currentPage > Math.ceil(count / pageSize) && currentPage !== 1) {
      setCurrentPage(prevState => --prevState)
    }
    const sortedProducts = _.orderBy(products, [sortBy.path], [sortBy.order])
    const prodCrop = paginate(sortedProducts, currentPage, pageSize)

    return (
      <div className='pt-2'>
        <h1 className='d-flex justify-content-center mb-3'>
          Таблица всех товаров
        </h1>
        <div className='d-flex flex-column'>
          {count > 0 && (
            <ProductsTable
              products={prodCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              productsBefore={(currentPage - 1) * pageSize}
            />
          )}
          <div className='d-flex justify-content-center'>
            <Pagination
              itemsCount={count}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          </div>
          <div className='d-inline-flex'>
            <NavLink to='/products/create'>
              <button className='btn btn-primary'>Добавить товар</button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='mt-4'>
      <div className='d-flex flex-column align-items-center'>
        <h5>В магазине ещё нет ни одного товара!</h5>
        <div className='d-inline-flex'>
          <NavLink to='/products/create'>
            <button className='btn btn-primary'>Добавить</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
