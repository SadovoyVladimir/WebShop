import React from 'react'
import _ from 'lodash'

export default function TableBody({ data, columns }) {
  const renderContent = (item, column) => {
    const component = columns[column].component
    if (component) {
      if (typeof component === 'function') {
        return component(item)
      }
      return component
    }
    return _.get(item, columns[column].path)
  }

  return (
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          {Object.keys(columns).map(column => (
            <td key={column}>{renderContent(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
