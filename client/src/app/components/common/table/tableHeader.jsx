import React from 'react'
import PropTypes from 'prop-types'

export default function TableHeader({ onSort, selectedSort, columns }) {
  const handleSort = item => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'desc' ? 'asc' : 'desc'
      })
    } else {
      onSort({ path: item, order: 'desc' })
    }
  }
  const renderSortArrow = (path, currentPath) => {
    if (path === currentPath) {
      return (
        <i
          className={
            'bi bi-caret-' +
            (selectedSort.order === 'asc' ? 'up' : 'down') +
            '-fill'
          }
        ></i>
      )
    }
    return null
  }

  return (
    <thead>
      <tr>
        {Object.keys(columns).map(column => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && 'button' }}
            scope='col'
            style={{ width: `${columns[column].width}%` }}
            className='unselectable'
          >
            {columns[column].name}
            {renderSortArrow(selectedSort.path, columns[column].path)}
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
}
