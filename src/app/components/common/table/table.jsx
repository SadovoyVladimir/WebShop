import React from 'react'
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
      className='table table-primary table-hover table-bordered'
      style={{ tableLayout: 'fixed' }}
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
