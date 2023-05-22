import React from 'react'
import _ from 'lodash'

export default function Pagination({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage
}) {
  const pageCount = Math.ceil(itemsCount / pageSize)
  if (pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)

  return (
    <nav className='m-2'>
      <ul className='pagination'>
        {pages.map(page => (
          <li
            key={'page_' + page}
            className={'page-item ' + (page === currentPage ? 'active' : '')}
          >
            <button className='page-link' onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
