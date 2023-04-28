import React from 'react'
import CategoryCard from './categoryCard'

export default function CategoriesList({ categories }) {
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {categories.map((category) => (
        <CategoryCard {...category} key={category.id} />
      ))}
    </div>
  )
}
