import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ProductsList from '../ui/productsList'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const [products, setProducts] = useState(null)
  const [allProducts, setAllProducts] = useState(null)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products')
    await setProducts(response.data)
    getAllProducts(categoryId)
    console.log(allProducts)
  }

  const getAllProducts = (categoryId) => {
    setAllProducts(products.filter((p) => p.category.id !== categoryId))
  }

  return (
    <div>
      <h2 className='text-center'>Category Page</h2>
      {allProducts && <ProductsList products={allProducts} />}
      <div>
        <NavLink to='/'>Main Page</NavLink>
      </div>

      <NavLink to='/product/product1'>Product 1</NavLink>
    </div>
  )
}
