import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

export default function Table({
  onSort,
  selectedSort,
  columns,
  data,
  children
}) {
  return (
    <table
      className='table table-primary'
      style={{ tableLayout: 'fixed', border: '1px solid black' }}
    >
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns }} />
          <TableBody {...{ data, columns }} />
        </>
      )}
    </table>
  )
}

Table.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  children: PropTypes.array
}
