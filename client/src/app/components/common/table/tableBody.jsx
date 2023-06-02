import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

export default function TableBody({ data, columns }) {
  const renderContent = (item, column, index) => {
    const component = columns[column].component
    if (component) {
      if (typeof component === 'function') {
        return component(item, index)
      }
      return component
    }
    return _.get(item, columns[column].path)
  }

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={item.id}>
          {Object.keys(columns).map(column => (
            <td key={column}>{renderContent(item, column, index)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired
}
