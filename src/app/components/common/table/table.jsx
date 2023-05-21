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
