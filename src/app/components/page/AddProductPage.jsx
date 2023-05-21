import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import { getProducts } from '../../store/productsSlice'
import { paginate } from '../../utils/paginate'
import ProductsTable from '../ui/productsTable'
import Pagination from '../common/pagination'
import { NavLink } from 'react-router-dom'

export default function AddProductPage() {
  const [currentPage, setCurrentPage] = useState(1)
  // const currentUserId = useSelector(getCurrentUserId())
  const products = useSelector(getProducts())
  const [sortBy, setSortBy] = useState({ path: 'title', order: 'asc' })
  const pageSize = 7

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleSort = (item) => {
    setSortBy(item)
  }

  // if (products) {
  // function filterProducts(data) {
  //   const filteredProducts = searchQuery
  //     ? data.filter(
  //         (product) =>
  //           product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  //       )
  //     : data

  //   return filteredProducts
  //   // return filteredProducts.filter((u) => u._id !== currentUserId)
  // }

  // const filteredProducts = filterProducts(products)

  const count = products.length
  if (currentPage > Math.ceil(count / pageSize) && currentPage !== 1) {
    setCurrentPage((prevState) => --prevState)
  }
  const sortedProducts = _.orderBy(products, [sortBy.path], [sortBy.order])
  const prodCrop = paginate(sortedProducts, currentPage, pageSize)

  return (
    <div className='container'>
      <h1>Your product table</h1>
      <div className='d-flex flex-column'>
        {count > 0 && (
          <ProductsTable
            products={prodCrop}
            onSort={handleSort}
            selectedSort={sortBy}
          />
        )}
        <NavLink to='/addition/create'>
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
