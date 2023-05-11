import React from 'react'
import CategoryCard from './categoryCard'

export default function CategoriesList({ categories }) {
  const filteredCategories = categories.filter((cat) => Object.keys(cat).length)

  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {filteredCategories.map((category) => (
        <CategoryCard {...category} key={category.id} />
      ))}
    </div>
  )
}
