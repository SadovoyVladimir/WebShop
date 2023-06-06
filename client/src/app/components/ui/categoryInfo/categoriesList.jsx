import React from 'react'
import PropTypes from 'prop-types'
import CategoryCard from './categoryCard'

export default function CategoriesList({ categories }) {
  const filteredCategories = categories.filter(cat => Object.keys(cat).length)

  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
      {filteredCategories.map(category => (
        <CategoryCard {...category} key={category._id} />
      ))}
    </div>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}
